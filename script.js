window.addEventListener('DOMContentLoaded', (event) => {

  $('.smooth').on('click', function() {
    $.smoothScroll({
      scrollElement: $('body'),
      scrollTarget: '#' + this.id
    });

    return false;
  });


  $('aside').hover(
    function(){
      $(this).addClass('display_details')
    },
    function(){
      $(this).removeClass('display_details')
    }
  )

})
