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


// Выбрать несколько элементов

$('.sort').click(function () {
    var mylist = $('.items');
    var listitems = mylist.children('li').get();
    listitems.sort(function (a, b) {
      var compA = $(a).data('selected');
      var compB = $(b).data('selected');
      return (compA < compB) ? 1 : (compA > compB) ? 1 : 0;
    });
    $.each(listitems, function (idx, itm) { mylist.append(itm); });
  })
  
  $('li', '.items').click(function (){
    var checks = $('[type="checkbox"]', '.checks');
    var item = $(this);
    
    if(item.data('selected') == '0') {
      item.data('selected', '1');
      item.addClass('selected');
    } else {
      item.data('selected', '0');
      item.removeClass('selected');
    }
    
    checks.filter('[data-guid="'+item.data('guid')+'"]').prop('checked', item.data('selected') == '1');
  });
  

//   $('#jsMe').on('click', function() {
//     $('#modal-close').modal('toggle');
//     return false;
// });

// $('#modal-close').on('shown', function () {
//     $('body').on('wheel.modal mousewheel.modal', function () {return false;});
// }).on('hidden', function () {
//     $('body').off('wheel.modal mousewheel.modal');
// });


function check() {
    var submit = document.getElementsByName('submit')[0];
    if (document.getElementById('politics').checked)
    submit.disabled = '';
    else
    submit.disabled = 'disabled';
    }

    $('#box').click(function(){
      $('.drop__menu').hide(); // Скрывает начальное содержимое.
      $('.drop__menu').show(); // Показывает содержимое диалога.
  });

  $(document).ready(function () {
    $(".sb-icon-search").click(function () {
      if (!$(".sb-search").hasClass("sb-search-open")) {
        $(".sb-search").addClass("sb-search-open");
      }
    });
    
    $(".sb-search-submit").click(function(){
      if ($(".sb-search").hasClass("sb-search-open") && $.trim($(".sb-search-input").val()).length==0) {
        event.preventDefault();
        $(".sb-search").removeClass("sb-search-open");
      }
    });
  });
