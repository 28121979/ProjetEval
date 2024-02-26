


// Extrait l'ID du produit de l'URL
const urlParams = new URLSearchParams(window.location.search);
const produitId = urlParams.get('id'); 

// Fonction pour récupérer les données du produit
async function fetchProduit(produitId) {
    try {
        const response = await fetch(`http://localhost:3000/api/furniture/${produitId}`);
        if (!response.ok) {
            throw new Error('La réponse du réseau n\'était pas OK');
        }
        const produitData = await response.json();
        return produitData; // Retourne les données du produit pour utilisation ultérieure
    } catch (error) {
        console.error('Erreur lors de la récupération du produit:', error);
    }
}

// Fonction pour afficher les données du produit
function produitDisplay(produitData) {
    const blocCard = document.getElementById('blocCard');
    if (blocCard) {
        blocCard.innerHTML = `
            <div id="card${produitData._id}" class="card">
                <h3>${produitData.name.toUpperCase()}</h3>
                <img src="${produitData.imageUrl}" alt="photo de meuble ${produitData.name}" class="image-size"/>
                <p>${produitData.description}</p>
                <p>Prix: ${produitData.price / 100} €</p>

                <div class="flex-around div-list-deroulante">
                <label for="vernis">Choisir le vernis:</label>
                <select name="vernis" id="vernis">
                </select>
                </div>
                <button id="btnAcheter" class="bouton-details bouton-acheter">Acheter</button>
            </div>
        `;
    } else {
        console.error('Element #blocCard non trouvé dans le DOM');
    }

    const select = document.getElementById('vernis');
    console.log(select);

    console.log(produitData.varnish);

    produitData.varnish.forEach((vernis) => {
        console.log(vernis);
        let tagOption = document.createElement('option');

        tagOption.innerHTML = `${vernis}`;
        tagOption.value = `${vernis}`;

        select.appendChild(tagOption);
    })
    addBasket(produitData._id);
}

// Fonction principale pour orchestrer la récupération et l'affichage du produit
async function main() {
    if (produitId) {
        const produitData = await fetchProduit(produitId);
        if (produitData) {
            produitDisplay(produitData);
        } else {
            console.log('Aucune donnée reçue pour le produit');
        }
    } else {
        console.log('ID du produit non spécifié dans l\'URL');
    }
}

main(); // Exécution de la fonction principale

// const addBasket = () => {
//     let bouton = document.getElementById('btnAcheter');
//     console.log(bouton);
//     bouton.addEventListener('click', () => {
//         let produitTableau = JSON.parse(localStorage.getItem('produit'));
//         let select = document.getElementById('vernis');
//         console.log(select.value);
//         console.log(produitTableau.value);

//         const fusionproduitTeinte = Object.assign{}, produitTableau {
//             teinte: `${select.value}`,
//             quantite: 1
//         }
            
//         })

//         if(produitTableau === null){
//             produitTableau = [];
//             produitTableau.push(produitId);
//             console.log(produitTableau);
//             localStorage.setItem('produit', JSON.stringify(produitTableau));
//         }

//     }

const addBasket = () => {
    let bouton = document.getElementById('btnAcheter');
    bouton.addEventListener('click', () => {
        let produitTableau = JSON.parse(localStorage.getItem('produit')) || [];
        let select = document.getElementById('vernis');
        
        // Crée un objet pour le produit sélectionné avec teinte et quantité
        const produitAajouter = {
            id: produitId, // Assurez-vous que produitId est accessible dans cette portée
            teinte: select.value,
            quantite: 1
        };
        
        // Recherche si le produit (même ID et teinte) existe déjà dans le tableau
        const indexProduit = produitTableau.findIndex(produit => produit.id === produitAajouter.id && produit.teinte === produitAajouter.teinte);
        
        if(indexProduit !== -1) {
            // Si le produit existe déjà, incrémente la quantité
            produitTableau[indexProduit].quantite += 1;
        } else {
            // Sinon, ajoute le nouveau produit
            produitTableau.push(produitAajouter);
        }

        localStorage.setItem('produit', JSON.stringify(produitTableau));
    });
};

addBasket(); // N'oubliez pas d'appeler la fonction pour activer l'écouteur d'événements
