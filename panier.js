// let addProduit = JSON.parse(localStorage.getItem('produit'));

// console.log(addProduit);

// const panierDisplay = async () => {
//     console.log("salut");
//     if(addProduit) {
//         await addProduit
//         console.log(addProduit);
//     }
// }

// panierDisplay()

// Récupération des produits stockés dans le localStorage
// let produits = JSON.parse(localStorage.getItem('produit')) || [];

// // Vérification que le tableau de produits n'est pas vide
// if (produits.length > 0) {
//     // Parcourir chaque produit et afficher ses détails dans la console
//     produits.forEach((produit, index) => {
//         console.log(`Produit ${index + 1}:`, produit);
//     });
// } else {
//     console.log("Aucun produit trouvé dans le localStorage.");

//     formulaireContact.classList.add("display-none");

//     continue.commande.addEventListener("click", () => {
//         formulaireContact.classList.remove("display-none");
//     })
    
// }



// let produits = JSON.parse(localStorage.getItem('produit')) || [];

// // Vérification que le tableau de produits n'est pas vide
// if (produits.length > 0) {
//     // Parcourir chaque produit et afficher ses détails dans la console
//     produits.forEach((produit, index) => {
//         console.log(`Produit ${index + 1}:`, produit);
//     });
// } else {
//     console.log("Aucun produit trouvé dans le localStorage.");

//     signup.classList.add('display-none'); // Cache le formulaire par défaut
// } else {
//     // Le panier est vide
//     blocTitrePanier.innerHTML = `<h2 id="titre-panier">Votre panier est vide</h2>`;
//     signup.classList.add('display-none'); // Assure que le formulaire reste caché si le panier est vide
// }
    


// let produits = JSON.parse(localStorage.getItem('produit')) || [];

// // Vérification que le tableau de produits n'est pas vide
// if (produits.length > 0) {
//     // Parcourir chaque produit et afficher ses détails dans la console
//     produits.forEach((produit, index) => {
//         console.log(`Produit ${index + 1}:`, produit);
//     });
// } else {
//     console.log("Aucun produit trouvé dans le localStorage.");
//     // Cache le formulaire si aucun produit n'est trouvé
//     signup.classList.add('display-none'); // Cache le formulaire par défaut
// } else {
//     // Le panier est vide
//     blocTitrePanier.innerHTML = `<h2 id="titre-panier">Votre panier est vide</h2>`;
//     signup.classList.add('display-none'); // Assure que le formulaire reste caché si le panier est vide
// }






// document.addEventListener('DOMContentLoaded', (event) => {
//     // Cacher le formulaire au chargement de la page
//     let signupForm = document.getElementById('signup');
//     signupForm.style.display = 'none';

//     // Vérification que le tableau de produits n'est pas vide
//     let produits = JSON.parse(localStorage.getItem('produit')) || [];
//     if (produits.length > 0) {
//         produits.forEach((produit, index) => {
//             console.log(`Produit ${index + 1}:`, produit);
//         });
//     } else {
//         console.log("Aucun produit trouvé dans le localStorage.");
//         // Affichage d'un message si le panier est vide
//         let blocTitrePanier = document.getElementById('titre-panier');
//         blocTitrePanier.innerHTML = "Votre panier est vide";
//     }

//     // Ajouter un écouteur d'événement pour afficher le formulaire lorsque l'utilisateur clique sur "Continuer"
//     let continueButton = document.getElementById('continueCommande');
//     continueButton.addEventListener('click', (event) => {
//         event.preventDefault(); 
//         alert('ajouter un produit au panier');
//         signupForm.style.display = 'block'; // Affiche le formulaire
//     });

    
//     injectJs.innerHTML = addProduit.map(produit => `
//     <div class="flex-around shadow" id="basketProduit">
//         <div id="blocImage">
//             <img src="${produit.imageUrl}" alt="image meuble ${produit.name}">
//         </div>
//         <div id="blocProduit" class="flex-column-around">
//             <h2>${produit.name}</h2>
//             <p>${produit.teinte}</p>
//             <p>${produit.price} €</p>
//             <p>Ref : ${produit.ref}</p>
//             <p><i class="fa-solid fa-truck"></i> en stock</p>
//         </div>
//         <div id="bloc-change-produits" class="flex-around">
//             <div class="flex-centre">
//                 <button class="bouton-moins">-</button>
//                 <span class="produit-quantite">${produit.quantity}</span>
//                 <button class="bouton-plus">+</button>
//             </div>
//             <div><p>${produit.totalPrice} €</p></div>
//             <div><i class="fa-solid fa-trash-can"></i></div>
//         </div>
//     </div>
// `).join('');
//     )

