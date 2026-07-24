import { useState } from "react";
import "./Auth.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const ROLES = [
  { value: "admin",    label: "Admin",    icon: "🛡️" },
  { value: "employee", label: "Employee", icon: "💼" },
  { value: "student",  label: "Student",  icon: "🎓" },
];

const initial = {
  login:  { email: "", password: "", role: "" },
  signup: { name: "", email: "", password: "", confirm: "", role: "" },
};

export default function AuthPage() {
  const [panel, setPanel]       = useState("login"); // "login" | "signup"
  const [form, setForm]         = useState(initial);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const [success, setSuccess]   = useState("");

  // Forgot Password / Reset Password States
  const [isForgotMode, setIsForgotMode] = useState(false); // false | "request" | "reset"
  const [forgotEmail, setForgotEmail]   = useState("");
  const [resetToken, setResetToken]     = useState("");
  const [newPassword, setNewPassword]   = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const clear = () => { setError(""); setSuccess(""); };

  const handleChange = (side, field) => (e) => {
    clear();
    setForm((prev) => ({
      ...prev,
      [side]: { ...prev[side], [field]: e.target.value },
    }));
  };

  const switchPanel = (to) => {
    clear();
    setPanel(to);
    setForm(initial);
    // Reset all forgot-password states upon panel switch
    setIsForgotMode(false);
    setForgotEmail("");
    setResetToken("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    clear();
    const { email, password, role } = form.login;
    if (!email || !password || !role) return setError("Please fill in all fields.");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed.");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setSuccess(`Welcome back, ${data.user.name}! Redirecting...`);
    setTimeout(() => {
  const role = data.user.role;

  if (role === "admin") {
    window.location.href = "/admin";
  } else if (role === "employee") {
    window.location.href = "/employee";
  } else {
    window.location.href = "/StudentDashboard"; // normal user
  }
}, 1200);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    clear();
    const { name, email, password, confirm, role } = form.signup;
    if (!name || !email || !password || !confirm || !role)
      return setError("Please fill in all fields.");
    if (password !== confirm) return setError("Passwords do not match.");
    if (password.length < 6) return setError("Password must be at least 6 characters.");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed.");
      setSuccess("Account created! You can now log in.");
      setTimeout(() => switchPanel("login"), 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Submit request to send password recovery token
  const handleForgotRequest = async (e) => {
    e.preventDefault();
    clear();
    if (!forgotEmail) return setError("Please enter your email address.");
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Password recovery request failed.");
      
      setSuccess(data.message);
      // Auto-populate token if returned in development for direct workflow testing
      if (data.token) {
        setResetToken(data.token);
      }
      setIsForgotMode("reset");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Submit token and new password to complete the reset
  const handleResetSubmit = async (e) => {
    e.preventDefault();
    clear();
    if (!resetToken || !newPassword || !confirmPassword) {
      return setError("Please fill in all fields.");
    }
    if (newPassword !== confirmPassword) {
      return setError("Passwords do not match.");
    }
    if (newPassword.length < 6) {
      return setError("Password must be at least 6 characters.");
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: resetToken, password: newPassword }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Reset password failed.");
      
      setSuccess("Password updated successfully! Redirecting to sign in...");
      setTimeout(() => {
        setIsForgotMode(false);
        setForgotEmail("");
        setResetToken("");
        setNewPassword("");
        setConfirmPassword("");
        switchPanel("login");
      }, 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
 
    <div className="auth-root">
      <div className="auth-card">

        {/* LOGIN SIDE */}
        <div className="auth-side login-side">
          {isForgotMode === "request" ? (
            /* Forgot Password: Email Request Form */
            <>
              <div className="auth-side-header">
                <span className="company-tag">Password Recovery</span>
                <h2>Reset your password</h2>
                <p>Enter your account email to request a reset token</p>
              </div>

              <form onSubmit={handleForgotRequest} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={forgotEmail}
                    onChange={(e) => { clear(); setForgotEmail(e.target.value); }}
                    autoComplete="email"
                  />
                </div>

                {error  && <div className="error-msg">{error}</div>}
                {success && <div className="success-msg">{success}</div>}

                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? "Sending link..." : "Send Reset Token"}
                </button>
              </form>

              <div className="switch-link">
                Remembered your password?{" "}
                <button onClick={() => { clear(); setIsForgotMode(false); }}>Sign in</button>
              </div>
            </>
          ) : isForgotMode === "reset" ? (
            /* Forgot Password: Submit Token & New Password Form */
            <>
              <div className="auth-side-header">
                <span className="company-tag">Password Recovery</span>
                <h2>Create new password</h2>
                <p>Provide validation token and enter your new password</p>
              </div>

              <form onSubmit={handleResetSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div className="form-group">
                  <label>Reset Token</label>
                  <input
                    type="text"
                    placeholder="Paste recovery token"
                    value={resetToken}
                    onChange={(e) => { clear(); setResetToken(e.target.value); }}
                  />
                </div>

                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    placeholder="Min. 6 characters"
                    value={newPassword}
                    onChange={(e) => { clear(); setNewPassword(e.target.value); }}
                    autoComplete="new-password"
                  />
                </div>

                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm your new password"
                    value={confirmPassword}
                    onChange={(e) => { clear(); setConfirmPassword(e.target.value); }}
                    autoComplete="new-password"
                  />
                </div>

                {error  && <div className="error-msg">{error}</div>}
                {success && <div className="success-msg">{success}</div>}

                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? "Resetting password..." : "Confirm Reset"}
                </button>
              </form>

              <div className="switch-link">
                Need to request a new token?{" "}
                <button onClick={() => { clear(); setIsForgotMode("request"); }}>Request token</button>
              </div>
            </>
          ) : (
            /* Standard Login Form */
            <>
              <div className="auth-side-header">
                <span className="company-tag">Company Portal</span>
                <h2>Sign in to your account</h2>
                <p>Enter your credentials to continue</p>
              </div>

              <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={form.login.email}
                    onChange={handleChange("login", "email")}
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={form.login.password}
                    onChange={handleChange("login", "password")}
                    autoComplete="current-password"
                  />
                  <button 
                    type="button" 
                    className="forgot-link"
                    onClick={() => { clear(); setIsForgotMode("request"); }}
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="form-group">
                  <label>Sign in as</label>
                  <div className="select-wrapper">
                    <select
                      value={form.login.role}
                      onChange={handleChange("login", "role")}
                    >
                      <option value="" disabled>Select your role</option>
                      {ROLES.map((r) => (
                        <option key={r.value} value={r.value}>
                          {r.icon} {r.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {error  && <div className="error-msg">{error}</div>}
                {success && <div className="success-msg">{success}</div>}

                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </form>

              <div className="switch-link">
                Don't have an account?{" "}
                <button onClick={() => switchPanel("signup")}>Create one</button>
              </div>
            </>
          )}
        </div>

        {/* SIGNUP SIDE */}
        <div className="auth-side signup-side">
          <div className="auth-side-header">
            <span className="company-tag">New here?</span>
            <h2>Create your account</h2>
            <p>Join the portal and get started</p>
          </div>

          <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div className="form-group">
              <label>Full name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={form.signup.name}
                onChange={handleChange("signup", "name")}
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                placeholder="you@company.com"
                value={form.signup.email}
                onChange={handleChange("signup", "email")}
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Min. 6 characters"
                value={form.signup.password}
                onChange={handleChange("signup", "password")}
                autoComplete="new-password"
              />
            </div>

            <div className="form-group">
              <label>Confirm password</label>
              <input
                type="password"
                placeholder="Repeat your password"
                value={form.signup.confirm}
                onChange={handleChange("signup", "confirm")}
                autoComplete="new-password"
              />
            </div>

            <div className="form-group">
              <label>Register as</label>
              <div className="select-wrapper">
                <select
                  value={form.signup.role}
                  onChange={handleChange("signup", "role")}
                >
                  <option value="" disabled>Select your role</option>
                  {ROLES.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.icon} {r.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {error  && <div className="error-msg">{error}</div>}
            {success && <div className="success-msg">{success}</div>}

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <div className="switch-link">
            Already have an account?{" "}
            <button onClick={() => switchPanel("login")}>Sign in</button>
          </div>
        </div>

        {/* SLIDING PANEL */}
        <div className={`auth-panel${panel === "signup" ? " slide-right" : ""}`}>
          <div className="panel-logo">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          {panel === "login" ? (
            <>
              <h2>New to the portal?</h2>
              <p>Create your account and join your team in seconds. It's quick and free.</p>
              <button className="panel-btn" onClick={() => switchPanel("signup")}>
                Create account
              </button>
            </>
          ) : (
            <>
              <h2>Already have an account?</h2>
              <p>Sign in and pick up right where you left off. Your work is waiting for you.</p>
              <button className="panel-btn" onClick={() => switchPanel("login")}>
                Sign in
              </button>
            </>
          )}
          <div className="panel-dots">
            <span className={panel === "login"  ? "active" : ""} />
            <span className={panel === "signup" ? "active" : ""} />
          </div>
        </div>
      </div>
    </div>
    <Footer />
       </>
  );
}