$(document).ready(function() {



  var WEBSITE_ADDRESS = "https://translate.yandex.net/api/v1.5/tr.json/translate?";
  var API_TRANSLATION_KEY = "key=trnsl.1.1.20150902T112010Z.1a6212e8e1655fac.d63ceaa7e8dccecc55a98d2a7649e75bfac330cc";



  /*
  // http://stackoverflow.com/questions/18160342/jquery-how-to-trigger-click-event-on-pressing-enter-key
  //press enter in text area..
  $('#word_input').keypress(function (e) {
  var key = e.which;
  if(key == 13)  // the enter key code
  {
  $('#searchForTranslationButton').click();
  return false;
  }
  });
  */


  // use jQuery to select the button
  // "listen" for when the button is clicked
  $("#searchForTranslationButton").click(function(){

    /*
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
    var language_start = $( "#language_start" ).val();
    var language_end = $( "#language_end" ).val();

    $.getJSON(WEBSITE_ADDRESS + API_TRANSLATION_KEY +"&lang=" + language_start + "-" + language_end +"&text="+searchInput, getTranslationFromAPI);
    */

    getJSONData();
  });

  function getJSONData(){
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
    var language_start = $( "#language_start" ).val();
    var language_end = $( "#language_end" ).val();

    $.getJSON(WEBSITE_ADDRESS + API_TRANSLATION_KEY +"&lang=" + language_start + "-" + language_end +"&text="+searchInput, getTranslationFromAPI);

  }



  function getTranslationFromAPI(data) {
    var translation = {};
    translation.translated;

    // get info from json that was stored above

    translation.translated       = data.text;

    // this is how the info gets displayed
    $("#showTranslation").html(translation.translated);

  }

  $('#language_start').change(function(){
    getJSONData();
  })

  $('#language_end').change(function(){
    getJSONData();
  })



});
