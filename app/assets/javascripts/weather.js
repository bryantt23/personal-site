$(document).ready(function() {

  (function() {

    // listen for weatherButton click
    $('#weatherButton').click(function(){

      // take the value entered in the city_name textbox
      var cityEntered = $('#city_name').val();

      // http://openweathermap.org/current
      // it has to be similar to http://api.openweathermap.org/data/2.5/find?q=London

      $.getJSON("http://api.openweathermap.org/data/2.5/weather?APPID=" + API_WEATHER_KEY +"&q="+cityEntered
      +"&units=imperial ", getCurrentWeather);
    });

    var API_WEATHER_KEY = "cbe3a5258849eb31e096fd9bf0763eb8";
    var IMG_WEATHER = "http://openweathermap.org/img/w/";

    // -- Variables --------------------------------------------------------------

    // these match the json info i.e. http://api.openweathermap.org/data/2.5/find?q=London has
    // {"temp":288.46,"pressure":1011,"humidity":77,"temp_min":287.04,"temp_max":289.82},
    var cities = [];
    var cityWeather = {};
    cityWeather.zone;
    cityWeather.icon;
    cityWeather.temp;
    cityWeather.temp_max;
    cityWeather.temp_min;
    cityWeather.sunrise;
    cityWeather.sundown;
    cityWeather.description;
    cityWeather.main;


    var today = new Date();
    var timeNow = today.toLocaleTimeString().split(" ")[0];
    var dateNow = today.getDate() + "/" + today.getMonth()+1 + "/" + today.getFullYear();

    // -- Cacheado de elementos --------------------------------------------------

    var $body              = $("body");
    var loader             = $(".loader");
    var formAddNuevaCiudad = $('.search');
    var buttonAdd          = $("[data-button='add']");
    var buttonLoad         = $("[data-button='loadCities']");
    var nombreNuevaCiudad  = $("[data-input='cityAdd']");
    var savedCities        = $("[data-saved-cities]");

    function getCurrentWeather(data) {

      // get info from json that was stored above
      cityWeather.zone        = data.name;
      cityWeather.icon        = IMG_WEATHER + data.weather[0].icon + ".png";
      cityWeather.temp        = data.main.temp;
      cityWeather.temp_max    = data.main.temp_max;
      cityWeather.temp_min    = data.main.temp_min;
      cityWeather.sunrise     = data.sys.sunrise;
      cityWeather.sunset      = data.sys.sunset;
      cityWeather.description = data.weather[0].description;
      cityWeather.main        = data.weather[0].main;

      // this is how the info gets displayed
      renderTemplate(cityWeather, null);
    }

    function activateTemplate(id) {
      var t = document.querySelector(id);
      return document.importNode(t.content, true);
    }


    function renderTemplate(city, localTime) {
      var clone = activateTemplate("#template--city");
      var timeToShow;

      if (localTime) {
        timeToShow = localTime.split(" ")[1];
      } else {
        timeToShow = timeNow;
      }

      clone.querySelector("[data-city]").innerHTML            = city.zone;
      clone.querySelector("[data-icon]").src                  = city.icon;
      clone.querySelector("[data-temp='max']").innerHTML      = "Max temp: " + city.temp_max.toFixed(1);
      clone.querySelector("[data-temp='min']").innerHTML      = "Min temp: " + city.temp_min.toFixed(1);
      clone.querySelector("[data-temp='current']").innerHTML  = "Current temp: " + city.temp.toFixed(1);

      $(loader).hide();
      $(formAddNuevaCiudad).show();

      // append it to this id 
      $("#weather-info").append(clone);

      $('#weatherButton').focus();

      // animate scrolling to bottom of the page
      // http://stackoverflow.com/questions/12299987/jquery-stay-at-bottom-of-page
      $("html, body").animate({ scrollTop: $(document).height() }, 500);

    }

  })();
});
