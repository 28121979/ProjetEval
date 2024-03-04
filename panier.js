



document.addEventListener('DOMContentLoaded', () => {
    const blocTitrePanier = document.getElementById('blocTitrePanier');
    let produits = JSON.parse(localStorage.getItem('produit')) || [];
    const injectJs = document.getElementById('injectJs');

    const refreshPanierDisplay = () => {
        if (produits.length > 0) {
            const produit = produits.find(p => p.name && p.price);
            if (produit) {
                const imageUrl = produit.imageUrl || 'image/path/to/default.jpg';
                const quantite = produit.quantite || 1; // S'assure que la quantité n'est pas null/undefined
                const prixTotal = (produit.price / 100 * quantite).toFixed(2); // Calcul du prix total

                injectJs.innerHTML = `
                    <div class="row shadow">
                        <div class="col-12 col-md-3 d-flex justify-content-center align-items-center">
                            <img src="${imageUrl}" alt="Image de ${produit.name}" class="img-fluid"/>
                        </div>
                        <div class="col-12 col-md-9">
                            <div class="row">
                                <div class="col-8">
                                    <h2>${produit.name}</h2>
                                    <p>${(produit.price / 100).toFixed(2)} €</p>
                                    <p>Ref ${produit._id}</p>
                                    <p><i class="fa-solid fa-truck"></i> en stock</p>
                                </div>
                                <div class="col-4 d-flex justify-content-end align-items-center">
                                    <div class="d-flex align-items-center">
                                        <button class="btn btn-secondary bouton-moins" data-id="${produit._id}">-</button>
                                        <span class="mx-2 produit-quantite">${quantite}</span>
                                        <button class="btn btn-secondary bouton-plus" data-id="${produit._id}">+</button>
                                    </div>
                                    <p class="prix-total-quantite ms-3">${prixTotal} €</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Ajout des gestionnaires d'événements pour les boutons "plus" et "moins"
                document.querySelector('.bouton-plus').addEventListener('click', () => modifierQuantite(produit._id, true));
                document.querySelector('.bouton-moins').addEventListener('click', () => modifierQuantite(produit._id, false));
            } else {
                injectJs.innerHTML = "<p>Produit sélectionné non trouvé.</p>";
            }
        } else {
            blocTitrePanier.innerHTML = "Votre panier est vide";
        }
    };

    const modifierQuantite = (id, augmenter) => {
        const index = produits.findIndex(p => p._id === id);
        if (index !== -1) {
            if (augmenter) {
                produits[index].quantite++;
            } else if (produits[index].quantite > 1) {
                produits[index].quantite--;
            }
            localStorage.setItem('produit', JSON.stringify(produits)); // Mise à jour du localStorage
            refreshPanierDisplay(); // Rafraîchissement de l'affichage
        }
    };

    refreshPanierDisplay(); // Initialisation de l'affichage du panier
});


