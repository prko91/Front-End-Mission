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

    // vegas img slide

    $('.imgslide').vegas({
        delay: 3000,
        slides: [
            { src: 'images/ch-1.jpg' },
            { src: 'images/ch-2.jpg' },
            { src: 'images/ch-3.jpg' },
            { src: 'images/ch-4.jpg' },
            { src: 'images/ch-5.jpg' },
            { src: 'images/ch-6.jpg' },
            { src: 'images/ch-7.jpg' },
            { src: 'images/ch-8.jpg' },
            { src: 'images/ch-9.jpg' },
            { src: 'images/ch-10.jpg' }
        ]
    });

    // modal popup
    $(function () {
        $('.notice > li > a').click(function () {
            $(this).parent().addClass("active")
                .siblings().removeClass("active")

            return false;
        });
    });
    $(".notice li:first").click(function () {
        $("#layer").addClass("active");
    });

    $(".btn").click(function () {
        $("#layer").removeClass("active")
    });
});