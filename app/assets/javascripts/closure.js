$(document).ready(function() {

  var counter = 0;
  $("#count").on("click", function(){
    document.getElementById("demo").innerHTML = add();

    $('#demo').effect("highlight", {}, 3000);
  });


  function add() {
    return counter += 1;
  }


  $("#change_count").on("click", function(){
    document.getElementById("demo").innerHTML = changeGlobalVariable();
    $('#demo').effect("highlight", {}, 3000);
  });

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
    var doubleCounter = 1;
    return function () {
      return doubleCounter *= 2;
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
  // console.log(add(44));


  var totalFn2 = function(operator){
    var total = 0;

    return function(number1, number2){
      if(operator === '+'){
        total = parseInt(number1) + parseInt(number2);
      }else if(operator === '-'){
        total = number1 - number2;
      }
      return total;
    };

    var add = totalFn2('+');
    var subtract = totalFn2('-');

  };
  /*
  var add = totalFn2('+');
  var subtract = totalFn2('-');

  console.log(add(10,10)); //returns 20
  console.log(add(44,10)); //returns 54

  console.log(subtract(0,40)); //returns -40
  console.log(subtract(140,320)); //returns -180
  */

  $("#calculate_closure").on("click", function(){
    var calc = totalFn2($("#fallDown").val());
    // console.log(calc($('#firstNum').val(),$('#secondNum').val())); //returns 54
    // var answer= calc($('#firstNum').val(),$('#secondNum').val()); //returns 54

    // $('#calculator_answer').val() = answer;

    document.getElementById("calculator_answer").innerHTML = calc($('#firstNum').val(),$('#secondNum').val());
  });







});
