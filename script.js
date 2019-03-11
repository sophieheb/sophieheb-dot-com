$('.smooth').on('click', function() {
  $.smoothScroll({
    scrollElement: $('body'),
    scrollTarget: '#' + this.id
  });

  return false;
});

//This needs to be done
$('aside').on('click', (e) => {
  console.log(e);
  $('aside').children.css("display","block");

})
