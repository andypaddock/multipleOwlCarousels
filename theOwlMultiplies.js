//  var owlRooms = $('.owl-carousel.rooms-carousel');
//  owlRooms.owlCarousel({
//    loop: true,
//    nav: false,
//    lazyLoad: true,
//    dots: false,
//    responsive: {
// 	 0: {
// 	   items: 1
// 	 },
// 	 600: {
// 	   items: 1
// 	 },
// 	 800: {
// 	   items: 1
// 	 },
// 	 1200: {
// 	   items: 1
// 	 }
//    },
//  });
var owlRooms = $(".owl-carousel").each(function(){
  $(this).owlCarousel({
    loop:true,
      nav:false,
      lazyLoad: true,
   dots: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });
});

 // Custom Navigation Events
 $(".owl-next").click(function(){$(this).closest('.room-gallery').find('.owl-carousel').trigger('next.owl.carousel');})
 $(".owl-prev").click(function(){$(this).closest('.room-gallery').find('.owl-carousel').trigger('prev.owl.carousel');})

//  $(".owl-next").click(function () {
//   owlRooms.trigger('next.owl.carousel');
//  });
//  $('.owl-prev').click(function () {
//   owlRooms.trigger('prev.owl.carousel');
//  });
