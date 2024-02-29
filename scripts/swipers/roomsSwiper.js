const roomsSwiper = new Swiper('.RoomsGridSection__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    },
    grid: {
        rows: 12,
        fill: "row",
    },
    breakpoints: {
        1000: {
            slidesPerView: 3,
            grid: {
                rows: 4,
                fill: 'row'
            },
            centeredSlides: true
        }
    }
});


window.onload = function () {
    const width = document.body.offsetWidth;
    if (width >= 1000) {
        roomsSwiper.params.centeredSlides = false
        roomsSwiper.update()
    } else {
        roomsSwiper.params.centeredSlides = true
        roomsSwiper.update()
    }
}
