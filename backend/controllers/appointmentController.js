const Appointment = require("../models/Appointment");

const sendMail = require("../utils/sendMail");

const bookAppointment = async (req, res) => {

  try {

    const {
      name,
      email,
      mobile,
      city,
      message
    } = req.body;

    // SAVE TO DATABASE
    await Appointment.create({

      name,
      email,
      mobile,
      city,
      message

    });

    // SEND MAIL
    await sendMail({

      name,
      email,
      mobile,
      city,
      message

    });

    res.status(201).json({

      success: true,

      message: "Appointment Submitted Successfully"

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

module.exports = {
  bookAppointment
};