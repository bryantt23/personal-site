$(document).ready(function() {

  bottlesOfBeer(0);

  $(".slider").on("change", function(){
    document.getElementById("range").innerHTML=this.value;
    var numOfBeers = this.value;
    bottlesOfBeer(numOfBeers);
  });

  function bottlesOfBeer(numOfBeers){
    var lyrics="";
    // console.log("yolo");
    while(numOfBeers>2){
      lyrics += numOfBeers + " bottles of beer on the wall, " + numOfBeers + " bottles of beer.<br>" +
      "Take one down, pass it around, " + --numOfBeers + " bottles of beer on the wall...<br>";
    }
    if(numOfBeers==2){
      lyrics += numOfBeers + " bottles of beer on the wall, " + numOfBeers + " bottles of beer.<br>" +
      "Take one down, pass it around, " + --numOfBeers + " bottle of beer on the wall...<br>";
    }
    if(numOfBeers==1){
      lyrics += numOfBeers + " bottle of beer on the wall, " + numOfBeers + " bottle of beer.<br>" +
      "Take one down, pass it around, " + --numOfBeers + " bottles of beer on the wall...<br>";
    }
    if(numOfBeers==0) {
        lyrics += "No more bottles of beer on the wall, no more bottles of beer.<br>" +
        "Go to the store and buy some more, 99 bottles of beer on the wall...";
    }




    $("#beerLyrics").html(lyrics);

  }

});
