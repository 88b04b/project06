$(function () {

    $(window).on('scroll', function () {
        let scrollTop = $(window).scrollTop();
        scrollTop > 0 ? $('.header').addClass('fixed') : $('.header').removeClass('fixed');
        scrollTop > 400 ? $('.to_top').addClass('active') : $('.to_top').removeClass('active');
    });

    $(window).on('scroll', function () {
        let scrollTop = $(window).scrollTop();
        $('.scroll_event').each(function () {
            if (scrollTop + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('scrolled');
            } //else {
            //$(this).removeClass('scrolled');
            //}
        });
    });


    $('.visual .play').on('click', function () {
        $('.visual video').trigger('play');
    });

    $('.visual .pause').on('click', function () {
        $('.visual video').trigger('pause');
    });

    var swiper = new Swiper(".introduce_slide", {
        pagination: {
            el: ".swiper-pagination",
        },
        loop: true,
        navigation: {
            prevEl: ".arrows .left",
            nextEl: ".arrows .right"
        },
    });

    $('.product_list li').on('click', function () {
        let idx = $(this).index();
        $('.product_list li').eq(idx).addClass('active').siblings().removeClass('active');
        $('.product_cont li').eq(idx).addClass('active').siblings().removeClass('active');
    });

    $('.family_link').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

});