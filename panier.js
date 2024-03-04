
document.addEventListener('DOMContentLoaded', () => {
    const blocTitrePanier = document.getElementById('blocTitrePanier');
    let produits = JSON.parse(localStorage.getItem('produit')) || [];
    const injectJs = document.getElementById('injectJs');

    const refreshPanierDisplay = () => {
        if (produits.length > 0) {
            const produit = produits.find(p => p.name && p.price);
            if (produit) {
                const imageUrl = produit.imageUrl || 'image/path/to/default.jpg';
                const quantite = produit.quantite || 1;
                const prixTotal = (produit.price / 100 * quantite).toFixed(2);

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
                                    <i class="fa-solid fa-trash-can ms-2" onclick="supprimerProduit('${produit._id}')"></i>
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

        // Code pour le formulaire
        const form = document.querySelector('#signup');
        const togglepassword = document.querySelector('#togglePassword');
        const nameEl = document.forms.formValidate.name;
        const firstnameEl = document.forms.formValidate.firstname;
        const emailEl = document.forms.formValidate.email;
        const townEL = document.forms.formValidate.town;
        const passwordEl = document.forms.formValidate.password;
        const confirmpasswordEl = document.forms.formValidate.confirmpassword;
        const adressEL = document.forms.formValidate.adress;

        togglepassword.addEventListener('click', function(){
            const type = passwordEl.getAttribute('type') === 'password' ? 'text' : 'password';
            this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
        });

        const isRequired = (value) => value.trim() !== '';

        const isBetween = (length, min, max) => length >= min && length <= max;

        const isNameValid = (name) => /^[a-zA-Z]+$/.test(name);

        const isValidEmail = (email) => /^(?!root@afpa\.fr$|afpa@afpa\.com$|deus@afpa\.org$|.*@yopmail\.com$)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

        const isPasswordValid = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password);

        const showError = (input, message) => {
            const formField = input.parentElement;
            formField.classList.remove('success');
            formField.classList.add('error');
            const errorEl = formField.querySelector('small');
            errorEl.textContent = message;
        }

        const showSuccess = (input) => {
            const formField = input.parentElement;
            formField.classList.remove('error');
            formField.classList.add('success');
            const errorEl = formField.querySelector('small');
            errorEl.textContent = "";
        }

        const checkfirstname = () => {
            const firstname = firstnameEl.value.trim();
            if (!isRequired(firstname)) {
                showError(firstnameEl, "Le prénom ne peut pas être vide");
            } else if (!isBetween(firstname.length, 2, 25)) {
                showError(firstnameEl, "Le prénom doit avoir entre 2 et 25 caractères");
            } else if (!isNameValid(firstname)) {
                showError(firstnameEl, "Le prénom ne peut contenir que des lettres");
            } else {
                showSuccess(firstnameEl);
            }
        }

        const checkname = () => {
            const name = nameEl.value.trim();
            if (!isRequired(name)) {
                showError(nameEl, "Le nom ne peut pas être vide");
            } else if (!isBetween(name.length, 2, 25)) {
                showError(nameEl, "Le nom doit avoir entre 2 et 25 caractères");
            } else if (!isNameValid(name)) {
                showError(nameEl, "Le nom ne peut contenir que des lettres");
            } else {
                showSuccess(nameEl);
            }
        }

        const checkemail = () => {
            const email = emailEl.value.trim();
            if (!isRequired(email)) {
                showError(emailEl, "L'email ne peut pas être vide");
            } else if (!isValidEmail(email)) {
                showError(emailEl, "L'email n'est pas valide");
            } else {
                showSuccess(emailEl);
            }
        }

        const checkpassword = () => {
            const password = passwordEl.value.trim();
            if (!isRequired(password)) {
                showError(passwordEl, "Le mot de passe ne peut pas être vide");
            } else if (!isPasswordValid(password)) {
                showError(passwordEl, "Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et un caractère spécial et doit avoir au moins 8 caractères");
            } else {
                showSuccess(passwordEl);
            }
        }

        const checkconfirmpassword = () => {
            const confirmpassword = confirmpasswordEl.value.trim();
            const password = passwordEl.value.trim();
            if (!isRequired(confirmpassword)) {
                showError(confirmpasswordEl, "La confirmation du mot de passe ne peut pas être vide");
            } else if (confirmpassword !== password) {
                showError(confirmpasswordEl, "Le mot de passe ne correspond pas");
            } else {
                showSuccess(confirmpasswordEl);
            }
        }

        const checktown = () => {
            const town = townEL.value.trim();
            if (!isRequired(town)) {
                showError(townEL, "La ville ne peut pas être vide");
            } else {
                showSuccess(townEL);
            }
        }

        const checkadress = () => {
            const adress = adressEL.value.trim();
            if (!isRequired(adress)) {
                showError(adressEL, "L'adresse ne peut pas être vide");
            } else {
                showSuccess(adressEL);
            }
        }

        // Ecouteurs d'événements pour la validation du formulaire

        nameEl.addEventListener('blur', checkname);
        firstnameEl.addEventListener('blur', checkfirstname);
        emailEl.addEventListener('blur', checkemail);
        passwordEl.addEventListener('blur', checkpassword);
        confirmpasswordEl.addEventListener('blur', checkconfirmpassword);
        townEL.addEventListener('blur', checktown);
        adressEL.addEventListener('blur', checkadress);
    };

    const modifierQuantite = (id, augmenter) => {
        const index = produits.findIndex(p => p._id === id);
        if (index !== -1) {
            if (augmenter) {
                produits[index].quantite++;
            } else if (produits[index].quantite > 1) {
                produits[index].quantite--;
            }
            localStorage.setItem('produit', JSON.stringify(produits));
            refreshPanierDisplay();
        }
    };

    const supprimerProduit = (id) => {
        produits = produits.filter(p => p._id !== id);
        localStorage.setItem('produit', JSON.stringify(produits));
        refreshPanierDisplay();
    };

    refreshPanierDisplay();
});

