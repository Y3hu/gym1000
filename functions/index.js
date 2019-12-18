const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
admin.initializeApp()

const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

var transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: ",
        pass: ""
    }
})

// build multiple CRUD interfaces:
app.get('/:user', (req, res) => {
    let { user } = req.params
    const mailOptions = {
        from: 'gimmnm88@hotmail.com', 
        to: [user, 'milton5588@hotmail.com'],
        subject: "Recordatorio", 
        html: `<h1>Hola ${user}</h1>
        <span>Tu suscripción ha vencido el día de hoy, por favor cancela y, si ya lo hiciste, omite este mensaje.</span>
        <h2>Buen día</h2>
        <p>KGYM</p>
            ` 
        }
    
    // returning result
    return transporter.sendMail(mailOptions, (erro, info) => {
    if (erro) {
        return res.send(erro.toString())
    }
    return res.send('Sended')
    })
});

// Expose Express API as a single Cloud Function:
exports.sendMail = functions.https.onRequest(app);
