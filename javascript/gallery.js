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
    
// Bxslide
    $(function () {
        $('.slide_gallery').bxSlider({
            auto: true,
            autoControls: true,
            speed: 500,
            pause: 1000,
            stopAutoOnClick: true,
            pager: true
            // slideWidth: 600
        });
    });    
});