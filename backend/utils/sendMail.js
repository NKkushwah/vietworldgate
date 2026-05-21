const nodemailer = require("nodemailer");

const sendMail = async (data) => {

  const transporter =
    nodemailer.createTransport({

      service: "gmail",

      auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASS

      }

    });

  const mailOptions = {

    from: process.env.EMAIL_USER,

    to: process.env.RECEIVER_EMAIL,

    subject: "New Appointment Form",

    html: `

      <h2>New Appointment Received</h2>

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

    `
  };

  await transporter.sendMail(
    mailOptions
  );

};

module.exports = sendMail;