//     blocTitrePanier.classList.add("flex-column-start");
//     blocTitrePanier.classList.remove("flex-column-start")
//     blocTitrePanier.innerHTML = `<h2 id="titre-panier">PANIER</h2>`
// });












// document.addEventListener('DOMContentLoaded', () => {
//     const signupForm = document.getElementById('signup');
//     signupForm.style.display = 'none';

//     const blocTitrePanier = document.getElementById('titre-panier');
//     let produits = JSON.parse(localStorage.getItem('produit')) || [];

//     // Afficher "Votre panier est vide" ou "PANIER" selon si des produits sont présents
//     if (produits.length > 0) {
//         blocTitrePanier.innerHTML = "PANIER";
//         // Afficher les produits dans le panier
//         const injectJs = document.getElementById('injectJs'); // Assurez-vous d'avoir un élément avec cet ID dans votre HTML
//         injectJs.innerHTML = produits.map(produit => `
//             <div class="flex-around shadow" id="basketProduit">
//                 <div id="blocImage">
//                     <img src="${produit.imageUrl}" alt="image meuble ${produit.name}">
//                 </div>
//                 <div id="blocProduit" class="flex-column-around">
//                     <h2>${produit.name}</h2>
//                     <p>${produit.teinte}</p>
//                     <p>${produit.price} €</p>
//                     <p>Ref : ${produit.ref}</p>
//                     <p><i class="fa-solid fa-truck"></i> en stock</p>
//                 </div>
//                 <div id="bloc-change-produits" class="flex-around">
//                     <div class="flex-centre">
//                         <button class="bouton-moins">-</button>
//                         <span class="produit-quantite">${produit.quantity}</span>
//                         <button class="bouton-plus">+</button>
//                     </div>
//                     <div><p>${produit.totalPrice} €</p></div>
//                     <div><i class="fa-solid fa-trash-can"></i></div>
//                 </div>
//             </div>
//         `).join('');
//     } else {
//         console.log("Aucun produit trouvé dans le localStorage.");
//         blocTitrePanier.innerHTML = "Votre panier est vide";
//     }

//     // Ajouter un écouteur d'événement pour le bouton "Continuer"
//     const continueButton = document.getElementById('continueCommande');
//     continueButton.addEventListener('click', (event) => {
//         event.preventDefault();
//         if (produits.length === 0) {
//             alert('Ajoutez un produit à votre panier avant de continuer.');
//         } else {
//             signupForm.style.display = 'block'; // Optionnel selon la logique souhaitée
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const signupForm = document.getElementById('signup');
//     const blocTitrePanier = document.getElementById('titre-panier');
//     const injectJs = document.getElementById('injectJs');
//     let produits = JSON.parse(localStorage.getItem('produit')) || [];

//     const produitComplet = produits.find(p => p.name && p.price);

//     if (produitComplet) {
//         // Exemple pour déterminer une imageUrl - Ajustez selon votre logique
//         const imageUrl = 'path/to/your/default/image.jpg'; // Remplacez par votre logique d'URL d'image

//         signupForm.style.display = 'block';
//         blocTitrePanier.innerHTML = "PANIER";
//         injectJs.innerHTML = `
//             <div class="flex-around shadow" style="align-items: center; margin-bottom: 20px;">
//                 <div>
//                     <img src="${imageUrl}" alt="Image de ${produitComplet.name}" style="max-width: 100px; height: auto;">
//                 </div>
//                 <div>
//                     <h2>${produitComplet.name}</h2>
//                     <p>Ref : ${produitComplet._id || produitComplet.id}</p>
//                     <p>Prix : ${(produitComplet.price / 100).toFixed(2)} €</p>
//                 </div>
//             </div>
//         `;
//     } else {
//         signupForm.style.display = 'none';
//         blocTitrePanier.innerHTML = "Votre panier est vide";
//     }
// });






