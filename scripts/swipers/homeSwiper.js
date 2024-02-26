const swiper = new Swiper('.roomSection__swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },

});

const featuresSwiper = new Swiper('.featuresSection__swiper', {
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
                rows: 2,
                fill: 'rows'
            }
        }
    },
});


const menuSwiper = new Swiper('.foodSection__body__swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
        nextEl: ".buttons-menu__next",
        prevEl: ".buttons-menu__prev",
        lockClass: '.swiper-button-lock',
    },
    grid: {
        rows: 3,
        fill: "row",
    },
    breakpoints: {
        1000: {
            slidesPerView: 2,
            slidesPerGroup: 6,
            grid: {
                rows: 3,
                fill: 'rows'
            }
        }
    },
});

const imagesSwiper = new Swiper('.imagesSection__swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1000: {
            slidesPerView: 3,
        }
    },
});

document.onscroll = () => {
    const width = document.body.offsetWidth;
    if (width >= 1000) {

        swiper.params.centeredSlides = false;
        swiper.update()

        featuresSwiper.params.centeredSlides = false
        featuresSwiper.update()

        menuSwiper.params.centeredSlides = false
        menuSwiper.update()

        imagesSwiper.params.pagination.clickable = false
        imagesSwiper.update()
    } else {

        swiper.params.centeredSlides = false;
        swiper.update()

        featuresSwiper.params.centeredSlides = true
        featuresSwiper.update()

        menuSwiper.params.centeredSlides = true
        menuSwiper.update()

        imagesSwiper.params.pagination.clickable = true
        imagesSwiper.update()
    }
}