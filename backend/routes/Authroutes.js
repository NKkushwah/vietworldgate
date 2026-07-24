const express   = require("express");
const jwt       = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const User      = require("../models/User");
const { protect, authorise } = require("../middleware/auth");
const crypto    = require("crypto"); // Import crypto utility

const router = express.Router();

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg });
  }
  next();
};

/* ──────────────────────────────────────────
   POST /api/auth/register
────────────────────────────────────────── */
router.post(
  "/register",
  [
    body("name").trim().isLength({ min: 2 }).withMessage("Name must be at least 2 characters."),
    body("email").isEmail().normalizeEmail().withMessage("Please enter a valid email."),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters."),
    body("role").isIn(["admin", "employee", "student"]).withMessage("Invalid role selected."),
  ],
  validate,
  async (req, res) => {
    try {
      const { name, email, password, role } = req.body;

      const existing = await User.findOne({ email });
      if (existing) {
        return res.status(409).json({ message: "An account with this email already exists." });
      }

      const user = await User.create({ name, email, password, role });
      const token = signToken(user._id);

      res.status(201).json({
        message: "Account created successfully.",
        token,
        user: user.toSafeObject(),
      });
    } catch (err) {
      console.error("Register error:", err);
      res.status(500).json({ message: "Server error. Please try again." });
    }
  }
);

/* ──────────────────────────────────────────
   POST /api/auth/login
────────────────────────────────────────── */
router.post(
  "/login",
  [
    body("email").isEmail().normalizeEmail().withMessage("Please enter a valid email."),
    body("password").notEmpty().withMessage("Password is required."),
    body("role").isIn(["admin", "employee", "student"]).withMessage("Invalid role selected."),
  ],
  validate,
  async (req, res) => {
    try {
      const { email, password, role } = req.body;

      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password." });
      }

      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password." });
      }

      if (user.role !== role) {
        return res.status(403).json({
          message: `This account is registered as "${user.role}", not "${role}".`,
        });
      }

      if (!user.isActive) {
        return res.status(403).json({ message: "Your account has been deactivated." });
      }

      user.lastLogin = new Date();
      await user.save({ validateBeforeSave: false });

      const token = signToken(user._id);

      res.json({
        message: "Login successful.",
        token,
        user: user.toSafeObject(),
      });
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ message: "Server error. Please try again." });
    }
  }
);

/* ──────────────────────────────────────────
   POST /api/auth/forgot-password
────────────────────────────────────────── */
router.post(
  "/forgot-password",
  [
    body("email").isEmail().normalizeEmail().withMessage("Please enter a valid email."),
  ],
  validate,
  async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "No account found with that email address." });
      }

      // Generate verification token
      const resetToken = user.getResetPasswordToken();
      await user.save({ validateBeforeSave: false });

      // Output to backend console for validation/testing
      console.log(`\n=========================================\n=== PASSWORD RESET TOKEN FOR ${email} ===\n${resetToken}\n=========================================\n`);

      res.json({
        message: "Reset token generated successfully. Please check your system logs or email.",
        // Send token to client in non-production environment for seamless local testing
        token: process.env.NODE_ENV !== "production" ? resetToken : undefined,
      });
    } catch (err) {
      console.error("Forgot password error:", err);
      res.status(500).json({ message: "Server error. Please try again." });
    }
  }
);

/* ──────────────────────────────────────────
   POST /api/auth/reset-password
────────────────────────────────────────── */
router.post(
  "/reset-password",
  [
    body("token").notEmpty().withMessage("Reset token is required."),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters."),
  ],
  validate,
  async (req, res) => {
    try {
      const { token, password } = req.body;

      // Re-hash received token to lookup matching entries in db
      const hashedToken = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");

      const user = await User.findOne({
        resetPasswordToken: hashedToken,
        resetPasswordExpire: { $gt: Date.now() },
      });

      if (!user) {
        return res.status(400).json({ message: "Invalid or expired reset token." });
      }

      // Save new password, clean recovery properties
      user.password = password;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save();

      res.json({ message: "Password updated successfully. You can now log in." });
    } catch (err) {
      console.error("Reset password error:", err);
      res.status(500).json({ message: "Server error. Please try again." });
    }
  }
);

/* ──────────────────────────────────────────
   GET /api/auth/me  (protected)
────────────────────────────────────────── */
router.get("/me", protect, (req, res) => {
  res.json({ user: req.user.toSafeObject() });
});

/* ──────────────────────────────────────────
   GET /api/auth/admin-only  (admin only)
────────────────────────────────────────── */
router.get("/admin-only", protect, authorise("admin"), (req, res) => {
  res.json({ message: "Admin access granted.", user: req.user.toSafeObject() });
});

module.exports = router;