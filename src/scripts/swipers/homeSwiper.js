const swiper = new Swiper('.roomSection__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    cssMode: true,
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    mousewheel: true,
    keyboard: true,
});

const featuresSwiper = new Swiper('.featuresSection__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

document.onscroll = () => {
    const width = document.body.offsetWidth;
    if (width > 1000) {
        featuresSwiper.params.slidesPerView = 3
        featuresSwiper.params.grid.rows = 2
        featuresSwiper.params.grid.fill = "row"
        featuresSwiper.params.centeredSlides = false
        featuresSwiper.update()


    }
}