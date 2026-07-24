import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import {
  FiBell,
  FiCalendar,
  FiFileText,
  FiArrowRight,
  FiUpload,
  FiTrash2,
  FiDownload,
  FiX,
  FiClock,
  FiCheckCircle,
  FiDollarSign,
  FiAlertCircle,
} from "react-icons/fi";
import { GraduationCap } from "lucide-react";
import "./StudentDashbaord.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TABS = ["Overview", "Notifications", "Documents", "Profile"];

const DOC_TYPES = [
  "Passport",
  "10th Marksheet",
  "12th Marksheet",
  "Graduation Certificate",
  "IELTS/TOEFL Score",
  "SOP",
  "LOR",
  "Resume",
  "Bank Statement",
  "Other",
];

// File-type → icon color class, for the document cards
const TYPE_ICON_MAP = {
  Passport: "doc-icon-blue",
  "10th Marksheet": "doc-icon-purple",
  "12th Marksheet": "doc-icon-purple",
  "Graduation Certificate": "doc-icon-purple",
  "IELTS/TOEFL Score": "doc-icon-teal",
  SOP: "doc-icon-amber",
  LOR: "doc-icon-amber",
  Resume: "doc-icon-gray",
  "Bank Statement": "doc-icon-green",
  Other: "doc-icon-gray",
};

// ==========================================
// API CONFIG — points to your local backend
// ==========================================
const API_BASE = "http://localhost:5000/api";

function getToken() {
  return localStorage.getItem("token");
}

