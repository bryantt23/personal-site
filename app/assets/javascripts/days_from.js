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

  $("#dt1").datepicker({
    dateFormat: "dd-M-yy",
    // minDate: 0,
    onSelect: function (date) {
      var date2 = $('#dt1').datepicker('getDate');
      date2.setDate(date2.getDate() + 1);
      $('#dt2').datepicker('setDate', date2);
      //sets minDate to dt1 date + 1
      $('#dt2').datepicker('option', 'minDate', date2);
    }
  });
  $('#dt2').datepicker({
    dateFormat: "dd-M-yy",
    onClose: function () {
      var dt1 = $('#dt1').datepicker('getDate');
      var dt2 = $('#dt2').datepicker('getDate');
      //check to prevent a user from entering a date below date of dt1
      if (dt2 <= dt1) {
        var minDate = $('#dt2').datepicker('option', 'minDate');
        $('#dt2').datepicker('setDate', minDate);
      }
    }
  });


});
