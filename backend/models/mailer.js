import nodemailer from "nodemailer";
import { config } from "dotenv";
config();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "hassan.ccpd.9811@gmail.com",
    pass: process.env.AppPass,
  },
});

export default async function Mailer(recieverMail) {
  const info = await transporter.sendMail({
    from: "info@hsncodes.com",
    to: recieverMail, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<span style='color:red'>Hello this is our mail</span>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}
