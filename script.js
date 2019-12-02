function changeColor(element, color) {
    const colors = ["beige", "yellow", "blue", "pink"];

    // $(element).addClass(color);
    // 
    // colors.filter((c) => c !== color).forEach((c) => $(element).removeClass(c));
}

function setupHomePage() {
    changeColor("header", "beige");
    changeColor("#bottom-circle", "yellow");
    changeColor("#top-circle", "yellow");
    changeColor("body", "pink");
}

function setupAboutPage() {
    changeColor("header", "pink");
    changeColor("#bottom-circle", "yellow");
    changeColor("#top-circle", "beige");
    changeColor("body", "blue");
}

function setupServicesPage() {
    changeColor("header", "yellow");
    changeColor("#bottom-circle", "yellow");
    changeColor("#top-circle", "pink");
    changeColor("body", "beige");

}

function setupContactPage() {
    changeColor("header", "blue");
    changeColor("#bottom-circle", "pink");
    changeColor("#top-circle", "beige");
    changeColor("body", "yellow");
}

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

        setupHomePage();

        $("#bottom-circle").css("left", "60%");
        $("#top-circle").css("left", "-10%");

    });

    $(".about_link").on("click", function () {

        setupAboutPage();

        $("#bottom-circle").css("left", "-10%");
        $("#top-circle").css("left", "60%");

    });

    $(".services_link").on("click", function () {

        if (about_modal_shown) {
            return false;
        }

        setupServicesPage();

        $("#bottom-circle").css("left", "110%");
        $("#top-circle").css("left", "-10%");

    });

    $(".contact_link").on("click", function () {

        if (about_modal_shown) {
            return false;
        }

        setupContactPage();

        $("#bottom-circle").css("left", "60%");
        $("#top-circle").css("left", "-10%");

    });

    const scrollTop = document.documentElement.scrollTop;
    const homeElement = document.getElementById("home");
    const aboutElement = document.getElementById("about");
    const servicesElement = document.getElementById("services");
    const contactElement = document.getElementById("contact");

    const homePageY = homeElement.getBoundingClientRect().y + scrollTop;
    const aboutPageY = aboutElement.getBoundingClientRect().y + scrollTop;
    const servicesPageY = servicesElement.getBoundingClientRect().y + scrollTop;
    const contactPageY = contactElement.getBoundingClientRect().y + scrollTop;

    $(window).scroll(function () {
        if (document.documentElement.scrollTop > contactPageY) {
            setupContactPage();
        } else if (document.documentElement.scrollTop > servicesPageY) {
            setupServicesPage();

            $("#bottom-circle").css("left", moveCircle(
                servicesPageY,
                contactPageY,
                50,
                document.documentElement.scrollTop,
                110,
                -1
            ) + "%");
        } else if (document.documentElement.scrollTop > aboutPageY) {
            setupAboutPage();

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
            setupHomePage();

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
