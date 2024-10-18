$(document).ready(function() {

    $('#menu').click(function() {
        $(this).toggleclass('fa-times');
        $('.navbar').toggleclass('nav-toggle');

    });

    $(window).on('scroll load', function() {
        $('#menu').removeclass('fa-times');
        $('.navbar').removeclass('nav-toggle');

        if ($(window).scrolltop() > 60) {
            $('header').addclass('header-active');
        } else {
            $('header').removeclass('header-active');

        }

        $('section').each(function() {

            let top = $(window).scrolltop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if (top >= offset && top < offset + height) {
                $('.navbar ul li a').removeclass('active');
                $('.navbar').find('href="#$(id)"').addclass('active');
            }

        })

    });
})