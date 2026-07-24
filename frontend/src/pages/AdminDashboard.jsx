import React, { useState, useEffect } from "react";
import { FiDownload, FiEye, FiFileText, FiCheckCircle, FiClock } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [docs, setDocs] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchDocs();
  }, [token]);

  const fetchDocs = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/documents/all", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (data?.documents) setDocs(data.documents);
    } catch (err) { console.error("Fetch error:", err); }
  };

  // Status Update Function (Verify)
  const verifyDocument = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/documents/${id}/status`, {
        method: "PATCH",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify({ status: "Approved" }) // Ya 'Verified'
      });
      if (res.ok) {
        alert("Document Verified Successfully!");
        fetchDocs(); // Table refresh
      }
    } catch (err) { alert("Failed to verify"); }
  };

  const handleDownload = async (doc) => {
    try {
      const res = await fetch(`http://localhost:5000/api/documents/${doc.id}/file`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = doc.originalName || "document";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) { alert("Download failed"); }
  };

  return (
    <div className="admin-container">
      <Navbar />
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Document Management</h1>
          <p>Review and verify user-submitted documents.</p>
        </header>

        <div className="table-card">
          <table className="styled-table">
            <thead>
              <tr>
                <th><FiFileText /> Document Info</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {docs.map((doc) => (
                <tr key={doc.id}>
                  <td>
                    <div className="doc-info">
                      <span className="file-name">{doc.originalName}</span>
                      <span className="file-type">{doc.docType}</span>
                    </div>
                  </td>
                  <td>
                    {doc.status === 'Pending Review' ? (
                      <button onClick={() => verifyDocument(doc.id)} className="status-badge pending-btn">
                        <FiClock /> Verify Pending
                      </button>
                    ) : (
                      <span className="status-badge approved">
                        <FiCheckCircle /> {doc.status}
                      </span>
                    )}
                  </td>
                  <td>
                    <div className="button-group">
                      <a href={`http://localhost:5000/api/documents/${doc.id}/file?token=${token}`} 
                         target="_blank" rel="noreferrer" className="action-btn view">
                         <FiEye /> View
                      </a>
                      <button onClick={() => handleDownload(doc)} className="action-btn download">
                         <FiDownload /> Download
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default AdminDashboard;