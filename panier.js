// let addProduit = JSON.parse(localStorage.getItem('produit'));

// console.log(addProduit);

// const panierDisplay = async () => {
//     console.log("salut");
//     if (addProduit) {
//         await addProduit
//         console.log(addProduit);

//       signup.classList.add('display-none');
      
//       continueCommande.addEventListener('click', () => {
//         signup.classList.remove('display-none');

          
//       })
//     }
// } 

// panierDisplay()

// document.addEventListener('DOMContentLoaded', () => {
//     const signup = document.getElementById('signup');
//     const continueCommande = document.getElementById('continueCommande');

//     if (continueCommande) {
//         continueCommande.addEventListener('click', () => {
//             if (signup.classList.contains('display-none')) {
//                 signup.classList.remove('display-none');
//             } else {
//                 // Optionnel: Si vous voulez que le bouton puisse aussi cacher le formulaire après l'avoir montré
//                 signup.classList.add('display-none');
//             }
//         });
//     }
// });



// document.addEventListener('DOMContentLoaded', () => {
//     const signup = document.getElementById('signup');
//     const continueCommande = document.getElementById('continueCommande');

//     // Initialiser l'état caché du formulaire
//     if (signup) signup.style.display = 'none';

//     let addProduit = JSON.parse(localStorage.getItem('produit'));
//     console.log(addProduit);

//     if (addProduit && addProduit.length > 0) {
//         // S'assurer que le bouton "Continuer" est affiché uniquement si le panier n'est pas vide
//         continueCommande.style.display = 'block';

//         continueCommande.addEventListener('click', () => {
//             // Afficher le formulaire quand "Continuer" est cliqué
//             if (signup) signup.style.display = 'block';
//         });
//     } else {
//         // Optionnellement, cacher le bouton "Continuer" si le panier est vide
//         if (continueCommande) continueCommande.style.display = 'none';
//         console.log("Le panier est vide ou non présent.");
//     }
// });
// document.addEventListener('DOMContentLoaded', () => {
//     const signup = document.getElementById('signup');
//     const continueCommande = document.getElementById('continueCommande');

//     // S'assure que le formulaire est caché dès le chargement de la page
//     signup.style.display = 'none';

//     continueCommande.addEventListener('click', function() {
//         signup.style.display = 'block'; // Affiche le formulaire
//     });
// });
// document.addEventListener('DOMContentLoaded', () => {
//     const signup = document.getElementById('signup');
//     const continueCommande = document.getElementById('continueCommande');

//     // Initialiser le formulaire comme caché
//     signup.style.display = 'none';

//     // Ajouter un écouteur d'événement sur le bouton "Continuer"
//     continueCommande.addEventListener('click', () => {
//         // Modifier le style du formulaire pour le montrer
//         signup.style.display = 'block';
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const signup = document.getElementById('signup');
    const continueCommande = document.getElementById('continueCommande');

    if (continueCommande) {
        continueCommande.addEventListener('click', function() {
            // Cette vérification permet de s'assurer que la classe est gérée correctement
            if (signup.classList.contains('display-none')) {
                signup.classList.remove('display-none');
            } else {
                // Si pour une raison quelconque, le formulaire est déjà visible,
                // cette ligne permet de recacher le formulaire. 
                // Vous pouvez la supprimer si le bouton ne doit servir qu'à afficher le formulaire.
                signup.classList.add('display-none');
            }
        });
    }
});