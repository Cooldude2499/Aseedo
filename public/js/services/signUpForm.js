// Service
$('.service-btn').on("click", function (e) {
    e.preventDefault();
    $(this).addClass("active");
    $(".btn-text").addClass('faded');
    $(this).children('p').removeClass('faded');
    $('.product-btn, .greens-btn, .social-service-btn').removeClass('active')
    $('.product-form, .greens-form, .social-service-form').addClass('d-none')
    $('.greens-btn .fa-plus, .product-btn .fa-plus, .greens-btn .fa-plus').addClass('active-btn').removeClass('d-none')
    $('.greens-btn .fa-minus, .product-btn .fa-minus, .greens-btn .fa-minus').addClass('d-none').removeClass('active-btn')
    $(this).children('.d-none,.active-btn').toggleClass('active-btn d-none');
    $('.form.service-form').toggleClass('d-none');
    if ($(window).width() >= 992) {
        $('.active-form').addClass('d-none').removeClass('active-form')
        $('.form-large.service-form').removeClass('d-none').addClass('active-form');
        if ($(".active").hasClass("service-btn")) {
            $('.form-large').addClass('d-none');
        }
        if ($(".active").hasClass("product-btn")) {
            $('.form-large').addClass('d-none');
        }
        if ($(".active").hasClass("greens-btn")) {
            $('.form-large').addClass('d-none');
        }
        if ($(".active").hasClass("social-service-btn")) {
            $('.form-large').addClass('d-none');
        }
    }
})

// Product
$('.product-btn').on("click", function (e) {
    e.preventDefault();
    $(this).addClass("active");
    $(".btn-text").addClass('faded');
    $(this).children('p').removeClass('faded');
    $('.service-btn, .greens-btn, .social-service-btn').removeClass('active')
    $('.service-form, .greens-form, .social-service-form').addClass('d-none');
    $('.service-btn .fa-plus, .greens-btn .fa-plus, .social-service-btn .fa-plus').addClass('active-btn').removeClass('d-none');
    $('.service-btn .fa-minus, .greens-btn .fa-minus, .social-service-btn .fa-minus').addClass('d-none').removeClass('active-btn');
    $(this).children('.d-none,.active-btn').toggleClass('active-btn d-none');
    $('.form.product-form').toggleClass('d-none');
    if ($(window).width() >= 992) {
        $('.active-form').addClass('d-none').removeClass('active-form')
        $('.form-large.product-form').removeClass('d-none').addClass('active-form');
        if ($(".active").hasClass("service-btn")) {
            $('.form-large').addClass('d-none');
        }
        if ($(".active").hasClass("product-btn")) {
            $('.form-large').addClass('d-none');
        }
        if ($(".active").hasClass("greens-btn")) {
            $('.form-large').addClass('d-none');
        }
        if ($(".active").hasClass("social-service-btn")) {
            $('.form-large').addClass('d-none');
        }
    }
})

// Greens
$('.greens-btn').on("click", function (e) {
    e.preventDefault();
    $(this).addClass("active");
    $(".btn-text").addClass('faded');
    $(this).children('p').removeClass('faded');
    $('.product-btn, .service-btn, .social-service-btn').removeClass('active')
    $('.service-form, .product-form, .social-service-form').addClass('d-none');
    $('.service-btn .fa-plus, .product-btn .fa-plus, .social-service-btn .fa-plus').addClass('active-btn').removeClass('d-none');
    $('.service-btn .fa-minus, .product-btn .fa-minus, .social-service-btn .fa-minus').addClass('d-none').removeClass('active-btn');
    $(this).children('.d-none,.active-btn').toggleClass('active-btn d-none');
    $('.form.greens-form').toggleClass('d-none');
    if ($(window).width() >= 992) {
        $('.active-form').addClass('d-none').removeClass('active-form')
        $('.form-large.greens-form').removeClass('d-none').addClass('active-form');
        if ($(".active").hasClass("service-btn")) {
            $('.form-large').addClass('d-none');
        }
        if ($(".active").hasClass("product-btn")) {
            $('.form-large').addClass('d-none');
        }
        if ($(".active").hasClass("greens-btn")) {
            $('.form-large').addClass('d-none');
        }
        if ($(".active").hasClass("social-service-btn")) {
            $('.form-large').addClass('d-none');
        }
    }
})

// Social Service
$('.social-service-btn').on("click", function (e) {
    e.preventDefault();
    $(this).addClass("active");
    $(".btn-text").addClass('faded');
    $(this).children('p').removeClass('faded');
    $('.product-btn, .greens-btn, .service-btn').removeClass('active');
    $('.service-form, .greens-form, .product-form').addClass('d-none');
    $('.service-btn .fa-plus, .product-btn .fa-plus, .greens-btn .fa-plus').addClass('active-btn').removeClass('d-none');
    $('.service-btn .fa-minus, .product-btn .fa-minus, .greens-btn .fa-minus').addClass('d-none').removeClass('active-btn');
    $(this).children('.d-none,.active-btn').toggleClass('active-btn d-none');
    $('.form.social-service-form').toggleClass('d-none');
    if ($(window).width() >= 992) {
        $('.active-form').addClass('d-none').removeClass('active-form')
        $('.form-large.social-service-form').removeClass('d-none').addClass('active-form');
        if ($(".active").hasClass("service-btn")) {
            $('.form-large').addClass('d-none');
        }
        if ($(".active").hasClass("product-btn")) {
            $('.form-large').addClass('d-none');
        }
        if ($(".active").hasClass("greens-btn")) {
            $('.form-large').addClass('d-none');
        }
        if ($(".active").hasClass("social-service-btn")) {
            $('.form-large').addClass('d-none');
        }
    }
})


