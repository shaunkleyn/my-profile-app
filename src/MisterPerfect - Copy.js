/*
* ----------------------------------------------------------------------------------------
Author       : DuezaThemes
Author URL   : https://themeforest.net/user/duezathemes
Template Name: Mister Perfect - Minimal CV/Resume/vCard Template
Version      : 1.0                                          
* ----------------------------------------------------------------------------------------
*/

// -----------------------------

//   js index
/* =================== */
/*  
    -preloader
    -jQuery MeanMenu    
    -meanmenu 
    -meanmenu-blog
    -meanmenu-remove-class
    -progress
    -sticky
    -scroll-up
    -counter
    -smooth scroll
    -Active current menu while scrolling
    -countdown
    -isotope
    -wow js active
    -fancybox
    -testimonial-carousel
    -logo-carousel
    -Ajax Contact Form
*/
// -----------------------------


(function ($) {
    "use strict";



    /*---------------------
    preloader
    --------------------- */

    $(window).on('load', function () {
        $('#preloader').fadeOut('slow', function () { $(this).remove(); });
    });


    /*----------------------------
     jQuery MeanMenu
    ------------------------------ */
    $('nav#dropdown').meanmenu();

    /*-----------------
    meanmenu 
    -----------------*/
    $('nav#mobile_menu_active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.home2-menu',
    });

    /*-----------------
    meanmenu-blog
    -----------------*/
    $('nav#mobile_menu_active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu-area',
    });

    /*------------------------
    meanmenu-remove-class
    ------------------------*/
    $(window).on('resize', function () {
        var wWidth = $(this).width();

        if (wWidth < 991) {
            // removing class
            $('.menu-dropdown').addClass('m-d-removed');
            $('.m-d-removed').removeClass('menu-dropdown');

            $('.thidlevel-menu').addClass('t-h-m-removed');
            $('.t-h-m-removed').removeClass('thidlevel-menu');
        } else {
            // adding class
            $('.m-d-removed').addClass('menu-dropdown');
            $('.menu-dropdown').removeClass('m-d-removed');

            $('.thidlevel-menu').removeClass('t-h-m-removed');
            $('.t-h-m-removed').addClass('thidlevel-menu');
        }
    }).resize();


    /*---------------------
    progress
    --------------------- */
    $('.skills-area').waypoint(function () {
        $('.progress-bar').addClass('left-anim');
    }, {
        triggerOnce: true,
        offset: '50%'
    });


    /*-----------------
    sticky
    -----------------*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 1070) {
            $('.sticky-menu-area').addClass('navbar-fixed-top');
        } else {
            $('.sticky-menu-area').removeClass('navbar-fixed-top');
        }
    });

    /*-----------------
    scroll-up
    -----------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        easingType: 'linear',
        scrollSpeed: 1500,
        animation: 'fade'
    });

    /*------------------------------
         counter
    ------------------------------ */
    $('.counter-up').counterUp();


    /*---------------------
    smooth scroll
    --------------------- */
    $('.smoothscroll').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - 80
        }, 1200);
    });

    /*-----------------------------------------
     Active current menu while scrolling
    -----------------------------------------*/

    $(window).on("scroll", function () {

        activeMenuItem($(".menu-list"));

    });

    // function for active menuitem
    function activeMenuItem($links) {
        var top = $(window).scrollTop(),
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            cur_pos = top + 2,
            sections = $("section"),
            nav = $links,
            nav_height = nav.outerHeight(),
            home = nav.find(" > ul > li:first");


        sections.each(function () {
            var top = $(this).offset().top - nav_height - 40,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find("> ul > li > a").parent().removeClass("active");
                nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active");
            } else if (cur_pos === 2) {
                nav.find("> ul > li > a").parent().removeClass("active");
                home.addClass("active");
            } else if ($(window).scrollTop() + windowHeight > documentHeight - 400) {
                nav.find("> ul > li > a").parent().removeClass("active");
            }
        });
    }


    /*---------------------
    countdown
    --------------------- */
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
        });
    });

    /*---------------------
    isotope
    --------------------- */
    $('#container').imagesLoaded(function () { //image loaded

        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            $('.portfolio-menu').find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });

        // masonary activation
        var $grid = $('.grid_container').isotope({
            itemSelector: '.grid',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid'
            }
        })
    });

    /*----------------------------
     wow js active
    ------------------------------ */
    new WOW().init();


    /*---------------------
    fancybox
    --------------------- */
    $('[data-fancybox]').fancybox({
        image: {
            protect: true
        }
    });


    /*---------------------
    testimonial-carousel
    --------------------- */
    function testimonial_carousel() {
        var owl = $(".testimonial-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: false,
            items: 1,
            smartSpeed: 2000,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                }
            }
        });
    }
    testimonial_carousel();

    /*---------------------
    logo-carousel
    --------------------- */
    function logo_carousel() {
        var owl = $(".logo-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            navigation: true,
            navText: ["<img src='img/home1/left-arrow.png'>", "<img src='img/home1/right-arrow.png'>"],
            nav: true,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            center: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                760: {
                    items: 5
                }
            }
        });
    }
    logo_carousel();

    /*---------------------
    // Ajax Contact Form
    --------------------- */

    $('.cf-msg').hide();
    $('form#cf button#submit').on('click', function () {
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var msg = $('#msg').val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(email)) {
            alert('Please enter valid email');
            return false;
        }

        fname = $.trim(fname);
        lname = $.trim(lname);
        email = $.trim(email);
        phone = $.trim(phone);
        msg = $.trim(msg);

        if (fname != '' && email != '' && msg != '') {
            var values = "fname=" + fname + "&lname=" + lname + "&email=" + email + "&phone=" + phone + " &msg=" + msg;
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: values,
                success: function () {
                    $('#fname').val('');
                    $('#lname').val('');
                    $('#email').val('');
                    $('#phone').val('');
                    $('#msg').val('');

                    $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
                    setTimeout(function () {
                        $('.cf-msg').fadeOut('slow');
                    }, 4000);
                }
            });
        } else {
            $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
        }
        return false;
    });
    //JParticles.commonConfig = {
    //    // Canvas global transparency
    //    opacity: 1,
    //    // Particles color
    //    //color: ['#63e083', '#797979', '#797979'],
    //    resize: true
    //}

    //JParticles.utils.extend(JParticles.easing, {
    //    easeOutBounce: function (x, t, b, c, d) {
    //        if ((t /= d) < (1 / 2.75)) {
    //            return c * (7.5625 * t * t) + b;
    //        } else if (t < (2 / 2.75)) {
    //            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    //        } else if (t < (2.5 / 2.75)) {
    //            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    //        } else {
    //            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    //        }
    //    }
    //});

    //new JParticles.particle('#particles');

}(jQuery));