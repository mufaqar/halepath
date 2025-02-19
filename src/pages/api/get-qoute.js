import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { name, email, pname, pcode, quantity, phone, width, depth, length, dimension, file_input, message } = req.body;

    if (!name || !email || !pname || !pcode || !quantity || !phone || !message) {
        return res.status(400).json({ error: "Required fields are missing." });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST, // Set this in `.env.local`
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
            subject: `Message From ${name}`,
            text: `Sent from: ${email}\n\n${message}`,
            html: `
                <p><strong>Your Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Product Name:</strong> ${pname}</p>
                <p><strong>Product Code:</strong> ${pcode}</p>
                <p><strong>Quantity:</strong> ${quantity}</p>
                <p><strong>Your Phone:</strong> ${phone}</p>
                <p><strong>Width:</strong> ${width}</p>
                <p><strong>Depth:</strong> ${depth}</p>
                <p><strong>Length:</strong> ${length}</p>
                <p><strong>Dimension:</strong> ${dimension}</p>
                <p><strong>File:</strong> ${file_input}</p>
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
