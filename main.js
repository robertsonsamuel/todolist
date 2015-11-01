/*global $:false, jQuery:false */
$(document).ready(init);


function init () {
  // Add to List activator
  $('#add').on('click',getInfo);

  //lets enter key trigger getInfo function
  $(document).keypress(function(e) {
    if(e.which == 13) {
        getInfo();
    }
});

}

function getInfo () {
  var $dateInBox = $('#datepicker').val(); //date in string form
  var $textTodo = $('#textfield').val(); 
  var $row = $('<tr>');
  var $date = $('<td>' + $dateInBox + '</td>');
  var $text = $('<td>' + $textTodo + '</td>');
  var $check = $('<td>'+ '<input type ="checkbox">' + '</td>');


  $('.table').append($row.append($check,$text,$date));


}
