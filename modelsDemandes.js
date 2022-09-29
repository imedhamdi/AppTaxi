'use strict';
const dbConn = require('./dbConnect');

var Demande = function (demande) {
  this.nom = demande.nom;
  this.prenom = demande.prenom;
  this.telf = demande.telf;
  this.addresseDep = demande.addresseDep;
  this.adresseArr = demande.adresseArr;
  this.dateDepart = demande.dateDepart;
  this.heureDepart = demande.heureDepart;
  this.prix = demande.prix;
};



Demande.searchAll = function (demande) {
  dbConn.query("Select * from demandes", function (err, res) {
    if (err) {
      console.log("error: ", err);
      demande(null, err);
    }
    else {
      console.log('demandes : ', res);
      demande(null, res);
    }
  });
};


Demande.ajouterDemande = function (Newdemande, result) {
 
  dbConn.query("INSERT INTO demandes set ?",Newdemande,function (err, res) {
    console.log('hello');
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {

      result(null, res.insertId);
    }
  });
};

module.exports = Demande;

