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

});

document.onscroll = () => {
    const width = document.body.offsetWidth;
    if (width > 1000) {
        roomsSwiper.params.slidesPerView = 3
        roomsSwiper.params.grid.rows = 2
        roomsSwiper.params.grid.fill = "row"
        roomsSwiper.params.centeredSlides = false
        roomsSwiper.update()


    } else {
        roomsSwiper.params.slidesPerView = 1
        roomsSwiper.params.grid.rows = 12
        roomsSwiper.params.grid.fill = "row"
        roomsSwiper.params.centeredSlides = true
        roomsSwiper.update()
    }
}