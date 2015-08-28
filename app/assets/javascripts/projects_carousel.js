$(document).ready(function() {
  // owl carousel ********************************************************
  $("#jumb3").owlCarousel({

    items : 2, //10 items above 1000px browser width

    autoPlay: 8000,
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 300,
    singleItem:true

    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

  });


  setTimeout(function(){
    $('#notice_wrapper').fadeOut("slow", function(){
      $(this).remove();
    })
  }, 4500);


});
