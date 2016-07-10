function setCurrentSlide(index) {
    var slides = $('.carousel .carousel-slide');
    slides.removeClass('visible');
    $('.carousel').data('current-slide', index);
    $(slides[index]).addClass('visible');
}

function prevSlide() {
    var curSlide = $('.carousel').data('current-slide');
    if (curSlide > 0) {
        curSlide--;
    } else {
        curSlide = $('.carousel').data('slide-count') - 1;
    }
    setCurrentSlide(curSlide);
}

function nextSlide() {
    var curSlide = $('.carousel').data('current-slide');
    if (curSlide > ($('.carousel').data('slide-count') - 2)) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    setCurrentSlide(curSlide);
}

$(function () {
    var curSlide = 0;
    setCurrentSlide(curSlide);
    $('.carousel').data('current-slide', curSlide);
    $('.carousel').data('slide-count', $('.carousel .carousel-slide').length);
    $('.carousel .prev .arrow').on('click', prevSlide);
    $('.carousel .next .arrow').on('click', nextSlide);
});