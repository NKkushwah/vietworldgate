const Deadline = require("../models/Deadline");

// GET /api/deadlines
exports.getDeadlines = async (req, res) => {
  try {
    const now = Date.now();
    const list = await Deadline.find({ user: req.user._id }).sort({ date: 1 });
    const withDays = list.map((d) => ({
      ...d.toObject(),
      daysLeft: Math.ceil((new Date(d.date).getTime() - now) / (1000 * 60 * 60 * 24)),
    }));

    res.json({ deadlines: withDays, nextDeadline: withDays[0] || null });
  } catch (err) {
    console.error("Get deadlines error:", err);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

// POST /api/deadlines
exports.createDeadline = async (req, res) => {
  try {
    const { title, date, type } = req.body;
    if (!title || !date || !type) {
      return res.status(400).json({ message: "title, date and type are required." });
    }

    const deadline = await Deadline.create({ user: req.user._id, title, date, type });
    res.status(201).json({ deadline });
  } catch (err) {
    console.error("Create deadline error:", err);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

// DELETE /api/deadlines/:id
exports.deleteDeadline = async (req, res) => {
  try {
    const deadline = await Deadline.findOne({ _id: req.params.id, user: req.user._id });
    if (!deadline) return res.status(404).json({ message: "Deadline not found." });

    await deadline.deleteOne();
    res.json({ message: "Deadline removed." });
  } catch (err) {
    console.error("Delete deadline error:", err);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};