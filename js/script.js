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


/* Navigation scroll */

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });