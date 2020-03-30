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
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            }
        }

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
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

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
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 6
            }
        }

    });
});


/* ===================================
             Navbar
===================================== */

$(function () {
    $(window).scroll(function () {
        showHideNav();
    })

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            $("nav").addClass("white-nav-top");
            $(".navbar-brand img").attr("src", "/img/logo/logo-dark.png");
            $("#back-to-top").fadeIn();

        } else {
            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src", "/img/logo/logo.png");
            $("#back-to-top").fadeOut();
        }
    }
})


/* ===================================
        Navigation scroll
===================================== */


// Smooth Scrolling

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top
        }, 1250, "easeInOutExpo")
    })
})

$(function () {
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    })

    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    })
})