// document.addEventListener('DOMContentLoaded', () => {
//     const signupForm = document.getElementById('signup');
//     const blocTitrePanier = document.getElementById('titre-panier');
//     const injectJs = document.getElementById('injectJs');
//     let produits = JSON.parse(localStorage.getItem('produit')) || [];

//     const produitComplet = produits.find(p => p.name && p.price && p.imageUrl); // Ajout de la vérification pour imageUrl

//     if (produitComplet) {
//         signupForm.style.display = 'block';
//         blocTitrePanier.innerHTML = "PANIER";
//         injectJs.innerHTML = `
//             <div class="flex-around shadow" style="align-items: center; margin-bottom: 20px;">
//                 <div>
//                     <img src="${produitComplet.imageUrl}" alt="Image de ${produitComplet.name}" style="max-width: 100px; height: auto;">
//                 </div>
//                 <div>
//                     <h2>${produitComplet.name}</h2>
//                     <p>Ref : ${produitComplet._id || produitComplet.id}</p>
//                     <p>Prix : ${(produitComplet.price / 100).toFixed(2)} €</p>
//                 </div>
//             </div>
//         `;
//     } else {
//         signupForm.style.display = 'none';
//         blocTitrePanier.innerHTML = "Votre panier est vide";
//     }
// });






// document.addEventListener('DOMContentLoaded', () => {
//     const blocTitrePanier = document.getElementById('blocTitrePanier');
//     let produits = JSON.parse(localStorage.getItem('produit')) || [];

//     // Sélectionner le conteneur où injecter les détails du produit
//     const injectJs = document.getElementById('injectJs');

//     // Vérifier s'il y a des produits
//     if (produits.length > 0) {
//         // Utilisation du premier produit complet comme exemple
//         const produit = produits.find(p => p.name && p.price);

//         if (produit) {
//             blocTitrePanier.innerHTML = "Votre panier"; // Mise à jour du titre du panier

//             // Construire et injecter le HTML avec tous les détails du produit
//             injectJs.innerHTML = `
//                 <div class="row shadow">
//                     <div class="col-3 d-flex justify-content-center">
//                         <div id="blocImage">
//                             <img src="${produit.imageUrl || 'image/path/to/default.jpg'}" alt="image de ${produit.name}" style="width: 100px;"/>
//                         </div>
//                     </div>
//                     <div class="col-3">
//                         <div id="blocProduit" class="flex-column-around">
//                             <h2>${produit.name}</h2>
//                             <p>${produit.price / 100} €</p>
//                             <p>Ref ${produit._id}</p>
//                             <p><i class="fa-solid fa-truck"></i> en stock</p>
//                         </div>
//                     </div>
//                     <div class="col-3 d-flex justify-content-center">
//                         <div id="bloc-change-produit" class="flex-around">
//                             <button class="bouton-moins">-</button>
//                             <span class="produit-quantite">${produit.quantite}</span>
//                             <button class="bouton-plus">+</button>
//                         </div>
//                     </div>
//                     <div class="col-3 pt-5">
//                         <div><i class="fa-solid fa-trash-can"></i> Supprimer</div>
//                     </div>
//                 </div>
//             `;
//         } else {
//             injectJs.innerHTML = "<p>Produit sélectionné non trouvé.</p>";
//         }
//     } else {
//         blocTitrePanier.innerHTML = "Votre panier est vide";
//     }
// });





// document.addEventListener('DOMContentLoaded', () => {
//     const blocTitrePanier = document.getElementById('blocTitrePanier');
//     let produits = JSON.parse(localStorage.getItem('produit')) || [];

//     const injectJs = document.getElementById('injectJs');

//     if (produits.length > 0) {
//         const produit = produits.find(p => p.name && p.price);

//         if (produit) {
//             blocTitrePanier.innerHTML = "Votre panier";

