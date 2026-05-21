const express = require("express");

const router = express.Router();

const {
  bookAppointment
} = require("../controllers/appointmentController");

//  appointmment rutes
router.post( "/book", bookAppointment);

module.exports = router;