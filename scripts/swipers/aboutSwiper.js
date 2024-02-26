const facilitiesSwiper = new Swiper('.AboutFacilities__swiper', {
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
            grid: {
                rows: 3,
                fill: 'row'
            }
        }
    },
});

const counterSwiper = new Swiper('.AboutCounter__swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1000: {
            slidesPerView: 2,
        }
    }
});

document.onscroll = () => {
    const width = document.body.offsetWidth;
    if (width >= 1000) {
        facilitiesSwiper.params.centeredSlides = false;
        facilitiesSwiper.update();

        counterSwiper.params.centeredSlides = false;
        counterSwiper.update();
    } else {
        facilitiesSwiper.params.centeredSlides = true;
        facilitiesSwiper.update();

        counterSwiper.params.centeredSlides = true;
        counterSwiper.update();
    }
};