const mongoose = require("mongoose");

const DeadlineSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    date: { type: Date, required: true },
    type: {
      type: String,
      enum: ["exam", "application", "visa", "other"],
      default: "other",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Deadline", DeadlineSchema);