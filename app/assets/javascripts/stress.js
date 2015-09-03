
$(document).ready(function() {


  // stress test code********************************************************
  function displayStressVals() {
    calcStress();
  }

  // variable for  checkboxes
  var $cbs = $('input[name="ch1"]');

  function calcStress() {
    var total = 0;

    // for each checkbox
    $cbs.each(function() {

      // if this checkbox is checked
      if (this.checked)

      // parse the value and add it to the total
      total = parseInt(total) + parseInt(this.value);
    });

    //display message to user based on total
    //display in the div named usertotal
    if(total>299){
      $("#userStresstotal").text(total + ". At risk of illness.");
    }
    else if (total>149){
      $("#userStresstotal").text(total +". Risk of illness is moderate.");
    }
    else{
      $("#userStresstotal").text(total +". Only have a slight risk of illness.");
    }
  }

  $("select").change(displayStressVals);
  displayStressVals();

  $cbs.click(calcStress);



});
