// Sélectionne le bouton du menu burger et l'élément de navigation dans le DOM.
const burgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav");

//Ajoute un écouteur d'événement sur le bouton du menu burger pour déclencher la fonction toggleNav lors d'un clic.
burgerButton.addEventListener("click", toggleNav);

function toggleNav() {
    // La fonction toggleNav ajoute ou supprime la classe 'active' du bouton burger et de l'élément de navigation,
    // ce qui est généralement utilisé pour contrôler leur affichage ou leur style en CSS.
    burgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
}


// ******************* GESTION DU MENU BURGER ******************* //
    // Ajout d'une classe pour gérer l'ouverture et fermeture du menu
    // Ajout d'un écouteur d'événement sur un élément ayant la classe 'toggle',
    // pour ajouter ou supprimer la classe 'open' du corps du document.
    // Cela pourrait être utilisé pour afficher ou masquer un menu ou d'autres éléments interactifs en CSS.
    let toggle = document.querySelector(".toggle");
    let body = document.querySelector("body");
    toggle.addEventListener('click', function () {
        body.classList.toggle('open');
    });

/*******************************GESTION DU SWIPER "PERSONNAGE"***********************************/
// Initialise une instance de Swiper pour un élément avec la classe 'mySwiper'.
// Ce carrousel est configuré avec l'effet "coverflow", qui simule un effet 3D lors du défilement des slides.
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true, // Permet de modifier le curseur en mode "grab" pour indiquer qu'on peut faire glisser le contenu.
    centeredSlides: false, // Désactive le centrage automatique des slides.
    slidesPerView: "auto", // Détermine le nombre de slides à afficher en fonction de la largeur de l'élément.
    pagination: ".swiper-pagination", // Sélectionne l'élément de pagination pour le carrousel.
    coverflowEffect: {
        rotate: 40, // Angle de rotation des slides.
        stretch: 0, // Étirement des slides sur l'axe horizontal.
        depth: 20, // Profondeur de l'effet 3D.
        modifier: 1, // Multiplie les effets de rotation et de profondeur.
        slideShadows: false, // Désactive les ombres des slides.
    },
    slidesOffsetBefore:500, // Ajoute un décalage avant le premier slide.
});

/*************************************GESTION DES NUAGES***************************************/

