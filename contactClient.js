console.log('coucou');


function envoyerDemande(){
let  nom = document.getElementById('nom').value;
let  prenom = document.getElementById('prenom').value;
let  telephone = document.getElementById('telephone').value;
let  dateDepart = document.getElementById('dateDepart').value;
let  heure = document.getElementById('heure').value;

let demandeClient ={
    nomClient : nom,
}
console.log(typeof demandeClient);
console.log(demandeClient);

}