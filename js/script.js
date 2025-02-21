var swiper1 = new Swiper(".customSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,  // Tiempo en milisegundos para cada slide (3 segundos)
        disableOnInteraction: false,  // Mantiene el autoplay incluso cuando se interactúa con los botones
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     640: { // Para pantallas mayores a 640px
    //         slidesPerView: 2,     // Mostrar 2 diapositivas
    //         spaceBetween: 20,     // Espacio de 20px entre las diapositivas
    //     },
    //     768: { // Para pantallas mayores a 768px
    //         slidesPerView: 3,     // Mostrar 3 diapositivas
    //         spaceBetween: 30,     // Espacio de 30px entre las diapositivas
    //     },
    //     1024: { // Para pantallas mayores a 1024px
    //         slidesPerView: 4,     // Mostrar 4 diapositivas
    //         spaceBetween: 40,     // Espacio de 40px entre las diapositivas
    //     },
    // }
});

document.addEventListener('DOMContentLoaded', function () {
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');

// Evento para el botón de menú
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active'); // Alterna la clase 'active' en el navbar
    // search-form.classList.remove('active'); // Remueve la clase 'active' en el formulario de búsqueda
}

// // Evento para el botón de búsqueda
// document.querySelector('#search-btn').onclick = () => {
//     search-form.classList.toggle('active'); // Alterna la clase 'active' en el formulario de búsqueda
// }

// Evento para el scroll de la ventana
window.onscroll = () => {
    navbar.classList.remove('active'); // Remueve la clase 'active' en el navbar
   
};
});

