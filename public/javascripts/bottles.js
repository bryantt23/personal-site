$(document).ready(function() {

  // $(".slider").on("change", function(){console.log(this.value)});


  $(".slider").on("change", function(){
    document.getElementById("range").innerHTML=this.value;
    var numOfBeers = this.value;
    bottlesOfBeer(numOfBeers);
  });


  // $(".slider").on("change", function(){
  //   (this.value)=document.getElementById("range").innerHTML});

  // function showValue(newValue)
  // {
  //   $(".slider").on("change", function(){console.log(this.value)});
  //   $(".slider").on("change", function(){(this.value)=newValue});
  //   document.getElementById("range").innerHTML=newValue;
  //   bottlesOfBeer(newValue);
  // }

  function bottlesOfBeer(numOfBeers){
    var lyrics="";
    // console.log("yolo");
    while(numOfBeers>0){
      lyrics += numOfBeers + " bottles of beer on the wall, " + numOfBeers + " bottles of beer.<br>" + 
      "Take one down, pass it around, " + --numOfBeers + " bottles of beer on the wall...<br>";
    }
    lyrics += "No more bottles of beer on the wall, no more bottles of beer.<br>" +
    "Go to the store and buy some more, 99 bottles of beer on the wall...";



    $("#beerLyrics").html(lyrics);

  }

});
