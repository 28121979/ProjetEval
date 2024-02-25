const produit = window.location.search.split('?').join('');

let produitData = '5beaadda1c9d440000a57d98';

const fetchprouduit = async () => {
    await fetch(`http://localhost:3000/api/furniture/:id${produit}`)
    .then(response => response.json())
    .then(data => {
       console.log(data); 
    })
    .catch(error => console.error('Erreur:', error));
}

fetchprouduit()