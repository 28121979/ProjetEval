const urlParams = new URLSearchParams(window.location.search);
const produitId = urlParams.get('id');

// Fonction pour récupérer les données du produit
async function fetchProduit() {
    if (!produitId) {
        console.log('ID du produit non spécifié dans l\'URL');
        return;
    }
    try {
        const response = await fetch(`http://localhost:3000/api/furniture/${produitId}`);
        if (!response.ok) {
            throw new Error('La réponse du réseau n\'était pas OK');
        }
        const produitData = await response.json();
        displayProduit(produitData);
    } catch (error) {
        console.error('Erreur lors de la récupération du produit:', error);
    }
}

// Fonction pour afficher les données du produit
function displayProduit(produitData) {
    const blocCard = document.getElementById('blocCard');
    if (!blocCard) {
        console.error('Element #blocCard non trouvé dans le DOM');
        return;
    }

    let optionsVernis = produitData.varnish.map(vernis => `<option value="${vernis}">${vernis}</option>`).join('');
    blocCard.innerHTML = `
        <div id="card${produitData._id}" class="card">
            <h3>${produitData.name.toUpperCase()}</h3>
            <img src="${produitData.imageUrl}" alt="photo de meuble ${produitData.name}" class="image-size"/>
            <p>${produitData.description}</p>
            <p>Prix: ${produitData.price / 100} €</p>
            <div class="flex-around div-list-deroulante">
                <label for="vernis">Choisir le vernis:</label>
                <select name="vernis" id="vernis">${optionsVernis}</select>
            </div>
            <button id="btnAcheter" class="bouton-details bouton-acheter">Acheter</button>
        </div>
    `;
    addBasket();
}

// Ajoute le produit au panier
function addBasket() {
    const bouton = document.getElementById('btnAcheter');
    if (!bouton) return;

    bouton.addEventListener('click', () => {
        let produitTableau = JSON.parse(localStorage.getItem('produit')) || [];
        let select = document.getElementById('vernis');
        const produitAajouter = {
            id: produitId,
            teinte: select.value,
            quantite: 1
        };

        const indexProduit = produitTableau.findIndex(produit => produit.id === produitAajouter.id && produit.teinte === produitAajouter.teinte);
        if(indexProduit !== -1) {
            produitTableau[indexProduit].quantite += 1;
        } else {
            produitTableau.push(produitAajouter);
        }

        localStorage.setItem('produit', JSON.stringify(produitTableau));
    });
}

fetchProduit(); // Exécution de la fonction principale pour récupérer et afficher les données du produit

