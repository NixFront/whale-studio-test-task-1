"use strict";

$(function () {
  /* header nav link animation */
  var parentAnimation = document.querySelectorAll('.hover-animation');
  parentAnimation.forEach(function (item) {
    item.onmouseenter = function () {
      this.classList.add('hover');
    };

    item.onmouseleave = function () {
      this.classList.remove('hover');
    };
  });
  /* slider */

  var $slider = $('.slider__container');
  var $control = $('.footer__slider--control');
  /* check current slide afterChange */

  $slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    if (i < 10) i = "0" + i;
    if (slick.slideCount < 10 && typeof slick.slideCount != "string") slick.slideCount = "0" + slick.slideCount;
    $control.find('.footer__slider--currentSlide').text(i);
    $control.find('.footer__slider--totatSlide').text(slick.slideCount);
  });
  /* init slider */

  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    fade: true,
    prevArrow: $('.footer__slider--prev'),
    nextArrow: $('.footer__slider--next'),
    appendArrows: ".footer__slider--control",
    arrows: true,
    dots: true,
    infinite: true,
    appendDots: ".footer__slider--line"
  });
  /* open fullscreen-menu */

  $('.toggle-menu').click(function () {
    $('.fullscreen-menu').toggleClass('open');
  });
  /* open header search form */

  $('.open-search').click(function () {
    $(this).parents('.header__search').addClass('open');
    $('.header__nav').addClass('hide');
  });
  /* close header search form */

  $('.close-search').click(function () {
    $(this).parents('.header__search').removeClass('open');
    setTimeout(function () {
      $('.header__nav').removeClass('hide');
    }, 300);
  });
});