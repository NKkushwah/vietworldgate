require("dotenv").config();

const express     = require("express");
const cors        = require("cors");
const rateLimit   = require("express-rate-limit");
const connectDB   = require("./config/db");
const authRoutes  = require("./routes/Authroutes");
const documentRoutes = require("./routes/documentRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const consultationRoutes = require("./routes/consultationRoutes");
const deadlineRoutes = require("./routes/deadlineRoutes");
const visaFeeRoutes = require("./routes/visaFeeRoutes");

const app = express();


connectDB();

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { message: "Too many requests. Please wait 15 minutes and try again." },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api/auth", authLimiter);

app.use("/api/auth", authRoutes);

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV,
  });
});


app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/consultations", consultationRoutes);
app.use("/api/deadlines", deadlineRoutes);
app.use("/api/visa-fee", visaFeeRoutes);
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found.` });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: process.env.NODE_ENV === "production"
      ? "Something went wrong."
      : err.message,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} [${process.env.NODE_ENV}]`);
});

module.exports = app;