const fs = require("fs");
const path = require("path");
const Document = require("../models/Document");
const Notification = require("../models/Notification");
const { DOC_TYPES, REQUIRED_DOC_TYPES } = require("../utils/constants");
const { UPLOAD_DIR } = require("../middleware/upload");

// GET /api/documents
exports.getDocuments = async (req, res) => {
  try {
    const docs = await Document.find({ user: req.user._id }).sort({ createdAt: -1 });

    const uploadedTypes = new Set(docs.map((d) => d.docType));
    const completedRequiredCount = REQUIRED_DOC_TYPES.filter((t) =>
      uploadedTypes.has(t)
    ).length;
    const progressPercent = Math.round(
      (completedRequiredCount / REQUIRED_DOC_TYPES.length) * 100
    );

    res.json({
      documents: docs.map((d) => d.toSafeObject()),
      checklist: {
        requiredTypes: REQUIRED_DOC_TYPES,
        completedRequiredCount,
        totalRequired: REQUIRED_DOC_TYPES.length,
        progressPercent,
      },
    });
  } catch (err) {
    console.error("Get documents error:", err);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

// POST /api/documents
exports.uploadDocument = async (req, res) => {
  try {
    const { docType } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Please choose a file first." });
    }
    if (!DOC_TYPES.includes(docType)) {
      return res.status(400).json({ message: "Invalid document type." });
    }

    const doc = await Document.create({
      user: req.user._id,
      docType,
      originalName: req.file.originalname,
      storedFilename: req.file.filename,
      fileSize: req.file.size,
      fileType: req.file.mimetype,
    });

    await Notification.create({
      user: req.user._id,
      title: "Document uploaded successfully",
      message: `Your ${doc.docType} (${doc.originalName}) has been uploaded and is pending review.`,
    });

    res.status(201).json({ message: "Document uploaded.", document: doc.toSafeObject() });
  } catch (err) {
    console.error("Upload document error:", err);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

// GET /api/documents/:id/file
exports.getDocumentFile = async (req, res) => {
  try {
    // Admin check: Admin ko sab kuch dikhega, user ko sirf apni files
    const query = req.user.role === 'admin' 
      ? { _id: req.params.id } 
      : { _id: req.params.id, user: req.user._id };

    const doc = await Document.findOne(query);
    if (!doc) return res.status(404).json({ message: "Document not found." });

    const filePath = path.join(UPLOAD_DIR, doc.storedFilename);
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "File missing on server." });
    }

    // MIME type sahi set karein
    res.setHeader("Content-Type", doc.fileType || "application/octet-stream");
    res.sendFile(filePath);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
};

// DELETE /api/documents/:id
exports.deleteDocument = async (req, res) => {
  try {
    const doc = await Document.findOne({ _id: req.params.id, user: req.user._id });
    if (!doc) return res.status(404).json({ message: "Document not found." });

    const filePath = path.join(UPLOAD_DIR, doc.storedFilename);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    await doc.deleteOne();
    res.json({ message: "Document deleted." });
  } catch (err) {
    console.error("Delete document error:", err);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};
exports.getDocumentsAll = async (req, res) => {
  try {
    const docs = await Document.find().sort({ createdAt: -1 });
    res.json({ documents: docs.map((d) => d.toSafeObject()) });
    console.log("Documents retrieved successfully:", docs.length);
  } catch (err) {
    console.error("Get all documents error:", err);
    res.status(500).json({ message: "Server error. Please try again." });
  }
 
};

exports.updateDocumentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // 'Verified' ya 'Rejected'

    const doc = await Document.findByIdAndUpdate(id, { status }, { new: true });
    
    // Yahan notification logic likhein (e.g., Email bhejna ya Database mein notification save karna)
    // await sendEmailNotification(doc.user, `Your document status is now: ${status}`);

    res.json({ message: "Status updated successfully", doc });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};