import { EmailTemplate } from '../../../emails/index';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request:Request, res:Response ) {

  const {email, userFirstname} = await request.json()
  try {
    const { data, error } = await resend.emails.send({
      from: 'EtheredgeMedia <noreply@etheredgemedia.com>',
      to: [email],
      subject: 'Thank you for reaching out',
      react: EmailTemplate({ userFirstname}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json({message: "Email sent successfully!"});
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
