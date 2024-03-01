// const urlParams = new URLSearchParams(window.location.search);
// const produitId = urlParams.get('id');

// // Fonction pour récupérer les données du produit
// async function fetchProduit() {
//     if (!produitId) {
//         console.log('ID du produit non spécifié dans l\'URL');
//         return;
//     }
//     try {
//         const response = await fetch(`http://localhost:3000/api/furniture/${produitId}`);
//         if (!response.ok) {
//             throw new Error('La réponse du réseau n\'était pas OK');
//         }
//         const produitData = await response.json();
//         displayProduit(produitData);
//     } catch (error) {
//         console.error('Erreur lors de la récupération du produit:', error);
//     }
// }

// // Fonction pour afficher les données du produit
// function displayProduit(produitData) {
//     const blocCard = document.getElementById('blocCard');
//     if (!blocCard) {
//         console.error('Element #blocCard non trouvé dans le DOM');
//         return;
//     }

//     let optionsVernis = produitData.varnish.map(vernis => `<option value="${vernis}">${vernis}</option>`).join('');
//     blocCard.innerHTML = `
//         <div id="card${produitData._id}" class="card">
//             <h3>${produitData.name.toUpperCase()}</h3>
//             <img src="${produitData.imageUrl}" alt="photo de meuble ${produitData.name}" class="image-size"/>
//             <p>${produitData.description}</p>
//             <p>Prix: ${produitData.price / 100} €</p>
//             <div class="flex-around div-list-deroulante">
//                 <label for="vernis">Choisir le vernis:</label>
//                 <select name="vernis" id="vernis">${optionsVernis}</select>
//             </div>
//             <button id="btnAcheter" class="bouton-details bouton-acheter">Acheter</button>
//         </div>
//     `;
//     addBasket();
// }

// // Ajoute le produit au panier
// function addBasket() {
//     const bouton = document.getElementById('btnAcheter');
//     if (!bouton) return;

//     bouton.addEventListener('click', () => {
//         let produitTableau = JSON.parse(localStorage.getItem('produit')) || [];
//         let select = document.getElementById('vernis');
//         const produitAajouter = {
//             id: produitId,
//             teinte: select.value,
//             quantite: 1
//         };

//         const indexProduit = produitTableau.findIndex(produit => produit.id === produitAajouter.id && produit.teinte === produitAajouter.teinte);
//         if(indexProduit !== -1) {
//             produitTableau[indexProduit].quantite += 1;
//         } else {
//             produitTableau.push(produitAajouter);
//         }

//         localStorage.setItem('produit', JSON.stringify(produitTableau));
//     });
// }

// fetchProduit(); // Exécution de la fonction principale pour récupérer et afficher les données du produit

// const produit = window.location.search.split("?").join("")

// console.log(produit);


// let produitData = []

// const fetchProduit = async () => {
//     await fetch(`http://localhost:3000/api/furniture/${produit}`).then((res)=> 
//     res.json()
//     ).then((data)=>{
//         console.log(data);
//     })
// }

// fetchProduit()







// let produitData = [];
// const fetchProduit = async () => {
//     // Extraction de l'ID du produit depuis l'URL de la page
//     const produitId = window.location.search.split("=")[1];

//     try {
//         const response = await fetch(`http://localhost:3000/api/furniture/${produitId}`);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Erreur lors de la récupération du produit:', error);

//         produitData = data
//         console.log(produitData);
//     }
// };

// const produitDisplay = async () => {
//     await fetchProduit();
   
//     document.getElementById('blocCard').innerHTML = `
//     <div id="card${produitData._id}" class="flex-column-around card-size-produit card">
//     <h3 class="titre-card titre-size">${produit.Datta.name .toUppercase()}</h3>
//     <img class="image-size" src="${produitData.imageUrl}" alt="image de meuble ${produitData.name}">
//     <div class="bouton-chene">CHÊNE</div>
//     <p class="description-meuble">${produitData.description}</p>
//     <div>
//     <p class="flex-centre"> ${produitData.price .toString().replace(/0+$/,"")} Euro</p>
    
//     <div class="flex-around div-list-deroulante">
//     <label for="vernis">Choisir le vernis:</label>
//     <select name="vernis" id="vernis"></select>
//     </div>
//     </div>
//     <button id="${produitData._id}" class="bouton-details bouton-acheter">Acheter</button>
//     </div>
// `;

    
// }

// produitDisplay();






let produitData = []; // Cette déclaration devrait être un objet {} puisque vous attendez un produit unique

const fetchProduit = async () => {
    const produitId = window.location.search.split("=")[1];
    try {
        const response = await fetch(`http://localhost:3000/api/furniture/${produitId}`);
        const data = await response.json();
        console.log(data); // Affiche les données récupérées dans la console
        produitData = data; // Affectation des données à produitData
    } catch (error) {
        console.error('Erreur lors de la récupération du produit:', error);
    }
};

const produitDisplay = async () => {
    await fetchProduit();
    if (Object.keys(produitData).length === 0) {
        console.error('Aucun produit trouvé');
        return; // Sort de la fonction si produitData est vide
    }
   
    document.getElementById('blocCard').innerHTML = `
    <div id="card${produitData._id}" class="flex-column-around card-size-produit card">
    <h3 class="titre-card titre-size">${produitData.name.toUpperCase()}</h3>
    <img class="image-size" src="${produitData.imageUrl}" alt="image de meuble ${produitData.name}">
    <div class="bouton-chene">CHÊNE</div>
    <p class="description-meuble">${produitData.description}</p>
    <div>
    <p class="flex-centre"> ${produitData.price.toString().replace(/0+$/,"")} Euro</p>
    
    <div class="flex-around div-list-deroulante">
    <label for="vernis">Choisir le vernis:</label>
    <select name="vernis" id="vernis"></select>
    </div>
    </div>
    <button id="${produitData._id}" class="bouton-details bouton-acheter">Acheter</button>
    </div>
    `;

    let select = document.getElementById('vernis');
    console.log(select);

    console.log(produitData.varnish);
    produitData.varnish.forEach((vernis) => {
        document.createElement('option');
        console.log(vernis);
        let tagOption = document.createElement('option');

        tagOption.innerHTML = `${vernis}`;
        tagOption.value = `${vernis}`;

        select.appendChild(tagOption);
        console.log(tagOption);

    })
    addBasket(produitData);
}

produitDisplay();


const addBasket = () => {
    let bouton = document.getElementById(produitData._id);
    bouton.addEventListener('click', () => {
        let produitTableau = JSON.parse(localStorage.getItem('produit')) || [];
        let selectVernis = document.getElementById('vernis').value;
        
        // Création de l'objet à ajouter au panier avec teinte et quantité
        let produitAajouter = Object.assign({}, produitData, {
            teinte: selectVernis,
            quantite: 1
        });
        
        console.log('Objet à ajouter:', produitAajouter);

        produitTableau.push(produitAajouter);
        localStorage.setItem('produit', JSON.stringify(produitTableau));

        console.log('Produit ajouté au panier:', produitAajouter);
    });
};
