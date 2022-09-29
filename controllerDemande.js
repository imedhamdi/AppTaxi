'use strict';
const { json } = require('express');
const Demande = require('./modelsDemandes');

exports.searchAll = function (req, res) {
  Demande.searchAll(function (err, result) {
    if (err)
      res.send(err);

    res.send(result);
  });
};


exports.ajouterDemande = function (req, res) {
  const body =req.body;
  
  Demande.ajouterDemande(body, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: err, message: " Invalid" })
    } else {
      return res.status(201).json({ message: "Succes" })
    }
  })
};