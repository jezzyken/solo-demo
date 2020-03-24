/* ===================================
                PRELOADER
===================================== */

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* ===================================
                Team
===================================== */

$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

    });
});

/* ===================================
             Progress Bar
===================================== */

$(function () {
    $('#progress-elements').waypoint(function () {

        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 700)
        })
        this.destroy();

    }, {
        offset: 'bottom-in-view'
    })
});

/* ===================================
            Service Tabs
===================================== */
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

/* ===================================
           Portofolio
===================================== */

$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({

    });

    // Filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portofolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* ===================================
             Magnifier
===================================== */

$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })
})

/* ===================================
             Testimonials
===================================== */

$(function () {
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: false,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

    });
});


/* ===================================
             Counter
===================================== */

$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1000
    })
});


/* ===================================
             Clients
===================================== */

$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],

    });
});