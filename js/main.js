$(document).ready(function () {

    var height = $(window).height();
    $(".custom-height").css("height", height);

    $(window).resize(function () {

        var height = $(window).height();
        $(".custom-height").css("height", height);
    });

});