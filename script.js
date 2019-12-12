function moveCircle(
    lowestScroll,
    maxScroll,
    pixelsToMove,
    currentScroll,
    offset,
    multiplier // Acts to change direction
) {
    let pixelsInEntireSection = maxScroll - lowestScroll;
    let pixelsToEndOfSection = (currentScroll - lowestScroll);
    let pixelsToEndOfSectionWithDirection = pixelsToEndOfSection * multiplier;
    let pixelsInEachCircleShift = pixelsInEntireSection / pixelsToMove;
    return pixelsToEndOfSectionWithDirection / pixelsInEachCircleShift + offset;
}

window.addEventListener("DOMContentLoaded", function () {

    // About section JS

    let about_modal_shown = false;

    $(".about-circle").flip({
        trigger: "manual"
    });

    $(".about-circle").mouseover(function (el) {
        if (!about_modal_shown) {
            $("#" + el.currentTarget.id).flip(true);
        }
    });

    $(".about-circle").mouseout(function (el) {
        if (!about_modal_shown) {
            $("#" + el.currentTarget.id).flip(false);
        }
    });

    $(".open-modal").click(function (el) {
        const id = el.currentTarget.closest(".about-circle").id;
        about_modal_shown = true;

        document.querySelector("#about").scrollIntoView({
            behavior: "smooth"
        });

        $("#" + id).addClass("selected-circle");
        $(".about-circle:not(.selected-circle)").addClass("hidden-circle");

        $(".about-info-item").css("display", "block");
        $(".open-modal").css("display", "none");
    });

    $(".close-modal").on("click", function (el) {

        const id = el.currentTarget.closest(".about-circle").id;
        about_modal_shown = false;

        $("#" + id).removeClass("selected-circle");
        $(".about-circle:not(.selected-circle)").removeClass("hidden-circle");

        $(".about-info-item").css("display", "none");
        $(".open-modal").css("display", "block");

    });

    // Nav Bar JS

    $(".home_link").on("click", function () {

        if (about_modal_shown) {
            return false;
        }

        $("#bottom-circle").css("left", "60%");
        $("#top-circle").css("left", "-10%");

    });

    $(".about_link").on("click", function () {

        $("#bottom-circle").css("left", "-10%");
        $("#top-circle").css("left", "60%");

    });

    $(".services_link").on("click", function () {

        if (about_modal_shown) {
            return false;
        }

        $("#bottom-circle").css("left", "110%");
        $("#top-circle").css("left", "-10%");

    });

    $(".contact_link").on("click", function () {

        if (about_modal_shown) {
            return false;
        }

        $("#bottom-circle").css("left", "60%");
        $("#top-circle").css("left", "-10%");

    });

    function setScrollSizes() {
      const scrollTop = document.documentElement.scrollTop;
      const homeElement = document.getElementById("home");
      const aboutElement = document.getElementById("about");
      const servicesElement = document.getElementById("services");
      const contactElement = document.getElementById("contact");

      window.homePageY = homeElement.getBoundingClientRect().y + scrollTop;
      window.aboutPageY = aboutElement.getBoundingClientRect().y + scrollTop;
      window.servicesPageY = servicesElement.getBoundingClientRect().y + scrollTop;
      window.contactPageY = contactElement.getBoundingClientRect().y + scrollTop;
    }

    window.addEventListener('resize', () => setScrollSizes());

    const scrollTop = document.documentElement.scrollTop;
    const homeElement = document.getElementById("home");
    const aboutElement = document.getElementById("about");
    const servicesElement = document.getElementById("services");
    const contactElement = document.getElementById("contact");

    let homePageY = homeElement.getBoundingClientRect().y + scrollTop;
    let aboutPageY = aboutElement.getBoundingClientRect().y + scrollTop;
    let servicesPageY = servicesElement.getBoundingClientRect().y + scrollTop;
    let contactPageY = contactElement.getBoundingClientRect().y + scrollTop;

    $(window).scroll(function () {

        if (document.documentElement.scrollTop > contactPageY) {

        } else if (document.documentElement.scrollTop > servicesPageY) {

            $("#bottom-circle").css("left", moveCircle(
                servicesPageY,
                contactPageY,
                50,
                document.documentElement.scrollTop,
                110,
                -1
            ) + "%");
        } else if (document.documentElement.scrollTop > aboutPageY) {

            $("#top-circle").css("left", moveCircle(
                aboutPageY,
                servicesPageY,
                70,
                document.documentElement.scrollTop,
                60,
                -1
            ) + "%");

            $("#bottom-circle").css("left", moveCircle(
                aboutPageY,
                servicesPageY,
                120,
                document.documentElement.scrollTop,
                -10,
                1
            ) + "%");
        } else if (document.documentElement.scrollTop > homePageY) {

            $("#top-circle").css("left", moveCircle(
                homePageY,
                aboutPageY,
                70,
                document.documentElement.scrollTop,
                -10,
                1
            ) + "%");

            $("#bottom-circle").css("left", moveCircle(
                homePageY,
                aboutPageY,
                70,
                document.documentElement.scrollTop,
                60,
                -1
            ) + "%");
        }
    });
});
