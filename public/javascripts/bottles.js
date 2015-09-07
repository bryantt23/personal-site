$(document).ready(function() {

  // $(".slider").on("change", function(){console.log(this.value)});


  $(".slider").on("change", function(){
    document.getElementById("range").innerHTML=this.value
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

  // function bottlesOfBeer(newValue){
  //
  //   $("#beer_lyrics").innerHTML(newValue +"beerr. <br>You need beerr much more confident... <br>beerr ");
  //
  // }

});
