var express = require('express');
var router = express.Router();
const knex = require('../connection');
const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
const env = dotenv.config().parsed


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    rejectUnautorised: false,
    auth: {
        type:"OAuth2",
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASSWORD,
        clientId: env.GMAIL_ClientID,
        clientSecret: env.GMAIL_ClientSecret,
        refreshToken: env.GMAIL_RefreshToken,
    }
});

// contactEmail.verify((error, success) => {
//     error ? console.log("error: ", error) : console.log(`Server is ready ${success}`)
// })

router.post("/contact", function(req, res) {
    // console.log("req: ", req.body.eMail.company);
    const company = req.body.eMail.company;
    const name = req.body.eMail.name;
    const email = req.body.eMail.email;
    const phone = req.body.eMail.phone;
    const message = req.body.eMail.message;

    const mail = {
        from: `${name} at ${company}`,
        to: env.EMAIL_USER,
        subject: `Message from: ${name}`,
        text: `${message} \nemail: ${email}, phone: ${phone}`
    }
    contactEmail.sendMail(mail, function(error) {
        error ? console.log("Error: ", error) : console.log("Success")
        res.json({status: "Email sent"})
    })
})

module.exports = router;