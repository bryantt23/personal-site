$(document).ready(function() {
  // for tip calculator ********************************************************
  // http://stackoverflow.com/questions/15480516/jquery-tip-calculator-formulas-with-variables-based-on-textarea-inputs

  $('#tipButton').click(function(){
    var Total = $('.Total').val();
    var Tip = $('.Tip').val();
    // var NumberOfPeople = $('.NumberOfPeople').val();
    var calculatedTip = ((Tip/100)*Total).toFixed(2);
    var NumberOfPeople = 1;
    var AdjTotal = (((Tip/100)*Total)+Total/1).toFixed(2);
    var Result = (AdjTotal/NumberOfPeople).toFixed(2);
    if(isNaN(AdjTotal) || Total<0 || Tip<0) {
      $('.result').remove();
      $('.error').remove();
      $('.price').append('<p class="error">Please enter valid numbers into the above fields.</p>');
    }
    else {
      $('.error').remove();
      $('.result').remove();
      $('.price').append('<p class="result">Your tip is $' + calculatedTip + ' and your total is $' + AdjTotal + ' '  + '.</p>');
    }
  });
  
});
