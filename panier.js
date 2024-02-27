
// document.addEventListener('DOMContentLoaded', () => {
//     const signup = document.getElementById('signup');
//     const continueCommande = document.getElementById('continueCommande');
//     const blocTitrePanier = document.getElementById('blocTitrePanier');
//     const injectJs = document.getElementById('injectJs'); // Assurez-vous que cet élément existe dans votre HTML

//     const panierDisplay = () => {
//         let addProduit = JSON.parse(localStorage.getItem('produit') || '[]');
        
//         if (addProduit.length > 0) {
//             console.log("Panier:", addProduit);

//             signup.classList.add('display-none');
//             continueCommande.addEventListener('click', () => {
//                 signup.classList.remove('display-none');
//             });

//             blocTitrePanier.classList.add("flex-column-start");
//             blocTitrePanier.classList.remove("flex-start");
//             blocTitrePanier.innerHTML = `<h2 id="titre-panier">PANIER</h2><span class="trait-design-panier"></span>`;

//             // Mise à jour pour injecter le contenu HTML dans `injectJs`
//             injectJs.innerHTML = addProduit.map(produit => `
//                 <div class="flex-around shadow " id="basketProduit">
//                     <div id="blocImage">
//                         <img src="${produit.imageUrl}" alt="image meuble ${produit.name}">
//                     </div>
//                     <div id="blocProduit" class="flex-column-around ">
//                         <h2>${produit.name}</h2>
//                         <p>vernis</p>
//                         <p>${produit.price} €</p>
//                         <p>Ref : ${produit.ref}</p>
//                         <p><i class="fa-solid fa-truck"></i> en stock</p>
//                     </div>
//                     <div id="bloc-change-produits" class="flex-around">
//                         <div class="flex-centre">
//                             <button class="bouton-moins">-</button>
//                             <span class="produit-quantite">${produit.quantity}</span>
//                             <button class="bouton-plus">+</button>
//                         </div>
//                         <div><p>${produit.totalPrice} €</p></div>
//                         <div><i class="fa-solid fa-trash-can"></i></div>
//                     </div>
//                 </div>
//             `).join(''); // N'oubliez pas de joindre les éléments du tableau pour créer une chaîne de caractères
//         } else {
//             console.log('Votre panier est vide.');
//             // Gérer ici le cas où le panier est vide
//         }
//     };

//     panierDisplay();
// });




document.addEventListener('DOMContentLoaded', () => {
    const signup = document.getElementById('signup');
    const continueCommande = document.getElementById('continueCommande');
    const blocTitrePanier = document.getElementById('blocTitrePanier');
    const injectJs = document.getElementById('injectJs'); // Assurez-vous que cet élément existe dans votre HTML
  
    const panierDisplay = () => {
      let addProduit = JSON.parse(localStorage.getItem('produit') || '[]');
  
      if (addProduit.length > 0) {
        console.log("Panier:", addProduit);
  
        signup.classList.add('display-none');
        continueCommande.addEventListener('click', () => {
          signup.classList.remove('display-none');
        });
  
        blocTitrePanier.classList.add("flex-column-start");
        blocTitrePanier.classList.remove("flex-start");
        blocTitrePanier.innerHTML = `<h2 id="titre-panier">PANIER</h2><span class="trait-design-panier"></span>`;
  
        // Mise à jour pour injecter le contenu HTML dans `injectJs`
        injectJs.innerHTML = addProduit.map(produit => `
            <div class="flex-around shadow " id="basketProduit">
                <div id="blocImage">
                    <img src="${produit.imageUrl}" alt="image meuble ${produit.name}" onerror="this.onerror=null;this.src='../images/image-not-found.jpg';">
                </div>
                <div id="blocProduit" class="flex-column-around ">
                    <h2>${produit.name}</h2>
                    <p>${produit.teinte}</p>
                    <p>${produit.price} €</p>
                    <p>Ref : ${produit.ref}</p>
                    <p><i class="fa-solid fa-truck"></i> en stock</p>
                </div>
                <div id="bloc-change-produits" class="flex-around">
                    <div class="flex-centre">
                        <button class="bouton-moins">-</button>
                        <span class="produit-quantite">${produit.quantity}</span>
                        <button class="bouton-plus">+</button>
                    </div>
                    <div><p>${produit.totalPrice} €</p></div>
                    <div><i class="fa-solid fa-trash-can"></i></div>
                </div>
            </div>
        `).join(''); // N'oubliez pas de joindre les éléments du tableau pour créer une chaîne de caractères
      } else {
        console.log('Votre panier est vide.');
        // Gérer ici le cas où le panier est vide
      }
    };
  
    panierDisplay();
  });
  