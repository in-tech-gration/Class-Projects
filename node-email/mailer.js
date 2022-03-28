const nodemailer = require("nodemailer")
const EMAIL = "staff.intechgration@gmail.com"
const PASSWORD = "gotcha. no passwords for you!."

let emails = `haqyarsohail@gmail.com,nrcnyldz01@gmail.com,ibrahimserayk@gmail.com,ahzobairhaqyar@gmail.com,kalungi.roberts2000@gmail.com,habibalpha0@gmail.com`

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD
  }
})

transporter
  .sendMail({
    from: EMAIL, // sender address
    to: emails, // list of receivers
    subject: "Node Modules.... Yeah!!", // Subject line
    text: "Whatever we want it to be" // plain text body
    // html: "<b>Hello world?</b>" // html body
  })
  .then((info) => {
    console.log(info)
  })
