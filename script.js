window.addEventListener('DOMContentLoaded', (event) => {

  // Whole Page JS
  $('.smooth').on('click', function() {
    $.smoothScroll({
      scrollElement: $('body'),
      scrollTarget: '#' + this.id
    });
    return false;
  });

  // About section JS

  let about_circle_shown = false;

  $("#about-pkt, #about-hacksy, #about-decoded, #about-flatiron, #about-speaking").flip({
    trigger: 'manual'
  });

  $("#about-pkt, #about-hacksy, #about-decoded, #about-flatiron, #about-speaking").hover(
    () => {!about_circle_shown ? $("#about-pkt").flip(true) : null},
    () => {!about_circle_shown ? $("#about-pkt").flip(false) : null},
  );

  $('.open-modal-link').on('click', () => {
    about_circle_shown = true;
    $('#about-pkt').addClass("show-modal-circle")
    $('#about-pkt > .back').addClass("show-modal-content")
    $('body').addClass('no-scroll');
    $('#about-main').css('justify-content', 'flex-end');
    $('.text').addClass("text-open")
    $('.company-name, .job-title, .tech-stack, .description, .external-link, .close-modal').css('display', 'block')
    $('.open-modal-link').css('display', 'none')
  })

  // Nav Bar JS

  $('.home_link').on('click', function () {
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
