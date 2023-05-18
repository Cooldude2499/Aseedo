
$(".navbar__menuIcon").click((e) => {
    $(".sidebar").animate({ left: "0%" });
    $(".navbar__menuIcon").css("display","none")
    $(".close__btn").css("display", "block")
})


$(".close__btn").click((e) => {
    $(".sidebar").animate({ left: "-100%" });
    $(".close__btn").css("display","none")
    $(".navbar__menuIcon").css("display", "block")
})

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        $(".back-to-top").addClass('scrolled');
    }
    else {
        $(".back-to-top").removeClass('scrolled');
    }
});