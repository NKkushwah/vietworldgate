const Notification = require("../models/Notification");

// GET /api/notifications
exports.getNotifications = async (req, res) => {
  try {
    const list = await Notification.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json({
      notifications: list,
      unreadCount: list.filter((n) => !n.isRead).length,
    });
  } catch (err) {
    console.error("Get notifications error:", err);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

// PATCH /api/notifications/:id/read
exports.markAsRead = async (req, res) => {
  try {
    const notif = await Notification.findOne({ _id: req.params.id, user: req.user._id });
    if (!notif) return res.status(404).json({ message: "Notification not found." });

    notif.isRead = true;
    await notif.save();
    res.json({ notification: notif });
  } catch (err) {
    console.error("Mark as read error:", err);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

// PATCH /api/notifications/read-all
exports.markAllAsRead = async (req, res) => {
  try {
    await Notification.updateMany({ user: req.user._id }, { isRead: true });
    res.json({ message: "All notifications marked as read." });
  } catch (err) {
    console.error("Mark all as read error:", err);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};