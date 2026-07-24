const mongoose = require("mongoose");
const { DOC_TYPES } = require("../utils/constants");

const DocumentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    docType: {
      type: String,
      enum: DOC_TYPES,
      required: [true, "Document type is required"],
    },
    originalName: { type: String, required: true },
    storedFilename: { type: String, required: true },
    fileSize: { type: Number, required: true },
    fileType: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending Review", "Approved", "Rejected"],
      default: "Pending Review",
    },
  },
  { timestamps: true }
);

DocumentSchema.methods.toSafeObject = function () {
  return {
    id: this._id,
    docType: this.docType,
    originalName: this.originalName,
    fileSize: this.fileSize,
    fileType: this.fileType,
    status: this.status,
    createdAt: this.createdAt,
    previewUrl: `/api/documents/${this._id}/file`,
  };
};

module.exports = mongoose.model("Document", DocumentSchema);