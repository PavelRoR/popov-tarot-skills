//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend slick.min.js
//@prepros-prepend popup.js
//@prepros-prepend flipclock.min.js

$(document).ready(function () {
    /* Якорь */
    $("a[href='#prices']").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });
    $(function () {
        $('.lesson-title').click(function () {
            if (!$(this).hasClass('lesson-title-active')) {
                $(this).addClass('lesson-title-active').children('span').css('transform', 'rotate(225deg)');
                $(this).next().slideDown(500);
            }
            else {
                $(this).removeClass('lesson-title-active').children('span').css('transform', 'rotate(45deg)');
                $(this).next().slideUp(500);
            }
        })
    });
    $('.modal-up').magnificPopup({
        type: 'inline',
        midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
        mainClass: 'mfp-fade'
    });
    /* Таймер */
    $(function () {
        var clock;
        var dates = new Array(
            new Date("August 14, 2020 13:52 UTC+3"),
            new Date("August 15, 2020 13:53 UTC+3"),
            new Date("August 16, 2020 13:54 UTC+3")
        );

        var currentDate = new Date();

        var sale1 = {
            name: $('#sale-1'),
            saleText: new Array('1 000р.', '500р.')
        };
        var sale2 = {
            name: $('#sale-2'),
            saleText: new Array('2 000р.', '1 000р.')
        };
        var sale3 = {
            name: $('#sale-3'),
            saleText: new Array('4 000р.', '2 000р.')
        };
        var today1 = {
            name: $('#today-1'),
            todayText: new Array('14 400р.', '14 900р.')
        };
        var today2 = {
            name: $('#today-2'),
            todayText: new Array('29 900р.', '30 900р.')
        };
        var today3 = {
            name: $('#today-3'),
            todayText: new Array('49 900р.', '51 900р.')
        };
        var link1 = {
            name: $('#link-1'),
            linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=5227&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=5228&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=5229&clean=true&lg=ru')
        };
        var link2 = {
            name: $('#link-2'),
            linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=5231&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=5232&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=5233&clean=true&lg=ru')
        };
        var link3 = {
            name: $('#link-3'),
            linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=5235&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=5236&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=5237&clean=true&lg=ru')
        };
        var prep_link = {
            name: $('#prepayment-link'),
            linkText: new Array('https://shop.mastervision.su/?r=ordering/cart/as1&id=5241&clean=true&lg=ru', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=5242&clean=true&lg=ru')
        }
        if (currentDate < dates[0]) {
            var futureDate = dates[0];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        sale1.name.text(sale1.saleText[0]);
                        sale2.name.text(sale2.saleText[0]);
                        sale3.name.text(sale3.saleText[0]);
                        today1.name.text(today1.todayText[0]);
                        today2.name.text(today2.todayText[0]);
                        today3.name.text(today3.todayText[0]);
                        link1.name.attr('href', link1.linkText[0]);
                        link2.name.attr('href', link2.linkText[0]);
                        link3.name.attr('href', link3.linkText[0]);
                        prep_link.name.attr('href', prep_link.linkText[0]);
                    }
                }
            });
        } else if ((currentDate >= dates[0]) && (currentDate < dates[1])) {
            var futureDate = dates[1];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        sale1.name.text(sale1.saleText[1]);
                        sale2.name.text(sale2.saleText[1]);
                        sale3.name.text(sale3.saleText[1]);
                        today1.name.text(today1.todayText[1]);
                        today2.name.text(today2.todayText[1]);
                        today3.name.text(today3.todayText[1]);
                        link1.name.attr('href', link1.linkText[1]);
                        link2.name.attr('href', link2.linkText[1]);
                        link3.name.attr('href', link3.linkText[1]);
                        prep_link.name.attr('href', prep_link.linkText[1]);
                    }
                }
            });
        } else {
            var futureDate = dates[2];
            var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'HourlyCounter',
                countdown: true,
                language: 'ru',
                callbacks: {
                    stop: function () {
                        $('.prepayment, .timer,  .cost-sale, .cost-today').remove();
                        $('.cost-full span').addClass('unbroken');
                        link1.name.attr('href', link1.linkText[2]);
                        link2.name.attr('href', link2.linkText[2]);
                        link3.name.attr('href', link3.linkText[2]);
                    }
                }
            });
        }
    });
    $('.revs').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 300,
        arrows: true,
        centerPadding: '15px',
        // adaptiveHeight: true,
        centerMode: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 385,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });
    /*Видео-отзывы*/
    $(".video-wrapper-rev img").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1"  allowfullscreen></iframe>')
    });
    $('.revs-video').on('swipe', function (event, slick, direction) {
        $('.video-wrapper-rev iframe').each(function () {
            // var v =$('.video_rev_img');
            var l = $(this).parent().attr('data-img');
            $(this).parent().html('<img src="' + l + '" alt="Видео отзыв">');
            console.log(l);
        });
        $(".video-wrapper-rev img").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?mute=1&showinfo=0&rel=0&autoplay=1&modestbranding=1"  allowfullscreen></iframe>');
            console.log(a);
        });
    });
    $('.revs-video .slick-arrow').on('click', function () {
        $('.video-wrapper-rev iframe').each(function () {
            // var v =$('.video_rev_img');
            var l = $(this).parent().attr('data-img');
            $(this).parent().html('<img src="' + l + '" alt="Видео отзыв">');
            console.log(l);
        });
        $(".video-wrapper-rev img").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?mute=1&showinfo=0&rel=0&autoplay=1&modestbranding=1"  allowfullscreen></iframe>');
            console.log(a);
        });
    });
    $('.revs-text-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
            preload: [0, 2], // read about this option in next Lazy-loading section

            navigateByImgClick: true,

            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }
    });
});
    /*Конец документа*/
