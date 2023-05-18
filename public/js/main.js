$(".navbar__menuIcon").click((e) => {
    e.preventDefault();
    $("#overlay").animate({ height: "100vh" });
    $(".close__btn").removeClass("d-none");
    $("#container").removeClass("d-none");
    $("body").css({ "height": "0" });
});
$(".close__btn").click(function (e) {
    e.preventDefault();
    $("#overlay").animate({ height: "0" }, () => {
        $(".close__btn").addClass("d-none");
        $("#container").addClass("d-none");
        $("body").css({ "overflow-y": "auto" });
    })
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        $(".back-to-top").addClass('scrolled');
    }
    else {
        $(".back-to-top").removeClass('scrolled');
    }
});