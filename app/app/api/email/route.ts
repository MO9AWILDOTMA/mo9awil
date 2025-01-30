import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, message, pack, phone } = await request.json();
  const transport = nodemailer.createTransport({
    host: 'smtp.zoho.com',
            port: 465,
            secure: true, // use SSL
    auth: {
      user: process.env.NEXT_PUBLIC_MY_EMAIL,
      pass: process.env.NEXT_PUBLIC_MY_PASSWORD,
    },
    logger: true,  // Enable logging for debugging
    debug: true,   // More detailed debug output
  });
  

  // HTML template for client email
  const clientHtmlContent = `
  <!DOCTYPE html>
  <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <title>Merci d'avoir contacté Mo9awil.ma !</title>
      <style>
        body {
          background-color: #F8F9FD;
          margin: 0;
          padding: 0;
          font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: white;
          padding: 20px;
          border-radius: 8px;
        }
        .header {
          text-align: center;
          padding: 20px;
        }
        .content {
          padding: 20px;
          font-size: 14px;
          line-height: 21px;
          color: #333;
        }
        .footer {
          background-color: #8952E0;
          color: #afadad;
          text-align: center;
          padding: 20px;
          border-radius: 0 0 8px 8px;
        }
        .footer-text {
          font-size: 14px;
          line-height: 22px;
          color: #fff;
        }
        .footer-logo {
          width: 100%;
          max-width: 200px;
          height: 50px;
          background-image: url('https://i.postimg.cc/0jX9sDFP/logo-black.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          margin: 0 auto;
          display: block;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://i.postimg.cc/0jX9sDFP/logo-black.png" alt="Mo9awil" style="width: 100%; max-width: 300px;">
        </div>
        <div class="content">
          <p>Cher/Chère ${name},</p>
          <p>Nous vous remercions d'avoir contacté Mo9awil.ma. Nous avons bien reçu votre demande concernant notre pack <strong>${pack}</strong>.</p>
          <p>Nous apprécions l'intérêt que vous portez à nos services et examinerons votre demande dans les plus brefs délais. Notre équipe reviendra vers vous avec des informations détaillées sur le pack ${pack} et les prochaines étapes.</p>
          <p>Si vous avez des questions urgentes, n'hésitez pas à nous contacter.</p>
          <p>Cordialement,<br><strong>L'équipe Mo9awil.ma</strong></p>
        </div>
      </div>
      <div class="footer">
        <div class="footer-logo"></div>
        <p class="footer-text">Votre partenaire de confiance pour la domiciliation d'entreprise, la création de sociétés et les services de gestion au Maroc.</p>
        <p style="font-size: 12px; color: #d3d3d3;">© 2025 mo9awil.ma. Tous droits réservés.</p>
      </div>
    </body>
  </html>
  `;
  

  // Admin email content
  const adminHtmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>Nouvelle demande client</h2>
      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <p><strong>Nom du client:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Email:</strong> ${phone}</p>
        <p><strong>Pack sélectionné:</strong> ${pack}</p>
        <p><strong>Message du client:</strong></p>
        <div style="background-color: white; padding: 15px; border-left: 4px solid #8952E0; margin: 10px 0;">
          ${message}
        </div>
      </div>
      <p><strong>Lien vers la base de données:</strong> <a href="${process.env.NEXT_PUBLIC_SHEETS_URL}">Google Sheets</a></p>
      <p style="color: #8952E0;"><strong>Important:</strong> Merci de faire le suivi avec le client dans les 24 heures.</p>
    </div>
  `;

  const mailOptionsClient: Mail.Options = {
    from: process.env.NEXT_PUBLIC_MY_EMAIL,
    to: email,
    subject: `Merci d'avoir contacté Mo9awil.ma !`,
    html: clientHtmlContent,
  };

  const mailOptionsAdmin: Mail.Options = {
    from: process.env.NEXT_PUBLIC_MY_EMAIL,
    to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
    subject: `Nouvelle demande client - Pack ${pack}`,
    html: adminHtmlContent,
  };

  const sendMailPromise = (options: Mail.Options) =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(options, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    // Send both emails
    await Promise.all([
      sendMailPromise(mailOptionsClient),
      sendMailPromise(mailOptionsAdmin)
    ]);
    return NextResponse.json({ message: 'Emails sent successfully' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}