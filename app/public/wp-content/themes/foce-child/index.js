const burgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");

burgerButton.addEventListener("click", toggleNav);

function toggleNav() {
    burgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
}

// cherche un élément dans le document
//let ... = document.querySelector("..");

//***GESTION DU SWIPER SECTION PERSONNAGES***//
    // Initialisation de Swiper     
    const swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: "auto",
        pagination: ".swiper-pagination",
        coverflowEffect: {
            rotate: 40,
            stretch: 0,
            depth: 20,
            modifier: 1,
            slideShadows: false,
        },  
        slidesOffsetBefore:500,
    });