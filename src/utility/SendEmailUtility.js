var nodemailer = require('nodemailer');

const SendEmailUtility = async (EmailTo, EmailText, EmailSubject) => {

    let transporter = nodemailer.createTransport({
        host: 'smtp-relay.sendinblue.com',
        port: 587,
        secure: false,
        auth: {
            user: "sumitbarua14@gmail.com",
            pass: 'jpQcDfJ6GBEr5MS4'
        }, tls: {
            rejectUnauthorized: false
        },
    });


    let mailOptions = {
        from: 'Task Manager MERN <sumitbarua14@gmail.com>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };


    return await transporter.sendMail(mailOptions)

}
module.exports = SendEmailUtility