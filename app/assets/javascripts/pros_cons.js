var foodList = [];

$(function () {
    $("#button1").on('click', 'input[type=submit]', function () {
        $('#foods').append('<div><a href="#" class="item">X</a> ' + $('#addFood').val() + '</div>');
    });
    $(document).on('click', '.item', function () {
        $(this).parent().remove();
    });

    var foodList2 = [];

    $("#button2").on('click', 'input[type=submit]', function () {
        $('#foods2').append('<div><a href="#" class="item">X</a> ' + $('#addFood2').val() + '</div>');
    });
    $(document).on('click', '.item', function () {
        $(this).parent().remove();
    });
});
