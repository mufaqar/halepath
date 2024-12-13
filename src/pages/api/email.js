export default function (req, res) {
     // require('dotenv').config()
     let nodemailer = require('nodemailer')

     const EMAIL="softsgens@gmail.com"
     const GMAIL_PASSWORD="bczjxzfatgxsebrz"

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
          text: req.body.detail + " | Sent from: " + req.body.email,
          html: `
          <p><strong>Name: </strong> ${req.body.name}</p>
          <p><strong>Email: </strong> ${req.body.email}</p>
          <p><strong>Phone: </strong> ${req.body.phone}</p>
          <p><strong>Packing: </strong> ${req.body.packing}</p>
          <p><strong>Quantity: </strong> ${req.body.quantity}</p>
          <p><strong>Detail: </strong> ${req.body.detail}</p>
          `,
     }

     // step-3
     transporter.sendMail(mailData , function (err, info) {
          if (err)
               console.log(err)
          else {
               res.status(200).json({ message: "email sended!", info })
          }
     })


}