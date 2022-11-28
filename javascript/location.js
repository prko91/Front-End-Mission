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

    // KAKAO MAPS
    $(function () {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(37.50339, 126.88037), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption);

        // 마커가 표시될 위치입니다 
        var markerPosition = new kakao.maps.LatLng(37.50339, 126.88037);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        var iwContent = '<div style="padding:5px;">남율건설<br><a href="https://map.kakao.com/link/map/남율건설,37.50339, 126.88037" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/남율건설,37.50339, 126.88037" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwPosition = new kakao.maps.LatLng(37.50339, 126.88037); //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            position: iwPosition,
            content: iwContent
        });

        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        infowindow.open(map, marker);
    });
});