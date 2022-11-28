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

    jQuery.fn.putCursorAtEnd = function () {
        return this.each(function () {
            if (this.setSelectionRange) {
                var len = $(this).val().length * 2;
                this.setSelectionRange(len, len);
            } else {
                $(this).val($(this).val());
            }
        });
    };

    // Pallarax 
    $(function () {
        $('.scroll').click(function (e) {
            // 이벤트가 발생했을 때의 기본 동작,
            // 즉 #ms1 이나 #ms2로 즉시 이동하는 동작을 취소합니다.
            e.preventDefault();
            // animate(height, speed) 메서드로 지정한
            // 시간 동안 현재 해시의 top 오프셋 값(맨 위에서부터 섹션까지의 오프셋 값)을 스크롤 했을 때의 위치값으로 바꿉니다. 예를 들어, "CH07 KBS"를 클릭하면, 문서 맨 윗부분에서 #ms2까지의 top 위치까지 500밀치(0.5초) 동안 스크롤해서 이동합니다. 그리고, 브라우저로 확인해 보면 링크를 클릭했을 때 해당 위치까지 스크롤하듯 천천히 이동하는 것을 볼 수 있습니다.
            $('html, body').animate(
                { scrollTop: $(this.hash).offset().top }, 500);
        });
        // 브라우저 창의 크기를 조절했을 때 내용 전체가 브라우저 창의 너비와 높이에 딱맞게 표시되도록 jQuery를 사용해 브라우저 창의 크기를 알아낸 후 현재 문서의 너비와 높이로 지정해야 합니다. 그러면, 섹션이 화면에 가득차게 만드는 효과 구현이 가능합니다.
        $(window).resize(function () {
            $('.container').width($(window).width()).height($(window).height());
        });

        setTimeout(function () {
            $(window).resize()
        },
            1000);

        // .bg-holder 요소에서 parallaxScroll을 실행합니다.
        $('.bg-holder').parallaxScroll({
            // parallax-scroll 플러그인의 옵션은 friction 옵션 하나뿐입니다. 이 옵션 값은 0에서 1사이의 소수로 표시하는데, 0이면 배경 이미지가 콘텐츠를 따라 스크롤 되고, 1이면 배경이 완전히 고정되어 콘텐츠만 스크롤 됩니다. 0과 1사이의 값을 적절히 사용하면 콘텐츠와 배경의 스크롤 속도를 다르게해서 패럴랙스 효과를 낼 수 있습니다.
            friction: 0.3
        });
    });

});