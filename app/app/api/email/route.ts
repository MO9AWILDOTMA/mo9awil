import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, message, pack } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_MY_EMAIL,
      pass: process.env.NEXT_PUBLIC_MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: email,
    subject: `Mr/MSS ${name} with (${email}) whatn to buy (${pack})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}