//             const imageUrl = produit.imageUrl || 'image/path/to/default.jpg'; // Remplacer par votre URL d'image par défaut
//             const prixTotal = (produit.price / 100 * produit.quantite).toFixed(2); // Calcul du prix total

//             injectJs.innerHTML = `
//                 <div class="row shadow">
//                     <div class="col-3 d-flex justify-content-center align-items-center">
//                         <div id="blocImage">
//                             <img src="${imageUrl}" alt="image de ${produit.name}" style="width: 100px;"/>
//                         </div>
//                     </div>
//                     <div class="col-3">
//                         <div id="blocProduit" class="flex-column-around">
//                             <h2>${produit.name}</h2>
//                             <p>${(produit.price / 100).toFixed(2)} €</p>
//                             <p>Ref ${produit._id}</p>
//                             <p><i class="fa-solid fa-truck"></i> en stock</p>
//                         </div>
//                     </div>
//                     <div class="col-3 d-flex justify-content-center align-items-center">
//                         <div id="bloc-change-produit" class="d-flex align-items-center">
//                             <button class="btn btn-secondary bouton-moins">-</button>
//                             <span class="mx-2 produit-quantite">${produit.quantite}</span>
//                             <button class="btn btn-secondary bouton-plus">+</button>
//                         </div>
//                     </div>
//                     <div class="col-3 pt-5 d-flex justify-content-center align-items-start">
//                         <div class="pt-5">
//                             <p>${prixTotal} € <i class="fa-solid fa-trash-can"></i> Supprimer</p>
//                         </div>
//                     </div>
//                 </div>
//             `;
//         } else {
//             injectJs.innerHTML = "<p>Produit sélectionné non trouvé.</p>";
//         }
//     } else {
//         blocTitrePanier.innerHTML = "Votre panier est vide";
//     }
// });



document.addEventListener('DOMContentLoaded', () => {
    const blocTitrePanier = document.getElementById('blocTitrePanier');
    let produits = JSON.parse(localStorage.getItem('produit')) || [];
    const injectJs = document.getElementById('injectJs');

    if (produits.length > 0) {
        const produit = produits.find(p => p.name && p.price);

        if (produit) {
            blocTitrePanier.innerHTML = "Votre panier";

            const imageUrl = produit.imageUrl || 'image/path/to/default.jpg';
            const quantite = produit.quantite || 0; // Fournir 0 si undefined
            const prixTotal = produit.price ? ((produit.price / 100) * quantite).toFixed(2) : '0.00'; // Calcul du prix total ou '0.00' si undefined

            injectJs.innerHTML = `
                <div class="row shadow">
                    <div class="col-3 d-flex justify-content-center align-items-center">
                        <div id="blocImage">
                            <img src="${imageUrl}" alt="Image de ${produit.name}" style="width: 100px;"/>
                        </div>
                    </div>
                    <div class="col-4 d-flex justify-content-center align-items-center ">
                        <div id="blocProduit" class="">
                            <h2>${produit.name}</h2>
                            <p>${(produit.price / 100).toFixed(2)} €</p>
                            <p>Ref ${produit._id}</p>
                            <p><i class="fa-solid fa-truck"></i> en stock</p>
                        </div>
                    </div>
                    <div class="col-3 d-flex justify-content-center align-items-center">
                        <div class="d-flex align-items-center">
                            <button class="btn btn-secondary bouton-moins">-</button>
                            <span class="mx-2 produit-quantite">${quantite}</span>
                            <button class="btn btn-secondary bouton-plus">+</button>
                        </div>
                    </div>
                    <div class="col-2 pt-5 d-flex justify-content-center align-items-center">
                        <div>
                            <p>${prixTotal} € <i class="fa-solid fa-trash-can" onclick="supprimerProduit('${produit._id}')"></i></p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            injectJs.innerHTML = "<p>Produit sélectionné non trouvé.</p>";
        }
    } else {
        blocTitrePanier.innerHTML = "Votre panier est vide";
    }
});

function supprimerProduit(id) {
    // Logique de suppression à implémenter ici
    console.log("Supprimer le produit avec l'id:", id);
}
