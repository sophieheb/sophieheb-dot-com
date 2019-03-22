window.addEventListener('DOMContentLoaded', (event) => {

  $('.smooth').on('click', function() {
    $.smoothScroll({
      scrollElement: $('body'),
      scrollTarget: '#' + this.id
    });

    return false;
  });


  $('aside').on('click', function(){
    if ($(this).hasClass('display_details')) {
      $(this).removeClass('display_details')
    }
    else {
      $(this).addClass('display_details')
    }
  })

})
