// let meubleData = []

// fetch('http://localhost:3000/api/furniture')
//     .then(response => response.json())
//     .then(data => {
//         meubleData = data
//         console.log(meubleData)
//     })

//     const meubleDisplay = async () => {
//        await fetchMeuble() 
//     }
    
//    document.getElementById('blocCard').innerHTML = meubleData.map((meuble) => `
//    <div id="card${meuble._id}" class="card col-12 col-md-6 col-lg-4 col-xl-3 my-3 mx-3">
//    <h3 class="titre-card">${meuble.name}</h3>
//    `)

//    meubleDisplay()

let meubleData = [];

// Fonction pour récupérer les données et mettre à jour l'interface utilisateur
const fetchMeublesAndUpdateUI = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/furniture');
        if (!response.ok) {
            throw new Error('Erreur réseau');
        }
        meubleData = await response.json();
        updateUI(); // Appel de la fonction pour mettre à jour l'UI une fois les données récupérées
    } catch (error) {
        console.error("Erreur lors de la récupération des meubles:", error);
    }
};

// Fonction pour mettre à jour l'interface utilisateur
const updateUI = () => {
    const blocCard = document.getElementById('blocCard');
    if (blocCard) {
        blocCard.innerHTML = meubleData.map((meuble) =>
            `<div id="card${meuble._id}" class="flex-around card col-12 col-md-6 col-lg-4 col-xl-3 my-3 mx-3">
                <h3 class="titre-card">${meuble.name .toUpperCase()}</h3>
                <img class="img-fluid" src="${meuble.imageUrl}" alt="photo de meuble ${meuble.name}"/>
                <div class="bouton-chene">CHÊNE</div>
                <p class="description-meuble">${meuble.description}</p>
                <button id="${meuble._id}" class="bouton-details">Voir</button>
                 <p>${(meuble.price / 100).toFixed(2).replace(/\.?0+$/, '')}€</p>


             </div>`
        ).join(''); // Utilisez join('') pour transformer le tableau en chaîne de caractères

        let boutons = document.querySelectorAll('.bouton-details');
        console.log(boutons);

        boutons.forEach(bouton => {
            bouton.addEventListener('click', () => {
               

                window.location.href = `produit.html?id=${bouton.id}`
            })
        })
    }
};

// Appel de la fonction pour démarrer le processus
fetchMeublesAndUpdateUI();