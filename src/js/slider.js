const slider = $('.shop__list').bxSlider({
    pager: false,
    controls:false
});

$('.shop__btn_left').click(event => {
    event.preventDefault();
    slider.goToPrevSlide();
});

$('.shop__btn_right').click(event => {
    event.preventDefault();
    slider.goToNextSlide();
});