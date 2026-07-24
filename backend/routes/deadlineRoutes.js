const express = require("express");
const { protect, authorise } = require("../middleware/auth");
const {
  getDeadlines,
  createDeadline,
  deleteDeadline,
} = require("../controllers/deadlineController");

const router = express.Router();

router.use(protect, authorise("student"));

router.get("/", getDeadlines);
router.post("/", createDeadline);
router.delete("/:id", deleteDeadline);

module.exports = router;