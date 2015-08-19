var foodList = [];

$(function () {
  $("#button1").on('click', 'input[type=submit]', function () {
    var input = $('#addFood').val();
    if(input==null || input == "") {
      alert("Pro must be filled out");
    }
    else {
      $('#foods').append('<div><a href="#" class="item">X</a> ' + $('#addFood').val() + '</div>');
    }
  });
  $(document).on('click', '.item', function () {
    $(this).parent().remove();
  });

  var foodList2 = [];

  $("#button2").on('click', 'input[type=submit]', function () {
    var input2 = $('#addFood2').val();
    // console.log(input2);
    if(input2==null || input2 == "") {
      alert("Con must be filled out");
    }
    else {
      $('#foods2').append('<div><a href="#" class="item">X</a> ' + $('#addFood2').val() + '</div>');
    }
  });
  $(document).on('click', '.item', function () {
    $(this).parent().remove();
  });

  $("#clearListButton").on('click', function () {
    $("#situation_text").val('');
    $("#addFood2").val('');
    $("#addFood").val('');
    $('#foods').empty();
    $('#foods2').empty();
  });


});
