$(document).ready(function() {
   $('.reviews__slide').slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    responsive: [
      {
         breakpoint: 1051,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
      }
    ],
   }); 
});