const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const { ALLOWED_MIME_TYPES, MAX_FILE_SIZE } = require("../utils/constants");

const UPLOAD_DIR = path.join(__dirname, "../uploads");

if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    const unique = crypto.randomBytes(16).toString("hex");
    cb(null, `${unique}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter: (req, file, cb) => {
    if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
      return cb(new Error("Only PDF, DOC, DOCX, JPG, and PNG files are allowed."));
    }
    cb(null, true);
  },
});

module.exports = { upload, UPLOAD_DIR };