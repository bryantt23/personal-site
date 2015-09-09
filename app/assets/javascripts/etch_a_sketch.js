$(document).ready(function() {



  createGrid(8,8);

  function calculateSizes(rowsInput){
    return 480/rowsInput;
  }

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

    var size = calculateSizes(rowsInput);

    console.log(size);

    $(".row-etch").height(size);
    // $(".row-etch").width(size);
    $(".square-etch").height(size);
    $(".square-etch").width(size);

  }



  $("#clear_grid_button").on("click", function(){
    var gridSize = prompt("How many squares wide would you like the grid to be?");

    while(gridSize > 21 || gridSize == null){
        gridSize = prompt("How many squares wide would you like the grid to be?");
    }

      $("#etch_sketch_wrapper").empty();
      createGrid(gridSize,gridSize);

    // if (gridSize < 21 && gridSize != null) {
    //   $("#etch_sketch_wrapper").empty();
    //   createGrid(gridSize,gridSize);
    // }
    // else{
    //   gridSize = prompt("How many squares wide would you like the grid to be?");
    // }

  });




});
