const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gowthamk1242000@gmail.com",
    pass: "############",
  },
});

const sendNotification = (method, user, event) => {
  let to;
  if (method === "email") {
    to = user.email;
    const mailOptions = {
      from: "gowthamk1242000@gmail.com",
      to,
      subject: `Notification: ${event.title}`,
      text: event.description || event.title,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) console.log(error);
      else console.log(`Email sent to ${to}: ${info.response}`);
    });
  } else if (method === "sms") {
    console.log(`[SMS] To ${user.phone || user.name}: ${event.title}`);
  } else {
    console.log(`[IN-APP] To ${user.name}: ${event.title}`);
  }
};

module.exports = { sendNotification };
