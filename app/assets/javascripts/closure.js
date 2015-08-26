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
    var counterClosure = 0;
    return function () {
      return counterClosure += 1;
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

  $("#calculate_closure").on("click", function(){
    var calc = totalFn2($("#fallDown").val());
    // console.log(calc($('#firstNum').val(),$('#secondNum').val())); //returns 54
    // var answer= calc($('#firstNum').val(),$('#secondNum').val()); //returns 54

    // $('#calculator_answer').val() = answer;

    document.getElementById("calculator_answer").innerHTML = calc($('#firstNum').val(),$('#secondNum').val());
  });







});
