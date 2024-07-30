import Email from '@/components/email-template/email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const {name, email, message, visaType} = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'Travel <onboarding@resend.dev>',
      to: email,
      subject: 'New User Registration',
      react: Email({ name, email, visaType, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
