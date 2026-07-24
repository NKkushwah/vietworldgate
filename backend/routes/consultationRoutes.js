const express = require("express");
const { protect, authorise } = require("../middleware/auth");
const {
  getConsultations,
  createConsultation,
  updateConsultation,
} = require("../controllers/consultationController");

const router = express.Router();

router.use(protect, authorise("student"));

router.get("/", getConsultations);
router.post("/", createConsultation);
router.patch("/:id", updateConsultation);

module.exports = router;