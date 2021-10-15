(function($) {
    "use strict";

    // menu 
    $('.siteBar-btn').click(function() {
        $('.mobile-menu').toggleClass('siteBar');
    });


    // owlCarousel
    $(".hero_slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: false,
        dots: true
    });

    // owlCarousel
    $(".gelaria_slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        navText: [
            '<i class="fal fa-chevron-left"></i>',
            '<i class="fal fa-chevron-right"></i>'
        ],
        nav: true,
        dots: false
    });

    // owlCarousel
    $(".sv_slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        navText: [
            '<i class="fal fa-chevron-left"></i>',
            '<i class="fal fa-chevron-right"></i>'
        ],
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            470: {
                items: 2
            },
            767: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    /* magnificPopup img view */
    $(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });


})(jQuery);