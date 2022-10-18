const express = require('express');
const fetch = require('node-fetch');
var nodeoutlook = require('nodejs-nodemailer-outlook');
var cors = require('cors');
var morgan = require('morgan');
const dbConn = require('./dbConnect');
const demandeCourses = require('./routeDemandes');
const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  ('Content-Security-Policy: script-src', 'self', 'https://apis.google.com');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.get('/outlook', function (req, res) {

  nodeoutlook.sendEmail({

      auth: {
          user: "imedhamdi007@hotmail.fr",
          pass: "imed25516242"
      },
      from: "imedhamdi007@hotmail.fr",
      to: 'imedhamdi007@hotmail.fr',
      subject: 'Nouvelle Demande Client',
      html: '<b>Vous avez une nouvelle demande , Veuillez consulter votre BD</b>',
      text: 'This is text version!',
      replyTo: "",


      onError: (e) => console.log(e),
      onSuccess: (i) => res.send("Email envoyé")


  }


  );
})
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use(express.static('folder'));
app.use(morgan('dev'));
app.use('/demandes', demandeCourses);
module.exports = app;