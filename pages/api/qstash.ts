import type { NextApiRequest, NextApiResponse } from "next";
import { verifySignature } from "@upstash/qstash/nextjs";
import nodeMailerClient from "@/lib/nodemailerClient";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await nodeMailerClient().sendMail({
    from: req.body.from,
    to: req.body.to,
    subject: req.body.subject,
    html: req.body.html,
  });
  res.status(200).end();
}

export default verifySignature(handler);

export const config = {
  api: {
    bodyParser: false,
  },
};
