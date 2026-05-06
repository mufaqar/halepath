import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullname,
      phone,
      email,
      product,
      message,
      acceptance,
    } = body;

    // ✅ Basic validation
    if (!fullname || !email || !message) {
      return NextResponse.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    // ✅ Check env
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: "Email config missing" },
        { status: 500 }
      );
    }

    // ✅ Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: `${process.env.EMAIL_USER}, ${email}`, // send to admin + user
      subject: `New Contact from ${fullname}`,
      text: `${message} | Email: ${email}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Full Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Product:</strong> ${product || "N/A"}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr/>
        <p><strong>Accepted Terms:</strong> ${
          acceptance ? "Yes" : "No"
        }</p>
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("CONTACT API ERROR 👉", error);

    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}