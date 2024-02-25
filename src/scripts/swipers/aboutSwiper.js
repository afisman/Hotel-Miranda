const facilitiesSwiper = new Swiper('.AboutFacilities__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1000: {
            slidesPerView: 3,
            grid: {
                rows: 2,
                fill: 'rows'
            }
        }
    },
});

const counterSwiper = new Swiper('.AboutCounter__swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1000: {
            slidesPerView: 2,
        }
    }
})

document.onscroll = () => {
    const width = document.body.offsetWidth;
    if (width > 1000) {
        facilitiesSwiper.params.centeredSlides = false
        facilitiesSwiper.update()
    } else {
        facilitiesSwiper.params.centeredSlides = true
        facilitiesSwiper.update()
    }
}