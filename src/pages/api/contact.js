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
          subject: `Message From ${req.body.fname} ${req.body.lname}`,
          text: req.body.detail + " | Sent from: " + req.body.email,
          html: `
          <p><strong>Firtst Name: </strong> ${req.body.fname}</p>
          <p><strong>Last Name: </strong> ${req.body.lname}</p>
          <p><strong>Email: </strong> ${req.body.email}</p>
          <p><strong>Subject: </strong> ${req.body.subject}</p>
          <p><strong>Your Message: </strong> ${req.body.message}</p>
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