
document.addEventListener('DOMContentLoaded', () => {
    let meubleData = [];
    
    // Fonction pour récupérer les données des meubles et mettre à jour l'interface utilisateur
    const fetchMeublesAndUpdateUI = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/furniture');
            if (!response.ok) {
                throw new Error('Erreur réseau');
            }
            meubleData = await response.json();
            updateUI();
            updateCartQuantityUI();
        } catch (error) {
            console.error("Erreur lors de la récupération des meubles:", error);
        }
    };
    
    // Fonction pour mettre à jour l'interface utilisateur avec les données des meubles
    const updateUI = () => {
        const blocCard = document.getElementById('blocCard');
        if (blocCard) {
            blocCard.innerHTML = meubleData.map(meuble =>
                `<div id="card${meuble._id}" class="flex-around card col-12 col-md-6 col-lg-4 col-xl-3 my-3 mx-3">
                    <h3 class="titre-card">${meuble.name.toUpperCase()}</h3>
                    <img class="img-fluid" src="${meuble.imageUrl}" alt="photo de meuble ${meuble.name}"/>
                    <div class="bouton-chene">CHÊNE</div>
                    <p class="description-meuble">${meuble.description}</p>
                    <button id="${meuble._id}" class="bouton-details">Voir</button>
                    <p>${(meuble.price / 100).toFixed(2).replace(/\.?0+$/, '')}€</p>
                 </div>`
            ).join('');
    
            document.querySelectorAll('.bouton-details').forEach(bouton => {
                bouton.addEventListener('click', () => {
                    window.location.href = `produit.html?id=${bouton.id}`;
                });
            });
        }
    };
    
    // Fonction pour mettre à jour l'affichage de la quantité totale des produits dans le panier
    const updateCartQuantityUI = () => {
        const produits = JSON.parse(localStorage.getItem('produit')) || [];
        const totalQuantite = produits.reduce((total, produit) => total + produit.quantite, 0);
    
        const cartQuantityElement = document.getElementById('cartQuantity');
        if (cartQuantityElement) {
            cartQuantityElement.textContent = totalQuantite;
        }
    };
    
    fetchMeublesAndUpdateUI();
});
