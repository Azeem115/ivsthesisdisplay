var slickCarousel = $('.slider-vertical');
slickCarousel.slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  vertical: true,
  verticalSwiping: true,
  dots: false,
  centerPadding: '50px',
  arrows: true,
  prevArrow:
    '<span><img class="material-symbols-outlined" src="img/arrow_circle_up.svg" alt="" srcset="" /></span>',
  nextArrow:
    '<span><img class="material-symbols-outlined" src="img/arrow_circle_down.svg" alt="" srcset="" /></span>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

//mouse wheel
slickCarousel.mousewheel(function (e) {
  e.preventDefault();
  if (e.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
});

/** Student Details Page Overlay **/

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

/** Responsive Menu **/
function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'main-navigation') {
    x.className += ' responsive';
  } else {
    x.className = 'main-navigation';
  }
}
