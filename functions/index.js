const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const regionEU = functions.region('europe-west1');


const credentials = require('./credentials');
const user = credentials.auth.user;
const pass = credentials.auth.pass;

admin.initializeApp();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: `${user}`,
        pass: `${pass}`
    }
});

exports.sendEmail = regionEU.https.onRequest((request, response) => {
    const email_from = request.query.email_from;
    const message = request.query.message;

    const mailOptions = {
        from: `AppYa <${user}>`,
        to: `${user}`,
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