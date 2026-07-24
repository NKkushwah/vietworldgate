const express = require("express");
const { protect, authorise } = require("../middleware/auth");
const { calculateVisaFee, getCountries } = require("../controllers/visaFeeController");

const router = express.Router();

router.use(protect, authorise("student"));

router.get("/", calculateVisaFee);
router.get("/countries", getCountries);

module.exports = router;