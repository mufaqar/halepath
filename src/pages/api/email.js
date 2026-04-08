import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const {
    name,
    email,
    phone,
    product,
    length,
    width,
    depth,
    colors,
    unit,
    stock,
    message,
    quantity,
    calculatedPrice,
    formType,
  } = req.body;

  // ✅ FIXED VALIDATION
  if (!name || !email || !product || !phone) {
    return res.status(400).json({ error: "Required fields are missing." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailData = {
      from: process.env.EMAIL,
      to: `mufaqar@gmail.com, ${email}`,
      subject: `Message From ${name} (${formType})`,
      text: `Sent from: ${email}`,

      html: `
        <h2>New Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <hr />

        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Length:</strong> ${length || "-"}</p>
        <p><strong>Width:</strong> ${width || "-"}</p>
        <p><strong>Depth:</strong> ${depth || "-"}</p>

        <p><strong>Colors:</strong> ${colors || "-"}</p>
        <p><strong>Unit:</strong> ${unit || "-"}</p>
        <p><strong>Stock:</strong> ${stock || "-"}</p>

        <hr />

        <p><strong>Quantity:</strong> ${quantity || "100"}</p>
        <p><strong>Price:</strong> £${calculatedPrice || "0"}</p>
        <p><strong>Form Type:</strong> ${formType}</p>

        <hr />

        <p><strong>Message:</strong> ${message || "-"}</p>
      `,
    };

    const info = await transporter.sendMail(mailData);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully!",
      info,
    });
  } catch (error) {
    console.error("Email sending failed:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}