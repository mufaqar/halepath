import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { fullname, email, phone, product, message } = req.body;

    if (!fullname || !email || !phone || !product || !message) {
        return res.status(400).json({ error: "All fields are required." });
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
            subject: `Message From ${fullname}`,
            text: `Sent from: ${email}`,
            html: `
                <p><strong>Full Name:</strong> ${fullname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Product:</strong> ${product}</p>
                <p><strong>Your Message:</strong> ${message}</p>
            `,
        };

        const info = await transporter.sendMail(mailData);
        return res.status(200).json({ success: true, message: "Email sent successfully!", info });

    } catch (error) {
        console.error("Email sending failed:", error);
        return res.status(500).json({ error: "Failed to send email" });
    }
}
