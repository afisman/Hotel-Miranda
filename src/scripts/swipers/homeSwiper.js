const swiper = new Swiper('.roomSection__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    cssMode: true,
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    // breakpoints: {
    //     1000: {
    //         slidesPerView: 3,
    //     },
    // },
    mousewheel: true,
    keyboard: true,
});