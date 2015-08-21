$(document).ready(function(){
  console.log("main.js up and running");


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
  $("#searchForRecipesButton").click(function(){

    // create a variable
    // select the input using jQuery
    // use the val() function to get the input value
    var searchInput = $('#ingredient_name').val();

    // use this function to search for recipes on the Edamam API
    // pass in the value that the user has typed in
    // once we get something back from the API, run the displayRecipes function
    getRecipesFromAPI(searchInput, displayRecipes);
  });

  // https://www.mashape.com/edamam/recipe-search-and-diet
  // The Edamam Recipe Search API lets you search over 1.5 million recipes from 500+ top web recipe sources

  // this function takes in a phrase to search (searchString)..
  // ..and a function to execute when we receive data from the API (callbackFunction)

  // http://www.w3schools.com/jquery/jquery_callback.asp
  // A callback function is executed after the current effect is finished.
  function getRecipesFromAPI(searchString, callbackFunction) {

    // https://developer.edamam.com/recipe-docs
    // "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}"

    // this is the API endpoint, which means the URL to which our search request is sent
    var apiEndpoint = 'https://api.edamam.com/search';

    // we're sending some data with our request
    var apiData = {
      // the app ID and key work like a library card
      // every time we're borrowing some data from Edamam (the API service provider)
      // we use these to let Edamam know it's us
      _app_id: '21035d97',
      _app_key: 'fd726687e4cfbcb844326f030aa3ed95',
      // q stands for query, and it's the search term for an ingredient or a recipe
      q: searchString
    }

    // perform an asynchronous HTTP (Ajax) request using jQuery
    // learn more about it at https://api.jquery.com/jQuery.ajax
    // $ is a shortcut for jQuery
    $.ajax({
      // send the request to the API endpoint
      url: apiEndpoint,
      // the request data we're sending
      data: apiData,
      // we want to receive a JSON object
      dataType: 'jsonp',

      // what to do when the API responds with some data
      success: function(responseJSON)  {
        // at this point we can call the callback function
        callbackFunction(responseJSON);
        // it will call the parameter displayRecipes
      }
    })
  }
  /*If jsonp is specified, $.ajax() will automatically append a query string
  parameter of (by default) callback=? to the URL. The jsonp and jsonpCallback
  properties of the settings passed to $.ajax() can be used to specify,
  respectively, the name of the query string parameter and the name of
  the JSONP callback function. The server should return valid JavaScript
  that passes the JSON response into the callback function.
  $.ajax() will execute the returned JavaScript, calling the JSONP
  callback function, before passing the JSON object contained in
  the response to the $.ajax() success handler.


  If json is specified, the response is parsed using jQuery.parseJSON
  before being passed, as an object, to the success handler.
  The parsed JSON object is made available through the
  responseJSON property of the jqXHR object.
  */


  function displayRecipes(responseJSON) {
    // console.log(responseJSON);

    // this clears out any pre-existing data
    $("#showRecipes").html("<h3>Top Recipes</h3>");

    var hitsArray = responseJSON.hits;
    var counter = 0;
    // var total = hitsArray.length;
    var total = 3;

    while(counter < total ) {

      // found in jsonp file i.e. https://api.edamam.com/search?q=chicken&app_id=21035d97&app_key=fd726687e4cfbcb844326f030aa3ed95
      var hit = hitsArray[counter];

      // each recipe has its subsection in the file
      var recipe = hit.recipe;

      // use the template function to get a list item
      var li = getRecipeListItem(recipe);

      // append the list item to our HTML
      // $("ul").append(li);
      $("#showRecipes").append(li);

      // increment the counter
      // to avoid infinite loops
      counter = counter + 1;
    }
  }

  // this function is like an HTML sausage machine
  // pass in some recipe data
  // and it will return an HTML list item wrapped around that data
  function getRecipeListItem(recipe)
  {
    // create a variable to store the HTML code
    // we put the static (non variable) bits in speech marks
    // and the variable bits outside of speech marks
    var li = "<li>"
    + "<img src=" + recipe.image + ">"
    + "<h3>" + recipe.label + "</h3>"
    + "<p>This recipe is <b>" + recipe.label + "</b> and has " +  Math.floor( recipe.calories  ) + " calories.</p>"
    + "<a href=" + recipe.url + " target=_blank>Let's make this recipe</a>"
    + "</li>"

    return li
  }




})
