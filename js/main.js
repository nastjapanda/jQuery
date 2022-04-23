$(document).ready(() => {
    $('#slides').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $("#package-selection").tabs();

    $( "#questions" ).accordion({
        collapsible: true,
        active: null
    });

    $('.ui-icon').remove();
});

