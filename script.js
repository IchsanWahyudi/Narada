$(document).ready(function(){
  $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
  });

  $("#slide").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    nav: true,
    animateIn: true,
    lazyContent: true,
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,2]
  });

  $( ".owl-prev").html('<i class="fa fa-angle-left"></i>');
  $( ".owl-next").html('<i class="fa fa-angle-right"></i>');
})
