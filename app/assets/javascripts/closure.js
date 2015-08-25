$(document).ready(function() {

  var counter = 0;
  $("#count").on("click", function(){
    document.getElementById("demo").innerHTML = add();
  });


  $("#change_count").on("click", function(){
    document.getElementById("demo").innerHTML = changeGlobalVariable();
  });

  function add() {
    return counter += 1;
  }

  function changeGlobalVariable() {
    return counter += "yolo";
  }




  $("#count_closure").on("click", function(){
    document.getElementById("closureAdd").innerHTML = addWithClosure();
  });




  var addWithClosure = (function () {
    var counter = 0;
    return function () {
      return counter += 1;
    }
  })();



  $("#double_closure").on("click", function(){
    document.getElementById("closureDouble").innerHTML = doubleWithClosure();
  });





  var doubleWithClosure = (function () {
    var counter = 1;
    return function () {
      return counter *= 2;
    }
  })();



  var totalFn = function(operator){
    var total = 0;

    return function(number){
      if(operator === '+'){
        total += number;
      }else if(operator === '-'){
        total -= number;
      }
      return total;
    };

    var add = totalFn('+');
    var subtract = totalFn('-');

    add(10); //returns 10
    add(44); //returns 54

    subtract(40); //returns -40
    subtract(140); //returns -180
  };

      var add = totalFn('+');
  console.log(add(44));

  // console.log(add(44));


});
