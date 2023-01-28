import nodeMailer from "nodemailer";

export default function nodeMailerClient() {
  return nodeMailer.createTransport({
    host: process.env.SMPT_ADDRESS,
    port: parseInt(process.env.SMPT_PORT as string),
    secure: true,
    auth: {
      user: process.env.SMPT_USERNAME,
      pass: process.env.SMPT_PASSWORD,
    },
  });
}
