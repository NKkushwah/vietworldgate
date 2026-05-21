const nodemailer = require("nodemailer");

const sendMail = async (data) => {

  try {

    // =========================
    // CREATE TRANSPORTER
    // =========================
    const transporter =
      nodemailer.createTransport({

        host: "smtp.gmail.com",

        port: 587,

        secure: false,

        auth: {

          user:
            process.env.EMAIL_USER,

          pass:
            process.env.EMAIL_PASS

        }

      });

    // =========================
    // MAIL OPTIONS
    // =========================
    const mailOptions = {

      from: process.env.EMAIL_USER,

      to: process.env.RECEIVER_EMAIL,

      subject:
        "New Appointment Form",

      html: `

        <div style="
          font-family: Arial;
          padding:20px;
          background:#f4f4f4;
        ">

          <div style="
            max-width:600px;
            margin:auto;
            background:white;
            padding:25px;
            border-radius:10px;
          ">

            <h2 style="
              color:#1e3a8a;
              margin-bottom:20px;
            ">
              New Appointment Received
            </h2>

            <p>
              <strong>Name:</strong>
              ${data.name}
            </p>

            <p>
              <strong>Email:</strong>
              ${data.email}
            </p>

            <p>
              <strong>Mobile:</strong>
              ${data.mobile}
            </p>

            <p>
              <strong>City:</strong>
              ${data.city}
            </p>

            <p>
              <strong>Message:</strong>
              ${data.message}
            </p>

          </div>

        </div>

      `

    };

    // =========================
    // SEND MAIL
    // =========================
    const info =
      await transporter.sendMail(
        mailOptions
      );

    console.log(
      "Email Sent:",
      info.response
    );

    return true;

  }

  catch (error) {

    console.log(
      "Mail Error:",
      error.message
    );

    return false;

  }

};

module.exports = sendMail;