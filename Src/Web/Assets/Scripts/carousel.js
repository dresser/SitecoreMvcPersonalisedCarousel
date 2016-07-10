function prevSlide(data) {
    var slides = $('.carousel .carousel-slide');
    slides.removeClass('visible');
    var curSlide = $('.carousel').data('current-slide');
    if (curSlide > 0) {
        curSlide--;
    } else {
        curSlide = $('.carousel').data('slide-count') - 1;
    }
    $('.carousel').data('current-slide', curSlide);
    $(slides[curSlide]).addClass('visible');
}

function nextSlide(data) {
    var slides = $('.carousel .carousel-slide');
    var slideCount = $('.carousel').data('slide-count');
    slides.removeClass('visible');
    var curSlide = $('.carousel').data('current-slide');
    if (curSlide > (slideCount - 2)) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    $('.carousel').data('current-slide', curSlide);
    $(slides[curSlide]).addClass('visible');
}

function isPageEditorMode() {
    if (typeof Sitecore == "undefined") {
        return false;
    }
    if (typeof Sitecore.PageModes == "undefined" || Sitecore.PageModes == null) {
        return false;
    }
    return Sitecore.PageModes.PageEditor != null;
}

$(function () {
    $('.carousel > .carousel-slide:first-child').addClass('visible');
    $('.carousel').data('slide-count', $('.carousel > .carousel-slide').length);
    $('.carousel').data('current-slide', 0);
    $('.carousel .prev .arrow').on('click', prevSlide);
    $('.carousel .next .arrow').on('click', nextSlide);
    if (isPageEditorMode() == false) {
        //window.setInterval(changeSlide, 3000);
    } else {
        $('.carousel').addClass("edit");
    }
});