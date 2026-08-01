import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !phone || !message) {
      return Response.json(
        { message: 'Please fill in your name, email, phone number, and message.' },
        { status: 400 }
      );
    }

    const adminEmail = (process.env.ADMIN_EMAIL || 'setuarchitect@gmail.com').trim();
    const smtpHost = process.env.SMTP_HOST?.trim();
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPass = process.env.SMTP_PASS?.trim();
    const smtpFrom = (process.env.SMTP_FROM || smtpUser || adminEmail).trim();

    if (!smtpHost || !smtpUser || !smtpPass) {
      return Response.json(
        {
          message:
            'Email delivery is not configured yet. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM environment variables.'
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const safeMessage = message.replace(/\r?\n/g, '<br />');

    const senderMessage = {
      from: smtpFrom,
      to: email,
      replyTo: email,
      subject: 'Thank you for contacting Setu Architecture',
      text: `Hi ${name},\n\nThank you for reaching out to Setu Architecture. We have received your message and will get back to you shortly.\n\nYour message:\n${message}\n\nBest regards,\nSetu Architecture`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2>Thank you for contacting Setu Architecture</h2>
          <p>Hi ${name},</p>
          <p>We have received your message and will get back to you shortly.</p>
          <p><strong>Your message:</strong></p>
          <p>${safeMessage}</p>
          <p>Best regards,<br />Setu Architecture</p>
        </div>
      `
    };

    const adminMessage = {
      from: smtpFrom,
      to: adminEmail,
      replyTo: email,
      subject: 'New website enquiry from Setu Architecture',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2>New website enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `
    };

    await transporter.sendMail(senderMessage);
    await transporter.sendMail(adminMessage);

    return Response.json({ message: 'Message sent successfully.' }, { status: 200 });
  } catch (error) {
    return Response.json(
      { message: error.message || 'Something went wrong while sending your message.' },
      { status: 500 }
    );
  }
}
