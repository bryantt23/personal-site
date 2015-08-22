$(document).ready(function() {

  /*
  $("#datepicker").datepicker(
  {
  onSelect: function()
  {
  var dateObject = $(this).datepicker('getDate');
  console.log(dateObject);
  }
  });


  $("#datepicker2").datepicker(
  {
  onSelect: function()
  {
  var dateObject2 = $(this).datepicker('getDate');
  console.log(dateObject2);
  }
  });
  */
  // http://stackoverflow.com/questions/16373734/jquery-datepicker-restrict-dates-in-second-date-field-based-on-selected-date-in
  $("#dt1").datepicker({
    dateFormat: "dd-M-yy",
    // minDate: 0,
    onSelect: function (date) {
      // getDate - Returns the current date for the datepicker or null if no date has been selected.
      // var date2 = $('#dt1').datepicker('getDate');
      // console.log(date);
      // date2.setDate(date2.getDate() + 1);
      // $('#dt2').datepicker('setDate', date2);
      // //sets minDate to dt1 date + 1
      // $('#dt2').datepicker('option', 'minDate', date2);



        var date2 = $('#dt1').datepicker('getDate');

      if(date2<date){
        date2.setDate(date2.getDate() + 1);
        $('#dt2').datepicker('setDate', date2);
      }
      //sets minDate to dt1 date + 1
      $('#dt2').datepicker('option', 'minDate', date2);




      // check date difference here
      checkDateDifference();
    }
  });
  $('#dt2').datepicker({
    dateFormat: "dd-M-yy",
    onClose: function () {
      var dt1 = $('#dt1').datepicker('getDate');
      var dt2 = $('#dt2').datepicker('getDate');

      console.log(dt2);
      //check to prevent a user from entering a date below date of dt1
      if (dt2 <= dt1) {
        var minDate = $('#dt2').datepicker('option', 'minDate');
        $('#dt2').datepicker('setDate', minDate);
      }

      // check date difference here

      checkDateDifference();

    }
    // checkDateDifference();
    // checkDateDifference();

  });


  function checkDateDifference() {
    // $("#daysDifference").text("yolo");
    // console.log("yolo");
    var start = $('#dt1').datepicker('getDate');
    var end   = $('#dt2').datepicker('getDate');
    var days   = (end - start)/1000/60/60/24;

    if(start!=null && end!=null){
        console.log(days);
    }

  }



});