async function apiRequest(path, options = {}) {
  const token = getToken();
  const headers = {
    ...(options.body && !(options.body instanceof FormData)
      ? { "Content-Type": "application/json" }
      : {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }
  return data;
}

function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  const [profile, setProfile] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [checklist, setChecklist] = useState({
    requiredTypes: [],
    completedRequiredCount: 0,
    totalRequired: 0,
    progressPercent: 0,
  });
  const [consultations, setConsultations] = useState([]);
  const [deadlines, setDeadlines] = useState([]);

  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState("");

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedDocType, setSelectedDocType] = useState(DOC_TYPES[0]);
  const [uploadError, setUploadError] = useState("");
  const [uploading, setUploading] = useState(false);

  // Visa fee calculator state
  const [selectedCountry, setSelectedCountry] = useState("Canada");
  const [numApplicants, setNumApplicants] = useState(1);
  const [visaCountries, setVisaCountries] = useState([]);
  const [visaCalc, setVisaCalc] = useState(null);
  const [visaLoading, setVisaLoading] = useState(false);

  // Live countdown ticking state (kept for visual re-render; backend supplies daysLeft)
  const [, setNow] = useState(new Date());

  const fileInputRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // ==========================================
  // INITIAL DATA LOAD
  // ==========================================
  const loadProfile = useCallback(async () => {
    
  const user = JSON.parse(localStorage.getItem("user"));
setProfile(user);

  }, []);

  const loadNotifications = useCallback(async () => {
    const data = await apiRequest("/notifications");
    setNotifications(data.notifications);
  }, []);

  const loadDocuments = useCallback(async () => {
    const data = await apiRequest("/documents");
    setDocuments(data.documents);
    setChecklist(data.checklist);
  }, []);

  const loadConsultations = useCallback(async () => {
    const data = await apiRequest("/consultations");
    setConsultations(data.consultations);
  }, []);

  const loadDeadlines = useCallback(async () => {
    const data = await apiRequest("/deadlines");
    setDeadlines(data.deadlines);
  }, []);

  const loadVisaCountries = useCallback(async () => {
    const data = await apiRequest("/visa-fee/countries");
    setVisaCountries(data.countries);
    if (data.countries.length && !data.countries.includes(selectedCountry)) {
      setSelectedCountry(data.countries[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setPageError("");
        await Promise.all([
          loadProfile(),
          loadNotifications(),
          loadDocuments(),
          loadConsultations(),
          loadDeadlines(),
          loadVisaCountries(),
        ]);
      } catch (err) {
        setPageError(err.message || "Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    })();
  }, [
    loadProfile,
    loadNotifications,
    loadDocuments,
    loadConsultations,
    loadDeadlines,
    loadVisaCountries,
  ]);

  // ==========================================
  // VISA FEE CALCULATOR — fetched from backend
  // ==========================================
  useEffect(() => {
    (async () => {
      try {
        setVisaLoading(true);
        const data = await apiRequest(
          `/visa-fee?country=${encodeURIComponent(selectedCountry)}&applicants=${numApplicants}`
        );
        setVisaCalc(data);
      } catch (err) {
        // Silently ignore — keep last good value, surface inline if needed
        console.error(err);
      } finally {
        setVisaLoading(false);
      }
    })();
  }, [selectedCountry, numApplicants]);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const stats = {
    consultations: consultations.filter((c) => c.status === "Upcoming").length,
    savedUniversities: 0,
    documents: documents.length,
    notifications: unreadCount,
  };

  const uploadedTypes = useMemo(
    () => new Set(documents.map((d) => d.docType)),
    [documents]
  );

  // ==========================================
  // UPLOAD HANDLERS — real API calls
  // ==========================================
  const ALLOWED_TYPES = [
    "application/pdf",
    "image/jpeg",
    "image/jpg",
    "image/png",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const MAX_SIZE = 10 * 1024 * 1024; // 10 MB

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      setUploadError("Only PDF, DOC, DOCX, JPG, and PNG files are allowed.");
      setSelectedFile(null);
      return;
    }

    if (file.size > MAX_SIZE) {
      setUploadError("File size must be under 10 MB.");
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
    setUploadError("");
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadError("Please choose a file first.");
      return;
    }

    setUploading(true);
    setUploadError("");

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("docType", selectedDocType);

      await apiRequest("/documents", { method: "POST", body: formData });

      // Refresh documents + checklist + notifications from server
      await Promise.all([loadDocuments(), loadNotifications()]);

      setShowUploadModal(false);
      setSelectedFile(null);
      setSelectedDocType(DOC_TYPES[0]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      setUploadError(err.message || "Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteDocument = async (id) => {
    if (!window.confirm("Delete this document?")) return;

    try {
      await apiRequest(`/documents/${id}`, { method: "DELETE" });
      setDocuments((prev) => prev.filter((d) => d.id !== id));
    } catch (err) {
      alert(err.message || "Failed to delete document.");
    }
  };

  // ==========================================
  // HELPERS
  // ==========================================
  const formatFileSize = (bytes) => {
    if (!bytes) return "";
    const kb = bytes / 1024;
    if (kb < 1024) return `${kb.toFixed(0)} KB`;
    return `${(kb / 1024).toFixed(1)} MB`;
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const statusBadgeClass = (status) => {
    if (status === "Approved") return "badge badge-approved";
    if (status === "Rejected") return "badge badge-rejected";
    return "badge badge-pending";
  };

  const urgencyClass = (daysLeft) => {
    if (daysLeft <= 7) return "deadline-urgent";
    if (daysLeft <= 21) return "deadline-soon";
    return "deadline-normal";
  };

  const nextDeadline = useMemo(() => deadlines[0], [deadlines]);

  // ==========================================
  // LOADING / ERROR STATES
  // ==========================================
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="dash-wrapper">
          <div className="empty-state">
            <p>Loading your dashboard...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (pageError) {
    return (
      <>
        <Navbar />
        <div className="dash-wrapper">
          <div className="empty-state">
            <FiAlertCircle className="empty-icon" />
            <p>{pageError}</p>
            <button className="btn-outline" onClick={() => window.location.reload()}>
              Retry
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="dash-wrapper">
        {/* =========================
            NOTIFICATION BANNER
        ========================= */}
        {unreadCount > 0 && (
          <div className="notif-banner">
            <FiBell />
            <span>
              You have {unreadCount} new notification{unreadCount > 1 ? "s" : ""}
            </span>
          </div>
        )}

        {/* =========================
            STAT CARDS
        ========================= */}
        <div className="stat-cards">
          <div className="stats-card">
            <p className="stat-label">Consultations</p>
            <div className="stat-value-row">
              <span className="stat-value">{stats.consultations}</span>
              <FiCalendar className="stat-icon" />
            </div>
          </div>

          <div className="stats-card">
            <p className="stat-label">Saved Universities</p>
            <div className="stat-value-row">
              <span className="stat-value">{stats.savedUniversities}</span>
              <GraduationCap className="stat-icon" size={18} />
            </div>
          </div>

          <div className="stats-card">
            <p className="stat-label">Documents</p>
            <div className="stat-value-row">
              <span className="stat-value">{stats.documents}</span>
              <FiFileText className="stat-icon" />
            </div>
          </div>

          <div className="stats-card">
            <p className="stat-label">Notifications</p>
            <div className="stat-value-row">
              <span className="stat-value">{unreadCount}</span>
              <FiBell className="stat-icon" />
            </div>
          </div>
        </div>

        {/* =========================
            TABS
        ========================= */}
        <div className="tabs-row">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "tab-active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {tab === "Notifications" && unreadCount > 0 && (
                <span className="tab-badge">{unreadCount}</span>
              )}
            </button>
          ))}
        </div>

        {/* =========================
            TAB CONTENT
        ========================= */}
        {activeTab === "Overview" && (
          <div className="overview-grid">
            {/* LEFT COLUMN */}
            <div className="overview-left">
              {/* CONSULTATIONS PANEL */}
              <div className="panel">
                <div className="panel-header">
                  <h3>
                    <FiCalendar /> Your Consultations
                  </h3>
                  <button className="btn-outline">Book New</button>
                </div>

                {consultations.length === 0 ? (
                  <div className="empty-state">
                    <FiCalendar className="empty-icon" />
                    <p>No consultations yet</p>
                  </div>
                ) : (
                  <ul className="consult-list">
                    {consultations.slice(0, 4).map((c) => (
                      <li key={c._id || c.id} className="consult-item">
                        <div>
                          <p className="consult-date">
                            {formatDate(c.date)} • {c.time}
                          </p>
                          <p className="consult-meta">
                            {c.consultant} • {c.mode}
                          </p>
                        </div>
                        <span className={`badge badge-${c.status.toLowerCase()}`}>
                          {c.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="overview-right">
              {/* DEADLINE COUNTDOWN */}
              <div className="panel countdown-panel">
                <h3 className="panel-title-only">
                  <FiClock /> Upcoming Deadlines
                </h3>

                {nextDeadline && (
                  <div
                    className={`countdown-hero ${urgencyClass(nextDeadline.daysLeft)}`}
                  >
                    <span className="countdown-days">{nextDeadline.daysLeft}</span>
                    <span className="countdown-unit">days left</span>
                    <p className="countdown-title">{nextDeadline.title}</p>
                    <p className="countdown-date">{formatDate(nextDeadline.date)}</p>
                  </div>
                )}

                <ul className="deadline-list">
                  {deadlines
                    .filter((d) => (d._id || d.id) !== (nextDeadline?._id || nextDeadline?.id))
                    .map((d) => (
                      <li key={d._id || d.id} className="deadline-row">
                        <span className={`deadline-pill ${urgencyClass(d.daysLeft)}`}>
                          {d.daysLeft > 0 ? `${d.daysLeft}d` : "Today"}
                        </span>
                        <div>
                          <p className="deadline-row-title">{d.title}</p>
                          <p className="deadline-row-date">{formatDate(d.date)}</p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>

              {/* QUICK ACTIONS PANEL */}
              <div className="panel">
                <h3 className="panel-title-only">Quick Actions</h3>
                <div className="quick-actions">
                  <button className="qa-item" onClick={() => setShowUploadModal(true)}>
                    <span>
                      <FiUpload /> Upload Document
                    </span>
                    <FiArrowRight />
                  </button>
                  <button className="qa-item">
                    <span>
                      <GraduationCap size={16} /> Explore Universities
                    </span>
                    <FiArrowRight />
                  </button>
                  <button className="qa-item">
                    <span>
                      <GraduationCap size={16} /> Find Scholarships
                    </span>
                    <FiArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Notifications" && (
          <div className="panel full-panel">
            <h3 className="panel-title-only">All Notifications</h3>
            {notifications.length === 0 ? (
              <div className="empty-state">
                <FiBell className="empty-icon" />
                <p>No notifications</p>
              </div>
            ) : (
              <ul className="notif-list">
                {notifications.map((n) => (
                  <li
                    key={n._id || n.id}
                    className={`notif-list-item ${!n.isRead ? "unread" : ""}`}
                  >
                    <div className="notif-icon-circle">
                      <FiBell />
                    </div>
                    <div className="notif-list-text">
                      <p className="notif-list-title">{n.title}</p>
                      <p className="notif-list-msg">{n.message}</p>
                      <span className="notif-list-time">
                        {new Date(n.createdAt).toLocaleString("en-IN")}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* =========================
            DOCUMENTS — CARD GRID VIEW
        ========================= */}
        {activeTab === "Documents" && (
          <div className="panel full-panel">
            <div className="panel-header">
              <h3>
                <FiFileText /> My Documents
              </h3>
              <button className="btn-primary" onClick={() => setShowUploadModal(true)}>
                <FiUpload /> Upload Document
              </button>
            </div>

            {/* APPLICATION CHECKLIST PROGRESS */}
            <div className="doc-checklist-block">
              <div className="panel-header" style={{ marginBottom: "10px" }}>
                <h3 style={{ fontSize: "14px" }}>
                  <FiCheckCircle /> Application Checklist
                </h3>
                <span className="progress-percent-tag">
                  {checklist.progressPercent}% complete
                </span>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${checklist.progressPercent}%` }}
                />
              </div>
              <p className="progress-caption">
                {checklist.completedRequiredCount} of {checklist.totalRequired} required
                documents uploaded
              </p>

              <ul className="checklist">
                {checklist.requiredTypes.map((type) => {
                  const done = uploadedTypes.has(type);
                  return (
                    <li key={type} className={`checklist-item ${done ? "done" : ""}`}>
                      <span className="checklist-dot">
                        {done ? <FiCheckCircle /> : <FiClock />}
                      </span>
                      {type}
                    </li>
                  );
                })}
              </ul>
            </div>

            {documents.length === 0 ? (
              <div className="empty-state">
                <FiFileText className="empty-icon" />
                <p>No documents uploaded yet</p>
                <button className="btn-outline" onClick={() => setShowUploadModal(true)}>
                  Upload your first document
                </button>
              </div>
            ) : (
              <div className="doc-card-grid">
                {documents.map((doc) => {
                  const iconClass = TYPE_ICON_MAP[doc.docType] || "doc-icon-gray";
                  const isImage = doc.fileType?.startsWith("image/");
 const SERVER_BASE = "http://localhost:5000";
const fileUrl = `${SERVER_BASE}${doc.previewUrl}?token=${encodeURIComponent(
  getToken() || ""
)}`;
                  return (
                    <div className="doc-card" key={doc.id || doc._id}>
                      <div className="doc-card-top">
                        {isImage ? (
                          <img src={fileUrl} alt={doc.originalName} className="doc-thumb" />
                        ) : (
                          <div className={`doc-icon-box ${iconClass}`}>
                            <FiFileText />
                          </div>
                        )}
                        <span className={statusBadgeClass(doc.status)}>{doc.status}</span>
                      </div>

                      <p className="doc-card-type">{doc.docType}</p>
                      <p className="doc-card-name" title={doc.originalName}>
                        {doc.originalName}
                      </p>
                      <p className="doc-card-meta">
                        {formatFileSize(doc.fileSize)} • {formatDate(doc.createdAt)}
                      </p>

                      <div className="doc-card-actions">
                        <a
                          href={fileUrl}
                          download={doc.originalName}
                          className="icon-btn"
                          title="View / Download"
                        >
                          <FiDownload />
                        </a>
                        <button
                          className="icon-btn icon-btn-danger"
                          onClick={() => handleDeleteDocument(doc.id || doc._id)}
                          title="Delete"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {activeTab === "Profile" && profile && (
          <div className="panel full-panel">
            <h3 className="panel-title-only">My Profile</h3>
            <div className="profile-view">
              <div className="profile-avatar-xl">{profile.avatarInitials}</div>
              <div className="profile-fields">
                <div className="profile-field">
                  <label>Full Name</label>
                  <p>{profile.name}</p>
                </div>
                <div className="profile-field">
                  <label>Email</label>
                  <p>{profile.email}</p>
                </div>
              </div>
            </div>

            {/* ==========================================
                VISA FEE CALCULATOR — backend driven
            ========================================== */}
            <div className="fee-calc">
              <h3 className="panel-title-only">
                <FiDollarSign /> Visa Fee Calculator
              </h3>

              <div className="fee-calc-controls">
                <div className="fee-field">
                  <label>Destination Country</label>
                  <select
                    className="field-select"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    {visaCountries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="fee-field">
                  <label>Number of Applicants</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    className="field-select"
                    value={numApplicants}
                    onChange={(e) =>
                      setNumApplicants(
                        Math.max(1, Math.min(10, Number(e.target.value) || 1))
                      )
                    }
                  />
                </div>
              </div>

              {visaCalc && (
                <div className="fee-result">
                  <div className="fee-result-row">
                    <span>Visa fee (per applicant)</span>
                    <span>
                      {visaCalc.fee} {visaCalc.currency}
                    </span>
                  </div>
                  <div className="fee-result-row">
                    <span>
                      Total ({numApplicants} applicant{numApplicants > 1 ? "s" : ""})
                    </span>
                    <span>
                      {visaCalc.totalForeign.toLocaleString()} {visaCalc.currency}
                    </span>
                  </div>
                  <div className="fee-result-row fee-result-inr">
                    <span>Approx. in INR</span>
                    <span>₹{visaCalc.totalINR.toLocaleString("en-IN")}</span>
                  </div>
                  <p className="fee-note">
                    <FiAlertCircle /> {visaCalc.extra}. Rates are indicative — confirm exact
                    fees on the official embassy website before payment.
                    {visaLoading ? " (updating...)" : ""}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* =========================
            UPLOAD MODAL
        ========================= */}
        {showUploadModal && (
          <div
            className="modal-overlay"
            onClick={(e) =>
              e.target.classList.contains("modal-overlay") && setShowUploadModal(false)
            }
          >
            <div className="modal-box">
              <div className="modal-header">
                <h3>Upload Document</h3>
                <button onClick={() => setShowUploadModal(false)}>
                  <FiX />
                </button>
              </div>

              <div className="modal-body">
                <label className="field-label">Document Type</label>
                <select
                  className="field-select"
                  value={selectedDocType}
                  onChange={(e) => setSelectedDocType(e.target.value)}
                >
                  {DOC_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>

                <label className="field-label">Choose File</label>
                <div className="dropzone" onClick={() => fileInputRef.current?.click()}>
                  <FiUpload className="dropzone-icon" />
                  <p>{selectedFile ? selectedFile.name : "Click to browse PDF, DOC, JPG or PNG"}</p>
                  <span>Max file size: 10 MB</span>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  hidden
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileSelect}
                />

                {uploadError && <p className="upload-error">{uploadError}</p>}
              </div>

              <div className="modal-footer">
                <button className="btn-outline" onClick={() => setShowUploadModal(false)}>
                  Cancel
                </button>
                <button className="btn-primary" onClick={handleUpload} disabled={uploading}>
                  {uploading ? "Uploading..." : "Upload"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default StudentDashboard;