// BTN SEARCH FORM CLICK

$( ".btn" ).click(function() {
    $('.search, btn').toggleClass('open');
 });
 
//  

$(document).ready(function() {
   $('#pop-up').click(function() {
      $('#modal-window').addClass('active');
   });
   $('.modal-close').click(function() {
      $(this).parent().removeClass('active');
   });
});