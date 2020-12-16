import credentials from '../src/firebase/credentials';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const regionEU = functions.region('europe-west1');
const pass = credentials.pass;
admin.initializeApp();

let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
        user: "apikey",
        pass: `${pass}`
    }
});

exports.sendEmail = regionEU.https.onRequest((request, response) => {
    const email_from = request.query.email_from;
    const message = request.query.message;

    const mailOptions = {
        from: 'AppYa <mlrapid999@gmail.com>',
        to: 'mlrapid999@gmail.com',
        subject: 'AppYa Contact Form Submission',
        html: `${message} <br /><br /> From ${email_from}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(`ERROR: (email) ${email_from} --- (message) ${message} --- (error) ${error.toString()}`);
            response.send(error.toString());
        }
        response.send('Your message was submitted successfully!');
    });

});