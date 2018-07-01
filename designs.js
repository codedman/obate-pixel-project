/*Hi, My name is Obasi Uchechukwu Emmanuel.

I'm a ALC participant for the Alc 3.0 program.

This is my #7daysofcodechallenge and i'm happy to say that I built a pixel art maker!

Please see my code below.

Enjoy!

*/



//Make document ready
$(document).ready(function() {

  // When size is submitted by the user, call makeGrid()
  $('#sizePicker').submit(function  makeGrid(grid) {

    //clearing the grid
    $('table tr').remove();

    // Select size input
    var horizontal = $('#inputHeight').val();
    var vertical = $('#inputWeight').val();

    //To make the amount of horizontal lines or rows that was put into the input
    for (var i = 1; i <= horizontal; i++) {
      $('table').append('<tr></tr>');

      //To add a column after each row
        for (var j = 1; j <= vertical; j++) {
          $('tr:last').append('<td></td>');

          //To add a class to each table data,that is Cell
          $('td').attr("class", 'cells');

      }
    }
    //To make the grid to appear
    grid.preventDefault();

//Addimg a click function to the cells to get a color appear inside
    $('.cells').click(function (event) {
      var fill = $('#colorPicker').val();
      $(event.target).css('background-color', fill);
    })
  });
});
