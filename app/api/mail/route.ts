// app/api/mail/route.ts

import { EmailTemplate } from '../../../emails/index';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, userFirstname } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'EtheredgeMedia <noreply@etheredgemedia.com>',
      to: [email],
      subject: 'Thank you for reaching out',
      react: EmailTemplate({ userFirstname }),
    });

    if (error) {
      return res.json({ error }, { status: 500 });
    }

    return res.json({ message: "Email sent successfully!" });
  } catch (error) {
    return res.json({ error }, { status: 500 });
  }
}
