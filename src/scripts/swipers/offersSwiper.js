const offersSwiper = new Swiper('.OffersPopular__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        1000: {
            slidesPerView: 3,
        }
    }

});

document.onscroll = () => {
    const width = document.body.offsetWidth;
    if (width > 1000) {
        offersSwiper.params.centeredSlides = false
        offersSwiper.update()
    } else {
        offersSwiper.params.centeredSlides = true
        offersSwiper.update()
    }
}