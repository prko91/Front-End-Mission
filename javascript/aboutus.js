jQuery(document).ready(function () {
    // nav menu 
    $('.navi > li').mouseover(function () {

        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function () {
        $(this).find('.submenu').stop().slideUp(500);
    });
    $('.imgslide a:gt(0)').hide();
    setInterval(function () {
        $('.imgslide a:first-child').fadeOut()
            .next('a').fadeIn()
            .end().appendTo('.imgslide');
    }, 3000);

    $(function () {
// cookies
        if ($.cookie('popup') == 'none') {
            $('#notice_wrap').hide();
        }
        var $expireChk = $('#expireChk');
        $('.closeBtn').on('click', closePop);
        function closePop() {
            if ($expireChk.is(':checked')) {
                $.cookie('popup', 'none', { expires: 3, path: '/' });
            }
            $('#notice_wrap').fadeOut('fast');
        }
    });
// Carousel
    $(function () {
            var owl = $('.owl-carousel');
            owl.owlCarousel({
                items: 3,
                loop: true,
                margin: 5,
                nav: true,
                navText: ['이전', '다음'],
                autoplay: true,
                autoplayTimeout: 1000,
                autoplayHoverPause: true,
            });
            $('.play').on('click', function () {
                owl.trigger('play.owl.autoplay', [1000])
            });
            $('.stop').on('click', function () {
                owl.trigger('stop.owl.autoplay')
            });
        });

});