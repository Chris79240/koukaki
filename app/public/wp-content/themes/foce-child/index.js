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

// Écoute le défilement sur la page pour déclencher des actions.
document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY; // La position actuelle du scroll
    var totalHeight = document.body.scrollHeight - window.innerHeight; // Hauteur totale de défilement possible
    var scrollRatio = scrollPosition / totalHeight; // Ratio de défilement actuel

    var distanceDeplacementPetitNuage = 1200; // Définit la distance maximale de déplacement pour le petit nuage.
    var distanceDeplacementGrosNuage = 1000; // Définit la distance maximale de déplacement pour le gros nuage.

    // Calcule le déplacement du petit nuage basé sur le ratio de défilement.
    var petitNuageMove = distanceDeplacementPetitNuage - (scrollRatio * distanceDeplacementPetitNuage);

    // Calcule le déplacement du gros nuage de la même manière.
    var grosNuageMove = distanceDeplacementGrosNuage - (scrollRatio * distanceDeplacementGrosNuage);

    var petitNuage = document.querySelector('.petit-nuage');// Sélectionne le petit nuage dans le DOM.
    var grosNuage = document.querySelector('.gros-nuage');// Sélectionne le gros nuage dans le DOM.

    if (petitNuage) {
        petitNuage.style.transform = `translateX(${petitNuageMove}px)`;// Applique le déplacement calculé au petit nuage.
    }
    if (grosNuage) {
        grosNuage.style.transform = `translateX(${grosNuageMove}px)`;// Applique le déplacement calculé au gros nuage.
    }
});


// Initialise AOS une fois que le contenu du DOM est complètement chargé.
document.addEventListener("DOMContentLoaded", function() {
    AOS.init();// Initialise Animate On Scroll (AOS) pour les animations au défilement.
});