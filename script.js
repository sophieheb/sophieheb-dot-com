window.addEventListener('DOMContentLoaded', (event) => {

  // About section JS

  let about_modal_shown = false;

  $('.about-circle').flip({
    trigger: 'manual'
  });

  $('.about-circle').mouseover(function() {
     !about_modal_shown ? $("#" + this.id).flip(true) : null
  });

  $('.about-circle').mouseout(function() {
     !about_modal_shown ? $("#" + this.id).flip(false) : null
  });

  $('.open-modal-link').click(function (){
    id = $(this).closest('.about-circle').attr('id')
    about_modal_shown = true;

    // Select the clicked circle as the selected circle and expand it into a modal
    $('#' + id).addClass('selected-circle')
    // Remove all the others
    $('.about-circle:not(.selected-circle)').addClass('hidden-circle')
    //Stop the body from scrolling
    $('body').addClass('no-scroll');

    // Slim this down
    $('.company-name, .tech-stack, .description, .external-link, .close-modal').css('display', 'block')
    $('.open-modal-link').css('display', 'none')

  })


  $('.close-modal').on('click', function () {

    id = $(this).closest('.selected-circle').attr('id')
    about_modal_shown = false;

    // Select the clicked circle as the selected circle and expand it into a modal
    $('#' + id).removeClass('selected-circle')
    // Remove all the others
    $('.about-circle:not(.selected-circle)').removeClass('hidden-circle')
    //Stop the body from scrolling
    $('body').removeClass('no-scroll');

    $('.company-name, .tech-stack, .description, .external-link, .close-modal').css('display', 'none')
    $('.open-modal-link').css('display', 'block')

  })

  // Nav Bar JS

    // I don't know if this works??? I don;t think colour is actually being added?

  $('.home_link').on('click', function (e) {

    if(about_modal_shown){
      return false;
    }

    $("body").addClass("blue")
    $("body").removeClass("pink")
    $("body").removeClass("yellow")
    $("body").removeClass("beige")

    $("#top_circle").addClass("beige")
    $("#top_circle").removeClass("yellow")
    $("#top_circle").removeClass("blue")
    $("#top_circle").removeClass("pink")

    $("#bottom_circle").addClass("yellow")
    $("#bottom_circle").removeClass("beige")
    $("#bottom_circle").removeClass("blue")
    $("#bottom_circle").removeClass("pink")

    $("header").addClass("pink")
    $("header").removeClass("yellow")
    $("header").removeClass("blue")
    $("header").removeClass("beige")

    $('#bottom_circle').css('left', '60%');
    $('#top_circle').css('left', '-10%');


  })

  $('.about_link').on('click', function () {
    $("body").addClass("beige")
    $("body").removeClass("yellow")
    $("body").removeClass("pink")
    $("body").removeClass("blue")

    $("#top_circle").addClass("pink")
    $("#top_circle").removeClass("yellow")
    $("#top_circle").removeClass("blue")
    $("#top_circle").removeClass("beige")

    $("#bottom_circle").addClass("yellow")
    $("#bottom_circle").removeClass("beige")
    $("#bottom_circle").removeClass("blue")
    $("#bottom_circle").removeClass("pink")

    $("header").addClass("yellow")
    $("header").removeClass("beige")
    $("header").removeClass("blue")
    $("header").removeClass("pink")

    $('#bottom_circle').css('left', '-10%');
    $('#top_circle').css('left', '60%');

  })

  $('.services_link').on('click', function () {

    if(about_modal_shown){
      return false;
    }

    $("body").addClass("beige")
    $("body").removeClass("yellow")
    $("body").removeClass("pink")
    $("body").removeClass("blue")

    $("#top_circle").addClass("pink")
    $("#top_circle").removeClass("yellow")
    $("#top_circle").removeClass("blue")
    $("#top_circle").removeClass("beige")

    $("#bottom_circle").addClass("yellow")
    $("#bottom_circle").removeClass("beige")
    $("#bottom_circle").removeClass("blue")
    $("#bottom_circle").removeClass("pink")

    $("header").addClass("yellow")
    $("header").removeClass("beige")
    $("header").removeClass("blue")
    $("header").removeClass("pink")

    $('#bottom_circle').css('left', '110%');
    $('#top_circle').css('left', '-10%');

  });

  $('.contact_link').on('click', function () {

    if(about_modal_shown){
      return false;
    }
    $("body").addClass("yellow")
    $("body").removeClass("beige")
    $("body").removeClass("blue")
    $("body").removeClass("pink")

    $("#top_circle").addClass("beige")
    $("#top_circle").removeClass("yellow")
    $("#top_circle").removeClass("blue")
    $("#top_circle").removeClass("pink")

    $("#bottom_circle").addClass("pink")
    $("#bottom_circle").removeClass("beige")
    $("#bottom_circle").removeClass("blue")
    $("#bottom_circle").removeClass("yellow")

    $("header").addClass("blue")
    $("header").removeClass("yellow")
    $("header").removeClass("beige")
    $("header").removeClass("pink")

    $('#bottom_circle').css('left', '60%');
    $('#top_circle').css('left', '-10%');

  })

})

