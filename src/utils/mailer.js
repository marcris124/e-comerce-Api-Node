const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "martinavendano095@gmail.com",
    pass: "eezzjbumretxspwy",
  },
});

module.exports = transporter;




//eezzjbumretxspwy