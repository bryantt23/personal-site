
$(document).ready(function() {


  // stress test code********************************************************
  function displayVals() {
    calcUsage();
  }

  // variable for  checkboxes
  var $cbs = $('input[name="ch1"]');

  function calcUsage() {
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
      $("#usertotal").text(total + ". At risk of illness.");
    }
    else if (total>149){
      $("#usertotal").text(total +". Risk of illness is moderate.");
    }
    else{
      $("#usertotal").text(total +". Only have a slight risk of illness.");
    }
  }

  $("select").change(displayVals);
  displayVals();

  $cbs.click(calcUsage);



});
