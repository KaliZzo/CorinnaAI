"use server"
import nodemailer from "nodemailer"

export const onMailer = async (email: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODE_MAILER_EMAIL,
      pass: process.env.NODE_MAILER_GMAIL_APP_PASSWORD,
    },
  })

  const mailOptions = {
    to: email,
    subject: "Realtime Support",
    text: "One of your customers on Corinna, just switched to realtime mode",
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent: " + info.response)
    return { success: true, info }
  } catch (error) {
    console.log(error)
    return { success: false, error }
  }
}
