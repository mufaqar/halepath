export default function (req, res) {
     // require('dotenv').config()
     let nodemailer = require('nodemailer')

     const EMAIL = "softsgens@gmail.com"
     const GMAIL_PASSWORD = "bczjxzfatgxsebrz"

     // step-1 
     const transporter = nodemailer.createTransport({
          port: 465,
          host: "smtp.gmail.com",
          auth: {
               user: EMAIL,
               pass: GMAIL_PASSWORD
          },
          secure: true,
     })

     // step-2
     const mailData = {
          from: EMAIL,
          to: `mufaqar@gmail.com, ${req.body.email}`,
          subject: `Message From ${req.body.name}`,
          text: req.body.message + " | Sent from: " + req.body.email,
          html: `
          <p><strong>Your Name: </strong> ${req.body.name}</p>
          <p><strong>Email: </strong> ${req.body.email}</p>
          <p><strong>Product Name: </strong> ${req.body.pname}</p>
          <p><strong>Product Code: </strong> ${req.body.pcode}</p>
          <p><strong>Quantity: </strong> ${req.body.quantity}</p>
          <p><strong>Your Phone: </strong> ${req.body.phone}</p>
          <p><strong>Width: </strong> ${req.body.width}</p>
          <p><strong>Depth: </strong> ${req.body.depth}</p>
          <p><strong>Length: </strong> ${req.body.length}</p>
          <p><strong>Dimension: </strong> ${req.body.dimension}</p>
          <p><strong>File: </strong> ${req.body.file_input}</p>
          <p><strong>Your Message: </strong> ${req.body.message}</p>
          `,
     }

     // step-3
     transporter.sendMail(mailData, function (err, info) {
          if (err)
               console.log(err)
          else {
               res.status(200).json({ message: "email sended!", info })
          }
     })


}