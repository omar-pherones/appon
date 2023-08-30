$(document).ready(function(){
  $('.screenshort-images').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    swipeToSlide:true,
  cssEase: 'linear',

  });



  
new VenoBox({
  selector: '.video-play-button',
  spinner:'fold',
});

});
