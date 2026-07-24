const express = require("express");
const { protect, authorise } = require("../middleware/auth");
const { upload } = require("../middleware/upload");
const {
  getDocuments,
  uploadDocument,
  getDocumentFile,
  deleteDocument,
  getDocumentsAll,
  updateDocumentStatus,
} = require("../controllers/documentController");

const router = express.Router();

router.use(protect, authorise("admin", "student"));

router.get("/", getDocuments);
router.get("/all", getDocumentsAll);
 router.get("/:id/file", getDocumentFile);
router.post("/", upload.single("file"), uploadDocument);
router.patch("/:id/status", updateDocumentStatus);
router.delete("/:id", deleteDocument);

module.exports = router;