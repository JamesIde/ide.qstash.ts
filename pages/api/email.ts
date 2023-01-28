import type { NextApiRequest, NextApiResponse } from "next";
import { verifySignature } from "@upstash/qstash/nextjs";
import nodeMailerClient from "@/lib/nodemailerClient";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method === "POST") {
    await nodeMailerClient().sendMail({
      from: process.env.SMPT_USERNAME,
      to: process.env.ADMIN_EMAIL,
      subject: "This is a test",
      html: "<p>This email was sent from ide.broker.ts on the back of a message received from Qstash broker.</p>",
    });
    res.status(200).json({ ok: true });
  } else {
    res.status(405).json({ ok: false });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
// Verifies the JWT signature that comes from the webhook
export default verifySignature(handler);
