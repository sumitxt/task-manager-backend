var nodemailer = require('nodemailer');
require('dotenv').config({path: './config.env'})

user = process.env.EMAIL_USER
pass = process.env.EMAIL_PASS

const SendEmailUtility = async (EmailTo, EmailText, EmailSubject) => {

    let transporter = nodemailer.createTransport({
        host: 'smtp-relay.sendinblue.com',
        port: 587,
        secure: false,
        auth: {
            user: user,
            pass: pass
        }, tls: {
            rejectUnauthorized: false
        },
    });


    let mailOptions = {
        from: 'Task Manager MERN <baruasumit97@gmail.com>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };


    return await transporter.sendMail(mailOptions)

}
module.exports = SendEmailUtility