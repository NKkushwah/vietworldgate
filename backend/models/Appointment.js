const mongoose = require("mongoose");

const appointmentSchema =
  new mongoose.Schema({

    name: String,

    email: String,

    mobile: String,

    city: String,

    message: String

  });

module.exports =
  mongoose.model(
    "Appointment",
    appointmentSchema
  );