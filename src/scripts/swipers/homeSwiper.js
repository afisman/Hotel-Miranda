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
});

const imagesSwiper = new Swiper('.imagesSection__swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

document.onscroll = () => {
    const width = document.body.offsetWidth;
    if (width > 1000) {
        featuresSwiper.params.slidesPerView = 3
        featuresSwiper.params.grid.rows = 2
        featuresSwiper.params.grid.fill = "row"
        featuresSwiper.params.centeredSlides = false
        featuresSwiper.update()

        menuSwiper.params.slidesPerView = 2
        menuSwiper.params.slidesPerGroup = 6
        menuSwiper.params.grid.rows = 3
        menuSwiper.params.grid.fill = "row"
        menuSwiper.params.centeredSlides = false
        menuSwiper.update()

        imagesSwiper.params.slidesPerView = 3

        imagesSwiper.params.pagination.clickable = false
        imagesSwiper.update()
    } else {
        featuresSwiper.params.slidesPerView = 1
        featuresSwiper.params.grid.rows = 1
        featuresSwiper.params.grid.fill = "row"
        featuresSwiper.params.centeredSlides = true
        featuresSwiper.update()

        menuSwiper.params.slidesPerView = 1
        menuSwiper.params.slidesPerGroup = 1
        menuSwiper.params.grid.rows = 3
        menuSwiper.params.grid.fill = "row"
        menuSwiper.params.centeredSlides = true
        menuSwiper.update()

        imagesSwiper.params.slidesPerView = 1
        imagesSwiper.params.pagination.clickable = true

        imagesSwiper.update()
    }
}