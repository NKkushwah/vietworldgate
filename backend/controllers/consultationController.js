const Consultation = require("../models/Consultation");
const Notification = require("../models/Notification");

// GET /api/consultations
exports.getConsultations = async (req, res) => {
  try {
    const list = await Consultation.find({ user: req.user._id }).sort({ date: 1 });
    res.json({ consultations: list });
  } catch (err) {
    console.error("Get consultations error:", err);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

// POST /api/consultations
exports.createConsultation = async (req, res) => {
  try {
    const { date, time, consultant, mode } = req.body;
    if (!date || !time || !consultant || !mode) {
      return res.status(400).json({ message: "date, time, consultant and mode are required." });
    }

    const consult = await Consultation.create({
      user: req.user._id,
      date,
      time,
      consultant,
      mode,
    });

    await Notification.create({
      user: req.user._id,
      title: "Consultation booked",
      message: `Your consultation with ${consultant} is scheduled for ${date} at ${time}.`,
    });

    res.status(201).json({ message: "Consultation booked.", consultation: consult });
  } catch (err) {
    console.error("Create consultation error:", err);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

// PATCH /api/consultations/:id
exports.updateConsultation = async (req, res) => {
  try {
    const { status } = req.body;
    const consult = await Consultation.findOne({ _id: req.params.id, user: req.user._id });
    if (!consult) return res.status(404).json({ message: "Consultation not found." });

    if (status) consult.status = status;
    await consult.save();
    res.json({ consultation: consult });
  } catch (err) {
    console.error("Update consultation error:", err);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};