
function initAutocomplete() {

    new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            types: ['geocode'],
            componentRestrictions: { country: "fr" }
        }
    );
    new google.maps.places.Autocomplete(
        document.getElementById('autocomplete1'),
        {
            types: ['geocode'],
            componentRestrictions: { country: "fr" }
        }
    );
}

function afficherDistance() {
    const service = new google.maps.DistanceMatrixService();
    let locationDep = document.getElementById('autocomplete').value;
    let locationArr = document.getElementById('autocomplete1').value;
    const request = {
        origins: [locationDep],
        destinations: [locationArr],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
    };
    // get distance matrix response
    service.getDistanceMatrix(request).then((response) => {
        document.getElementById('distance').innerText = "La distance est : " + response.rows[0].elements[0].distance.text;
        document.getElementById('prix').innerText = "Le prix de votre course est  : " + ((response.rows[0].elements[0].distance.value) / 1000) * 2 + " Euros ";
        document.getElementById('btnContinuer').style.visibility = "visible";

    }).catch((error) => {
        console.log(error);
    });
}

function enregistrerAdresses() {
    let locationDep = document.getElementById('autocomplete').value;
    let locationArr = document.getElementById('autocomplete1').value;
    localStorage.setItem('depart', locationDep);
    localStorage.setItem('arrivee', locationArr);
    window.location.assign('contactClient.html')
}


function envoyerDemande() {
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let telephone = document.getElementById('telephone').value;
    let dateDepart = document.getElementById('dateDepart').value;
    let heure = document.getElementById('heure').value;

    let demandeClient = {
        nomClient: nom,
    }
    console.log(typeof demandeClient);
    console.log(demandeClient);

}