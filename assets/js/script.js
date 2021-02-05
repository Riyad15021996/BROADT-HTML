(function($) {
    'use strict'

    /*
    ========================================
    Preloader
    ========================================
    */
    $(window).on('load', function() {
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    });

    /* ===============================================
        AddClass menu js
       ===============================================
    */

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("#navigation").addClass("shrinkheader");
        } else {
            $("#navigation").removeClass("shrinkheader");
        }
    });

    /* ===============================================
            sidebar menu js
        ===============================================
    */
    if ($('#sidebar').length) {
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });

        $('#dismiss, .overlay').on('click', function() {
            $('#sidebar').removeClass('active');
            $('.overlay').removeClass('active');
        });

        $('#sidebarCollapse').on('click', function() {
            $('#sidebar').addClass('active');
            $('.overlay').addClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    }

    /* 
    ========================================
        portfolio Isotope Masonry
    ========================================
    */
    $('.img-loader').imagesLoaded(function() {
        var $grid = $('.masonry-img').isotope({
                itemSelector: '.masonry-single',
                percentPosition: true,
                masonry: {
                    columnWidth: '.masonry-single'
                }
            })
            // filter items on button click
        $('.filter-change').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        //for filter button active class
        $('.filter-change button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });
    /* 
    ========================================
        Tab
    ========================================
    */
    $(document).ready(function() {
        $('ul.click-tabs li').click(function() {
            var tab_id = $(this).attr('data-tab');

            $('ul.click-tabs li').removeClass('active');
            $('.tab-content').removeClass('active');

            $(this).addClass('active');
            $("#" + tab_id).addClass('active');
        })
    });
    /*
    ========================================
        Counter-Up
    ========================================
    */
    $(document).ready(function() {
        $('.counter').countUp();
    });
    /*
    ========================================
        Owl Carousel
    ========================================
    */
    $(document).ready(function() {
        var herofourslider = $('.hero-four-slider');
        herofourslider.owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-angle-left"></i><i class="fas fa-angle-right"></i>'],
            autoplayHoverPause: true,
            autoplay: true,
            autoplaySpeed: 1200,
            smartSpeed: 700,
            animateOut: 'fadeOut',
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        // Listen to owl events:
        herofourslider.on('translate.owl.carousel', function(event) {
            $('.hero3-inner a').removeClass('animated zoomIn')
            $('.hero3-inner h4').removeClass('animated zoomIn')
            $('.hero3-inner h1').removeClass('animated slideInRight')
            $('.hero3-inner p').removeClass('animated slideInLeft')
            $('.hero4-bg').removeClass('animated slideInUp')
        })
        herofourslider.on('translated.owl.carousel', function(event) {
            $('.hero3-inner a').addClass('animated zoomIn')
            $('.hero3-inner h4').addClass('animated zoomIn')
            $('.hero3-inner h1').addClass('animated slideInRight')
            $('.hero3-inner p').addClass('animated slideInLeft')
            $('.hero4-bg').addClass('animated slideInUp')
        })
    });


    /*
    ========================================
        Owl Carousel
    ========================================
    */
    $('.about-single-slide').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        navText: ['<i class="fas fa-angle-left"></i><i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    /*
    ========================================
        Slick Slider
    ========================================
    */
    $('.blog-right-slide').slick({
        arrows: true,
        dots: false,
        fade: false,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i>',
    });
    /*
    ========================================
        Slick Slider
    ========================================
    */

    $('.image-slides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.click-slides'
    });
    $('.click-slides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.image-slides',
        dots: false,
        centerMode: false,
        focusOnSelect: false,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    });
    /*
       ========================================
           About-testimonial
       ========================================
       */
    $('.about-image-slides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        asNavFor: '.about-click-slides'
    });
    $('.about-click-slides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.about-image-slides',
        dots: false,
        centerMode: false,
        focusOnSelect: false,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i>',
    });

    /*
    ========================================
        Parallax
    ========================================
    */

    jarallax(document.querySelectorAll('.parallax'), {
        // options here
        speed: 0.3,
    });

    /*
    ========================================
        Accordion
    ========================================
    */
    var $titleTab = $('.title_tab');
    $('.Accordion_item:eq(0)').find('.title_tab').addClass('active').next().stop().slideDown(300);
    $('.Accordion_item:eq(0)').find('.inner_content').find('p').addClass('show');
    $titleTab.on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().stop().slideUp(500);
            $(this).next().find('p').removeClass('show');
        } else {
            $(this).addClass('active');
            $(this).next().stop().slideDown(500);
            $(this).parent().siblings().children('.title_tab').removeClass('active');
            $(this).parent().siblings().children('.inner_content').slideUp(500);
            $(this).parent().siblings().children('.inner_content').find('p').removeClass('show');
            $(this).next().find('p').addClass('show');
        }
    });

    /*
    ========================================
        SearchBar
    ========================================
    */

    if ($('.click-search').length) {
        $(".click-search").on('click', function() {
            $(".search-box").toggle();
            /* $("input[type='text']").focus(); */
        });
    }
    /*
    ========================================
        Aos Animation
    ========================================
    */
    AOS.init();

})(jQuery);