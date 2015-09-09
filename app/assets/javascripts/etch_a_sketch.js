$(document).ready(function() {



  createGrid(8,8);

  function createGrid(rowsInput, columnsInput){

    var rows = rowsInput;
    var columns = columnsInput;

    var $row = $("<div/>", {
      class: 'row-etch'
    });
    var $square = $("<div/>", {
      class: 'square-etch'
    });



    //add columns to the the temp row object
    for (var i = 0; i < columns; i++) {
      $row.append($square.clone());
    }
    //clone the temp row object with the columns to the wrapper
    for (var i = 0; i < rows; i++) {
      $("#etch_sketch_wrapper").append($row.clone());
    }

    $(".square-etch").hover(function(){
      $(this).css("background-color", "yellow");
    }, function(){
      $(this).css("background-color", "pink");
    });

        // $(".row").height(100);
  }



  $("#clear_grid_button").on("click", function(){
    var gridSize = prompt("How many squares wide would you like the grid to be?");

    if (gridSize != null) {
      $("#etch_sketch_wrapper").empty();
      createGrid(gridSize,gridSize);
    }

  });




});
