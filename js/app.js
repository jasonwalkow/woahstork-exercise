$(document).ready(function(){
  $('.item-slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.items-slide').slick();

  $('.products-slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
