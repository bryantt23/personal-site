$(document).ready(function() {


  // for mystery music ********************************************************


  $(function(){
    $( "#accordion-mystery" ).accordion(
      {
        active: 0, heightStyle: "content",
        collapsible: true
      });

    });

    $("#mystery_music").on("click", function(){
      if($(this).text() == "Show Answer"){ // check button label
        // $(this).html("<span class='ui-button-text'>Hide Answer</span>");
        $(this).html("Hide Answer");
      }
      else {  // check button label
        // $(this).html("<span class='ui-button-text'>Show Answer</span>");
        $(this).html("Show Answer");
      }
    });


    $(".audioButton").on("click", function() {
      $(".audio-play")[0].currentTime = 0;
      return $(".audio-play")[0].play();
    });

    // $("#accordion").on("click", function(){
    //   $(this ).accordion();
    // });

    //  $(function() {
    //    $( "#accordion" ).accordion();
    //  });



    // <script>
    //  $(function() {
    //    $( "#accordion" ).accordion();
    //  });
    //  </script>



  });
