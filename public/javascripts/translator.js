$(document).ready(function() {



  var WEBSITE_ADDRESS = "https://translate.yandex.net/api/v1.5/tr.json/translate?";
  var API_TRANSLATION_KEY = "key=trnsl.1.1.20150223T123008Z.b011910a62c9313a.b80623ee865a31ba17519a2073b6708b1d1226b3";




  // http://stackoverflow.com/questions/18160342/jquery-how-to-trigger-click-event-on-pressing-enter-key
  //press enter in text area..
  $('#ingredient_name').keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
    {
      $('#searchForRecipesButton').click();
      return false;
    }
  });

  // use jQuery to select the button
  // "listen" for when the button is clicked
  $("#searchForTranslationButton").click(function(){

    // create a variable
    // select the input using jQuery
    // use the val() function to get the input value
    var searchInput = $('#word_input').val();


    // use this function to search for recipes on the Edamam API
    // pass in the value that the user has typed in
    // once we get something back from the API, run the displayRecipes function
    // alert(searchInput);
    // getTranslationFromAPI(searchInput, displayTranslations);

    // http://openweathermap.org/current
    // it has to be similar to http://api.openweathermap.org/data/2.5/find?q=London

    $.getJSON(WEBSITE_ADDRESS + API_TRANSLATION_KEY +"&lang=en-es&"+searchInput);

    $("#showTranslation").append(WEBSITE_ADDRESS + API_TRANSLATION_KEY +"&lang=en-es&"+"text="+searchInput);


  });






});
