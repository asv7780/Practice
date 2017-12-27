"use strict"


$(function () {
    $('.persons').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 2000,
                settings: "slick"
            },
            {
                breakpoint: 768,
                settings: "unslick"
            }
        ]
    });
});

var time = 2, cc = 1;
$(window).scroll(function () {
    $('#counter').each(function () {
        var
            cPos = $(this).offset().top,
            topWindow = $(window).scrollTop();
        if (cPos < topWindow + 200) {
            if (cc < 2) {
                $('.facts-counter').addClass('viz');
                $('div').each(function () {
                    var
                        i = 1,
                        num = $(this).data('num'),
                        step = 1000 * time / num,
                        that = $(this),
                        int = setInterval(function () {
                            if (i <= num) {
                                that.html(i);
                            }
                            else {
                                cc = cc + 2;
                                clearInterval(int);
                            }
                            i++;
                        }, step);
                });
            }
        }
    });
});


$(function () {
    $("form[name='userForm']").validate({
        rules: {
            user: {
                required: true
            },
            Email: {
                required: true
            },
            sms: {
                required: true
            }
        },
        messages: {
            user: "Please, enter your name",
            Email: "Please, enter your Email",
            sms: "Please, enter your text"

        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});

function initMap() {
    var centerLatLng = new google.maps.LatLng(49.423631, 26.986471);
    var mapOptions = {
        center: centerLatLng,
        zoom: 16
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

google.maps.event.addDomListener(window, "load", initMap);