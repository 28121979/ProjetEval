

document.addEventListener('DOMContentLoaded', () => {
    let produitData = {};

    const fetchProduit = async () => {
        const produitId = window.location.search.split("=")[1];
        try {
            const response = await fetch(`http://localhost:3000/api/furniture/${produitId}`);
            produitData = await response.json();
            console.log("Produit récupéré:", produitData);
            produitDisplay();
        } catch (error) {
            console.error('Erreur lors de la récupération du produit:', error);
        }
    };

    const produitDisplay = async () => {
        document.getElementById('blocCard').innerHTML = `
            <div id="card${produitData._id}" class="flex-column-around card-size-produit card">
                <h3 class="titre-card titre-size">${produitData.name.toUpperCase()}</h3>
                <img class="image-size" src="${produitData.imageUrl}" alt="image de meuble ${produitData.name}">
                <div class="bouton-chene">CHÊNE</div>
                <p class="description-meuble">${produitData.description}</p>
                <div>
                    <p class="flex-centre">${(produitData.price / 100).toFixed(2)} Euro</p>
                    <div class="flex-around div-list-deroulante">
                        <label for="vernis">Choisir le vernis:</label>
                        <select name="vernis" id="vernis"></select>
                    </div>
                </div>
                <button id="acheter${produitData._id}" class="bouton-details bouton-acheter">Acheter</button>
            </div>
        `;

        const select = document.getElementById('vernis');
        produitData.varnish.forEach(vernis => {
            const tagOption = document.createElement('option');
            tagOption.textContent = vernis;
            tagOption.value = vernis;
            select.appendChild(tagOption);
        });

        addBasket();
        updateCartQuantity(); // Mise à jour initiale de la quantité dans le panier
    };

    const addBasket = () => {
        const bouton = document.getElementById(`acheter${produitData._id}`);
        bouton.addEventListener('click', () => {
            let produitTableau = JSON.parse(localStorage.getItem('produit')) || [];
            const selectVernis = document.getElementById('vernis').value;

            const produitIndex = produitTableau.findIndex(p => p._id === produitData._id && p.teinte === selectVernis);
            if (produitIndex !== -1) {
                produitTableau[produitIndex].quantite++;
            } else {
                const produitAajouter = {
                    ...produitData,
                    teinte: selectVernis,
                    quantite: 1
                };
                produitTableau.push(produitAajouter);
            }

            localStorage.setItem('produit', JSON.stringify(produitTableau));
            console.log('Produit ajouté ou quantité mise à jour dans le panier');
            updateCartQuantity(); // Mise à jour de la quantité après ajout au panier
        });
    };

    // Fonction pour mettre à jour la quantité affichée à côté du chariot
    function updateCartQuantity() {
        const cartQuantityEl = document.getElementById('cartQuantity');
        const produits = JSON.parse(localStorage.getItem('produit')) || [];
        const totalQuantite = produits.reduce((acc, produit) => acc + produit.quantite, 0);
        cartQuantityEl.textContent = totalQuantite.toString();
    }

    fetchProduit(); // Appel de la fonction pour récupérer les détails du produit
});