// Ajoute un écouteur d'événement sur le document pour le défilement
document.addEventListener('scroll', function() {
    // Sélectionne l'élément avec la classe 'petit-nuage'
    var petitNuage = document.querySelector('.petit-nuage');
    // Sélectionne l'élément avec l'ID 'place' et la classe 'gros-nuage'
    var grosNuage = document.querySelector('#place .gros-nuage');
    // Stocke la hauteur de la fenêtre du navigateur dans la variable 'windowHeight'
    var windowHeight = window.innerHeight;
    
    // Obtient la distance du haut du 'petitNuage' par rapport au haut du viewport
    var petitNuageTop = petitNuage.getBoundingClientRect().top;
    // Obtient la distance du haut du 'grosNuage' par rapport au haut du viewport
    var grosNuageTop = grosNuage.getBoundingClientRect().top;
    
    // Vérifie si 'petitNuage' est entré dans la fenêtre visible (viewport)
    if (petitNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'petitNuage'
        petitNuage.classList.add('animate');
    }
    
    // Vérifie si 'grosNuage' est entré dans la fenêtre visible (viewport)
    if (grosNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'grosNuage'
        grosNuage.classList.add('animate');
    }
});
// Ajoute un écouteur d'événement sur le document pour le défilement
document.addEventListener('scroll', function() {
    // Sélectionne l'élément avec la classe 'petit-nuage'
    var petitNuage = document.querySelector('.petit-nuage');
    // Sélectionne l'élément avec l'ID 'place' et la classe 'gros-nuage'
    var grosNuage = document.querySelector('#place .gros-nuage');
    // Stocke la hauteur de la fenêtre du navigateur dans la variable 'windowHeight'
    var windowHeight = window.innerHeight;
    
    // Obtient la distance du haut du 'petitNuage' par rapport au haut du viewport
    var petitNuageTop = petitNuage.getBoundingClientRect().top;
    // Obtient la distance du haut du 'grosNuage' par rapport au haut du viewport
    var grosNuageTop = grosNuage.getBoundingClientRect().top;
    
    // Vérifie si 'petitNuage' est entré dans la fenêtre visible (viewport)
    if (petitNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'petitNuage'
        petitNuage.classList.add('animate');
    }
    
    // Vérifie si 'grosNuage' est entré dans la fenêtre visible (viewport)
    if (grosNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'grosNuage'
        grosNuage.classList.add('animate');
    }
});
// Ajoute un écouteur d'événement sur le document pour le défilement
document.addEventListener('scroll', function() {
    // Sélectionne l'élément avec la classe 'petit-nuage'
    var petitNuage = document.querySelector('.petit-nuage');
    // Sélectionne l'élément avec l'ID 'place' et la classe 'gros-nuage'
    var grosNuage = document.querySelector('#place .gros-nuage');
    // Stocke la hauteur de la fenêtre du navigateur dans la variable 'windowHeight'
    var windowHeight = window.innerHeight;
    
    // Obtient la distance du haut du 'petitNuage' par rapport au haut du viewport
    var petitNuageTop = petitNuage.getBoundingClientRect().top;
    // Obtient la distance du haut du 'grosNuage' par rapport au haut du viewport
    var grosNuageTop = grosNuage.getBoundingClientRect().top;
    
    // Vérifie si 'petitNuage' est entré dans la fenêtre visible (viewport)
    if (petitNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'petitNuage'
        petitNuage.classList.add('animate');
    }
    
    // Vérifie si 'grosNuage' est entré dans la fenêtre visible (viewport)
    if (grosNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'grosNuage'
        grosNuage.classList.add('animate');
    }
});
// Ajoute un écouteur d'événement sur le document pour le défilement
document.addEventListener('scroll', function() {
    // Sélectionne l'élément avec la classe 'petit-nuage'
    var petitNuage = document.querySelector('.petit-nuage');
    // Sélectionne l'élément avec l'ID 'place' et la classe 'gros-nuage'
    var grosNuage = document.querySelector('#place .gros-nuage');
    // Stocke la hauteur de la fenêtre du navigateur dans la variable 'windowHeight'
    var windowHeight = window.innerHeight;
    
    // Obtient la distance du haut du 'petitNuage' par rapport au haut du viewport
    var petitNuageTop = petitNuage.getBoundingClientRect().top;
    // Obtient la distance du haut du 'grosNuage' par rapport au haut du viewport
    var grosNuageTop = grosNuage.getBoundingClientRect().top;
    
    // Vérifie si 'petitNuage' est entré dans la fenêtre visible (viewport)
    if (petitNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'petitNuage'
        petitNuage.classList.add('animate');
    }
    
    // Vérifie si 'grosNuage' est entré dans la fenêtre visible (viewport)
    if (grosNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'grosNuage'
        grosNuage.classList.add('animate');
    }
});
// Ajoute un écouteur d'événement sur le document pour le défilement
document.addEventListener('scroll', function() {
    // Sélectionne l'élément avec la classe 'petit-nuage'
    var petitNuage = document.querySelector('.petit-nuage');
    // Sélectionne l'élément avec l'ID 'place' et la classe 'gros-nuage'
    var grosNuage = document.querySelector('#place .gros-nuage');
    // Stocke la hauteur de la fenêtre du navigateur dans la variable 'windowHeight'
    var windowHeight = window.innerHeight;
    
    // Obtient la distance du haut du 'petitNuage' par rapport au haut du viewport
    var petitNuageTop = petitNuage.getBoundingClientRect().top;
    // Obtient la distance du haut du 'grosNuage' par rapport au haut du viewport
    var grosNuageTop = grosNuage.getBoundingClientRect().top;
    
    // Vérifie si 'petitNuage' est entré dans la fenêtre visible (viewport)
    if (petitNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'petitNuage'
        petitNuage.classList.add('animate');
    }
    
    // Vérifie si 'grosNuage' est entré dans la fenêtre visible (viewport)
    if (grosNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'grosNuage'
        grosNuage.classList.add('animate');
    }
});
// Ajoute un écouteur d'événement sur le document pour le défilement
document.addEventListener('scroll', function() {
    // Sélectionne l'élément avec la classe 'petit-nuage'
    var petitNuage = document.querySelector('.petit-nuage');
    // Sélectionne l'élément avec l'ID 'place' et la classe 'gros-nuage'
    var grosNuage = document.querySelector('#place .gros-nuage');
    // Stocke la hauteur de la fenêtre du navigateur dans la variable 'windowHeight'
    var windowHeight = window.innerHeight;
    
    // Obtient la distance du haut du 'petitNuage' par rapport au haut du viewport
    var petitNuageTop = petitNuage.getBoundingClientRect().top;
    // Obtient la distance du haut du 'grosNuage' par rapport au haut du viewport
    var grosNuageTop = grosNuage.getBoundingClientRect().top;
    
    // Vérifie si 'petitNuage' est entré dans la fenêtre visible (viewport)
    if (petitNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'petitNuage'
        petitNuage.classList.add('animate');
    }
    
    // Vérifie si 'grosNuage' est entré dans la fenêtre visible (viewport)
    if (grosNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'grosNuage'
        grosNuage.classList.add('animate');
    }
});
// Ajoute un écouteur d'événement sur le document pour le défilement
document.addEventListener('scroll', function() {
    // Sélectionne l'élément avec la classe 'petit-nuage'
    var petitNuage = document.querySelector('.petit-nuage');
    // Sélectionne l'élément avec l'ID 'place' et la classe 'gros-nuage'
    var grosNuage = document.querySelector('#place .gros-nuage');
    // Stocke la hauteur de la fenêtre du navigateur dans la variable 'windowHeight'
    var windowHeight = window.innerHeight;
    
    // Obtient la distance du haut du 'petitNuage' par rapport au haut du viewport
    var petitNuageTop = petitNuage.getBoundingClientRect().top;
    // Obtient la distance du haut du 'grosNuage' par rapport au haut du viewport
    var grosNuageTop = grosNuage.getBoundingClientRect().top;
    
    // Vérifie si 'petitNuage' est entré dans la fenêtre visible (viewport)
    if (petitNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'petitNuage'
        petitNuage.classList.add('animate');
    }
    
    // Vérifie si 'grosNuage' est entré dans la fenêtre visible (viewport)
    if (grosNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'grosNuage'
        grosNuage.classList.add('animate');
    }
});
// Ajoute un écouteur d'événement sur le document pour le défilement
document.addEventListener('scroll', function() {
    // Sélectionne l'élément avec la classe 'petit-nuage'
    var petitNuage = document.querySelector('.petit-nuage');
    // Sélectionne l'élément avec l'ID 'place' et la classe 'gros-nuage'
    var grosNuage = document.querySelector('#place .gros-nuage');
    // Stocke la hauteur de la fenêtre du navigateur dans la variable 'windowHeight'
    var windowHeight = window.innerHeight;
    
    // Obtient la distance du haut du 'petitNuage' par rapport au haut du viewport
    var petitNuageTop = petitNuage.getBoundingClientRect().top;
    // Obtient la distance du haut du 'grosNuage' par rapport au haut du viewport
    var grosNuageTop = grosNuage.getBoundingClientRect().top;
    
    // Vérifie si 'petitNuage' est entré dans la fenêtre visible (viewport)
    if (petitNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'petitNuage'
        petitNuage.classList.add('animate');
    }
    
    // Vérifie si 'grosNuage' est entré dans la fenêtre visible (viewport)
    if (grosNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'grosNuage'
        grosNuage.classList.add('animate');
    }
});
// Ajoute un écouteur d'événement sur le document pour le défilement
document.addEventListener('scroll', function() {
    // Sélectionne l'élément avec la classe 'petit-nuage'
    var petitNuage = document.querySelector('.petit-nuage');
    // Sélectionne l'élément avec l'ID 'place' et la classe 'gros-nuage'
    var grosNuage = document.querySelector('#place .gros-nuage');
    // Stocke la hauteur de la fenêtre du navigateur dans la variable 'windowHeight'
    var windowHeight = window.innerHeight;
    
    // Obtient la distance du haut du 'petitNuage' par rapport au haut du viewport
    var petitNuageTop = petitNuage.getBoundingClientRect().top;
    // Obtient la distance du haut du 'grosNuage' par rapport au haut du viewport
    var grosNuageTop = grosNuage.getBoundingClientRect().top;
    
    // Vérifie si 'petitNuage' est entré dans la fenêtre visible (viewport)
    if (petitNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'petitNuage'
        petitNuage.classList.add('animate');
    }
    
    // Vérifie si 'grosNuage' est entré dans la fenêtre visible (viewport)
    if (grosNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'grosNuage'
        grosNuage.classList.add('animate');
    }
});
// Ajoute un écouteur d'événement sur le document pour le défilement
document.addEventListener('scroll', function() {
    // Sélectionne l'élément avec la classe 'petit-nuage'
    var petitNuage = document.querySelector('.petit-nuage');
    // Sélectionne l'élément avec l'ID 'place' et la classe 'gros-nuage'
    var grosNuage = document.querySelector('#place .gros-nuage');
    // Stocke la hauteur de la fenêtre du navigateur dans la variable 'windowHeight'
    var windowHeight = window.innerHeight;
    
    // Obtient la distance du haut du 'petitNuage' par rapport au haut du viewport
    var petitNuageTop = petitNuage.getBoundingClientRect().top;
    // Obtient la distance du haut du 'grosNuage' par rapport au haut du viewport
    var grosNuageTop = grosNuage.getBoundingClientRect().top;
    
    // Vérifie si 'petitNuage' est entré dans la fenêtre visible (viewport)
    if (petitNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'petitNuage'
        petitNuage.classList.add('animate');
    }
    
    // Vérifie si 'grosNuage' est entré dans la fenêtre visible (viewport)
    if (grosNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'grosNuage'
        grosNuage.classList.add('animate');
    }
});
// Ajoute un écouteur d'événement sur le document pour le défilement
document.addEventListener('scroll', function() {
    // Sélectionne l'élément avec la classe 'petit-nuage'
    var petitNuage = document.querySelector('.petit-nuage');
    // Sélectionne l'élément avec l'ID 'place' et la classe 'gros-nuage'
    var grosNuage = document.querySelector('#place .gros-nuage');
    // Stocke la hauteur de la fenêtre du navigateur dans la variable 'windowHeight'
    var windowHeight = window.innerHeight;
    
    // Obtient la distance du haut du 'petitNuage' par rapport au haut du viewport
    var petitNuageTop = petitNuage.getBoundingClientRect().top;
    // Obtient la distance du haut du 'grosNuage' par rapport au haut du viewport
    var grosNuageTop = grosNuage.getBoundingClientRect().top;
    
    // Vérifie si 'petitNuage' est entré dans la fenêtre visible (viewport)
    if (petitNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'petitNuage'
        petitNuage.classList.add('animate');
    }
    
    // Vérifie si 'grosNuage' est entré dans la fenêtre visible (viewport)
    if (grosNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'grosNuage'
        grosNuage.classList.add('animate');
    }
});
// Ajoute un écouteur d'événement sur le document pour le défilement
document.addEventListener('scroll', function() {
    // Sélectionne l'élément avec la classe 'petit-nuage'
    var petitNuage = document.querySelector('.petit-nuage');
    // Sélectionne l'élément avec l'ID 'place' et la classe 'gros-nuage'
    var grosNuage = document.querySelector('#place .gros-nuage');
    // Stocke la hauteur de la fenêtre du navigateur dans la variable 'windowHeight'
    var windowHeight = window.innerHeight;
    
    // Obtient la distance du haut du 'petitNuage' par rapport au haut du viewport
    var petitNuageTop = petitNuage.getBoundingClientRect().top;
    // Obtient la distance du haut du 'grosNuage' par rapport au haut du viewport
    var grosNuageTop = grosNuage.getBoundingClientRect().top;
    
    // Vérifie si 'petitNuage' est entré dans la fenêtre visible (viewport)
    if (petitNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'petitNuage'
        petitNuage.classList.add('animate');
    }
    
    // Vérifie si 'grosNuage' est entré dans la fenêtre visible (viewport)
    if (grosNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'grosNuage'
        grosNuage.classList.add('animate');
    }
});
// Ajoute un écouteur d'événement sur le document pour le défilement
document.addEventListener('scroll', function() {
    // Sélectionne l'élément avec la classe 'petit-nuage'
    var petitNuage = document.querySelector('.petit-nuage');
    // Sélectionne l'élément avec l'ID 'place' et la classe 'gros-nuage'
    var grosNuage = document.querySelector('#place .gros-nuage');
    // Stocke la hauteur de la fenêtre du navigateur dans la variable 'windowHeight'
    var windowHeight = window.innerHeight;
    
    // Obtient la distance du haut du 'petitNuage' par rapport au haut du viewport
    var petitNuageTop = petitNuage.getBoundingClientRect().top;
    // Obtient la distance du haut du 'grosNuage' par rapport au haut du viewport
    var grosNuageTop = grosNuage.getBoundingClientRect().top;
    
    // Vérifie si 'petitNuage' est entré dans la fenêtre visible (viewport)
    if (petitNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'petitNuage'
        petitNuage.classList.add('animate');
    }
    
    // Vérifie si 'grosNuage' est entré dans la fenêtre visible (viewport)
    if (grosNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'grosNuage'
        grosNuage.classList.add('animate');
    }
});
// Ajoute un écouteur d'événement sur le document pour le défilement
document.addEventListener('scroll', function() {
    // Sélectionne l'élément avec la classe 'petit-nuage'
    var petitNuage = document.querySelector('.petit-nuage');
    // Sélectionne l'élément avec l'ID 'place' et la classe 'gros-nuage'
    var grosNuage = document.querySelector('#place .gros-nuage');
    // Stocke la hauteur de la fenêtre du navigateur dans la variable 'windowHeight'
    var windowHeight = window.innerHeight;
    
    // Obtient la distance du haut du 'petitNuage' par rapport au haut du viewport
    var petitNuageTop = petitNuage.getBoundingClientRect().top;
    // Obtient la distance du haut du 'grosNuage' par rapport au haut du viewport
    var grosNuageTop = grosNuage.getBoundingClientRect().top;
    
    // Vérifie si 'petitNuage' est entré dans la fenêtre visible (viewport)
    if (petitNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'petitNuage'
        petitNuage.classList.add('animate');
    }
    
    // Vérifie si 'grosNuage' est entré dans la fenêtre visible (viewport)
    if (grosNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'grosNuage'
        grosNuage.classList.add('animate');
    }
});
// Ajoute un écouteur d'événement sur le document pour le défilement
document.addEventListener('scroll', function() {
    // Sélectionne l'élément avec la classe 'petit-nuage'
    var petitNuage = document.querySelector('.petit-nuage');
    // Sélectionne l'élément avec l'ID 'place' et la classe 'gros-nuage'
    var grosNuage = document.querySelector('#place .gros-nuage');
    // Stocke la hauteur de la fenêtre du navigateur dans la variable 'windowHeight'
    var windowHeight = window.innerHeight;
    
    // Obtient la distance du haut du 'petitNuage' par rapport au haut du viewport
    var petitNuageTop = petitNuage.getBoundingClientRect().top;
    // Obtient la distance du haut du 'grosNuage' par rapport au haut du viewport
    var grosNuageTop = grosNuage.getBoundingClientRect().top;
    
    // Vérifie si 'petitNuage' est entré dans la fenêtre visible (viewport)
    if (petitNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'petitNuage'
        petitNuage.classList.add('animate');
    }
    
    // Vérifie si 'grosNuage' est entré dans la fenêtre visible (viewport)
    if (grosNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'grosNuage'
        grosNuage.classList.add('animate');
    }
});
// Ajoute un écouteur d'événement sur le document pour le défilement
document.addEventListener('scroll', function() {
    // Sélectionne l'élément avec la classe 'petit-nuage'
    var petitNuage = document.querySelector('.petit-nuage');
    // Sélectionne l'élément avec l'ID 'place' et la classe 'gros-nuage'
    var grosNuage = document.querySelector('#place .gros-nuage');
    // Stocke la hauteur de la fenêtre du navigateur dans la variable 'windowHeight'
    var windowHeight = window.innerHeight;
    
    // Obtient la distance du haut du 'petitNuage' par rapport au haut du viewport
    var petitNuageTop = petitNuage.getBoundingClientRect().top;
    // Obtient la distance du haut du 'grosNuage' par rapport au haut du viewport
    var grosNuageTop = grosNuage.getBoundingClientRect().top;
    
    // Vérifie si 'petitNuage' est entré dans la fenêtre visible (viewport)
    if (petitNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'petitNuage'
        petitNuage.classList.add('animate');
    }
    
    // Vérifie si 'grosNuage' est entré dans la fenêtre visible (viewport)
    if (grosNuageTop < windowHeight) {
        // Si oui, ajoute la classe 'animate' à 'grosNuage'
        grosNuage.classList.add('animate');
    }
});