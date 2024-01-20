/*
* Author: Md. Sholayman
* Description: This is the file that contains a helper function for sending email to client.
* Date : 20 January 2024
* */


const nodemailer = require("nodemailer");


const emailSend = async(email,subject,text)=>{

    const transport = nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false,
        auth: {user: "info@teamrabbil.com", pass: '~sR4[bhaC[Qs'},
        tls: {rejectUnauthorized: false}
    })

    const emailOption = {
        from:"Md.Sholayman <info@teamrabbil.com>",
        to:email,
        sub:subject,
        text:text

    }

    await transport.sendMail(emailOption);

}

module.exports = emailSend ;