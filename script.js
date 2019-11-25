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

  $('.open-modal').click(function (){
    id = $(this).closest('.about-circle').attr('id')
    about_modal_shown = true;
    
    document.querySelector('#about').scrollIntoView({ 
      behavior: 'smooth' 
    })

    // Select the clicked circle as the selected circle and expand it into a modal
    $('#' + id).addClass('selected-circle')
    // Remove all the others
    $('.about-circle:not(.selected-circle)').addClass('hidden-circle')

    $('.about-info-item').css('display', 'block')
    $('.open-modal').css('display', 'none')

  })

  $('.close-modal').on('click', function () {

    id = $(this).closest('.selected-circle').attr('id')
    about_modal_shown = false;

    $('#' + id).removeClass('selected-circle')
    // Remove all the others
    $('.about-circle:not(.selected-circle)').removeClass('hidden-circle')

    $('.about-info-item').css('display', 'none')
    $('.open-modal').css('display', 'block')

  })

  // Nav Bar JS

  $('.home_link').on('click', function () {

    if(about_modal_shown){
      return false;
    }

    setupHomePage()

    $('#bottom-circle').css('left', '60%');
    $('#top-circle').css('left', '-10%');


  })

  $('.about_link').on('click', function () {

    setupAboutPage()

    $('#bottom-circle').css('left', '-10%');
    $('#top-circle').css('left', '60%');

  })

  $('.services_link').on('click', function () {

    if(about_modal_shown){
      return false;
    }

    setupServicesPage()

    $('#bottom-circle').css('left', '110%');
    $('#top-circle').css('left', '-10%');

  });

  $('.contact_link').on('click', function () {

    if(about_modal_shown){
      return false;
    }
    
    setupContactPage()

    $('#bottom-circle').css('left', '60%');
    $('#top-circle').css('left', '-10%');

  })

})

// TODO: Are these the correct heights  that the page changes size based on content?

$(window).scroll(function () {

  const height = Math.max(document.body.scrollHeight,
                        document.body.offsetHeight,
                        document.documentElement.clientHeight,
                        document.documentElement.scrollHeight,
                        document.documentElement.offsetHeight);

  if ($(this).scrollTop() < height*0.245) {
    setupHomePage()
    
    let topCirclePosition = moveCircle(0, height*0.25, 70, $(this).scrollTop(), -10, 1)
    $('#top-circle').css('left', topCirclePosition + '%');

    let bottomCirclePosition = moveCircle(0, height*0.25, 70, $(this).scrollTop(), 60, -1)
    $('#bottom-circle').css('left', bottomCirclePosition + '%');
  }
  else if ($(this).scrollTop() < height*0.495) {
    setupAboutPage()
    
    let topCirclePosition = moveCircle(height*0.25, height*0.5, 70, $(this).scrollTop(), 60, -1)
    $('#top-circle').css('left', topCirclePosition + '%');

    let bottomCirclePosition = moveCircle(height*0.25, height*0.5, 120, $(this).scrollTop(), -10, 1)
    $('#bottom-circle').css('left', bottomCirclePosition + '%');
  }
  else if ($(this).scrollTop() < height*0.745) {
    setupServicesPage()

    let bottomCirclePosition = moveCircle(height*0.5, height*0.75, 50, $(this).scrollTop(), 110, -1)
    $('#bottom-circle').css('left', bottomCirclePosition + '%');

  }
  else if ($(this).scrollTop() >= height*0.745) {
    setupContactPage()
  }

});

function setupHomePage(){
  changeColor("header", "beige");
  changeColor("#bottom-circle", "yellow");
  changeColor("#top-circle", "yellow");
  changeColor("body", "pink");
}

function setupAboutPage(){
  changeColor("header", "pink");
  changeColor("#bottom-circle", "yellow");
  changeColor("#top-circle", "beige");
  changeColor("body", "blue");
}

function setupServicesPage(){
  changeColor("header", "yellow");
  changeColor("#bottom-circle", "yellow");
  changeColor("#top-circle", "pink");
  changeColor("body", "beige");
  
}

function setupContactPage(){
  changeColor("header", "blue");
  changeColor("#bottom-circle", "pink");
  changeColor("#top-circle", "beige");
  changeColor("body", "yellow");
}

function changeColor(element, colour) {
  const colours = ["beige", "yellow", "blue", "pink"]
  
  $(element).addClass(colour)
  
  for (c of colours.filter(c => c != colour)) {
    $(element).removeClass(c)
  }
  
}

function moveCircle(lowestScroll, maxScroll, pixelsToMove, currentScroll,  offset, multiplier){
  let numberOfPixelsInEachMovementOfCircle = ((maxScroll-lowestScroll)/pixelsToMove)
  return ((currentScroll-lowestScroll)*multiplier)/numberOfPixelsInEachMovementOfCircle + offset
}
