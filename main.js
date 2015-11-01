/*global $:false, jQuery:false */
$(document).ready(init);


function init () {
  // Add to List activator
  $('#add').on('click',getInfo);
  // $('.checkbox').off();

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
  var $row = $('<tr>').addClass('unchecked');
  var $date = $('<td>' + $dateInBox + '</td>');
  var $text = $('<td>' + $textTodo + '</td>');
  var $check = $('<td>'+ '<input type ="checkbox" class="unchecked">' + '</td>');


  $('.table').append($row.append($check,$text,$date));
  //$check.off();
  $check.change(isChecked);
}

function isChecked () {
  //console.log($(this));
 if($(this).children().hasClass('unchecked')){
  $(this).closest('.unchecked').css('text-decoration', 'line-through');
 }
 return;

}