$(window).scroll(function () {

    var height = Math.max(document.body.scrollHeight,
                          document.body.offsetHeight,
                          document.documentElement.clientHeight,
                          document.documentElement.scrollHeight,
                          document.documentElement.offsetHeight);

   if ($(this).scrollTop() < height*0.245) {
      $("body").addClass("pink")
      $("body").removeClass("beige")
      $("body").removeClass("blue")
      $("body").removeClass("yellow")

      $("#top_circle").addClass("yellow")
      $("#top_circle").removeClass("beige")
      $("#top_circle").removeClass("blue")
      $("#top_circle").removeClass("pink")

      $("#bottom_circle").addClass("yellow")
      $("#bottom_circle").removeClass("beige")
      $("#bottom_circle").removeClass("blue")
      $("#bottom_circle").removeClass("pink")

      $("header").addClass("beige")
      $("header").removeClass("yellow")
      $("header").removeClass("blue")
      $("header").removeClass("pink")

      let topCirclePosition = moveCircle(0, height*0.25, 70, $(this).scrollTop(), -10, 1)
      $('#top_circle').css('left', topCirclePosition + '%');

      let bottomCirclePosition = moveCircle(0, height*0.25, 70, $(this).scrollTop(), 60, -1)
      $('#bottom_circle').css('left', bottomCirclePosition + '%');
   }
   else if ($(this).scrollTop() < height*0.495) {
      $("body").addClass("blue")
      $("body").removeClass("pink")
      $("body").removeClass("yellow")
      $("body").removeClass("beige")

      $("#top_circle").addClass("beige")
      $("#top_circle").removeClass("yellow")
      $("#top_circle").removeClass("blue")
      $("#top_circle").removeClass("pink")

      $("#bottom_circle").addClass("yellow")
      $("#bottom_circle").removeClass("beige")
      $("#bottom_circle").removeClass("blue")
      $("#bottom_circle").removeClass("pink")

      $("header").addClass("pink")
      $("header").removeClass("yellow")
      $("header").removeClass("blue")
      $("header").removeClass("beige")

      let topCirclePosition = moveCircle(height*0.25, height*0.5, 70, $(this).scrollTop(), 60, -1)
      $('#top_circle').css('left', topCirclePosition + '%');

      let bottomCirclePosition = moveCircle(height*0.25, height*0.5, 120, $(this).scrollTop(), -10, 1)
      $('#bottom_circle').css('left', bottomCirclePosition + '%');
   }
   else if ($(this).scrollTop() < height*0.745) {
     console.log("IN 3/4 scroll")
      $("body").addClass("beige")
      $("body").removeClass("yellow")
      $("body").removeClass("pink")
      $("body").removeClass("blue")

      $("#top_circle").addClass("pink")
      $("#top_circle").removeClass("yellow")
      $("#top_circle").removeClass("blue")
      $("#top_circle").removeClass("beige")

      $("#bottom_circle").addClass("yellow")
      $("#bottom_circle").removeClass("beige")
      $("#bottom_circle").removeClass("blue")
      $("#bottom_circle").removeClass("pink")

      $("header").addClass("yellow")
      $("header").removeClass("beige")
      $("header").removeClass("blue")
      $("header").removeClass("pink")

      let bottomCirclePosition = moveCircle(height*0.5, height*0.75, 50, $(this).scrollTop(), 110, -1)
      $('#bottom_circle').css('left', bottomCirclePosition + '%');

   }
   else if ($(this).scrollTop() >= height*0.745) {
      $("body").addClass("yellow")
      $("body").removeClass("beige")
      $("body").removeClass("blue")
      $("body").removeClass("pink")

      $("#top_circle").addClass("beige")
      $("#top_circle").removeClass("yellow")
      $("#top_circle").removeClass("blue")
      $("#top_circle").removeClass("pink")

      $("#bottom_circle").addClass("pink")
      $("#bottom_circle").removeClass("beige")
      $("#bottom_circle").removeClass("blue")
      $("#bottom_circle").removeClass("yellow")

      $("header").addClass("blue")
      $("header").removeClass("yellow")
      $("header").removeClass("beige")
      $("header").removeClass("pink")

   }

});

function moveCircle(lowestScroll, maxScroll, pixelsToMove, currentScroll,  offset, multiplier){
  let numberOfPixelsInEachMovementOfCircle = ((maxScroll-lowestScroll)/pixelsToMove)
  return ((currentScroll-lowestScroll)*multiplier)/numberOfPixelsInEachMovementOfCircle + offset
}
