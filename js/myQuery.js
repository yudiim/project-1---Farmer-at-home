$(document).ready(function(){
    // 네비게이션
    $(".header_gnb .main-menu > li").hover(function () {
        // .slideDown('fast|normal|slow' | ms표기)
        $(".sub-menu",this).stop().slideDown(300);
        $(this).children("a").css({"background-color":"#579f43","color":"#fff"});   
    }, function () {
        // out
        $(".sub-menu").stop().slideUp(300);
        $(".main-menu > li > a").css({"background-color":"transparent","color":"#3f6d30"})
    });

    // 슬라이드쇼
    $(".banner img:gt(0)").hide();
    setInterval(function(){
        $(".banner img:first-child").fadeOut(2000).next().fadeIn(2000).end().appendTo(".banner");
    },3000);

    // 탑버튼
    $("#topBtn").click(function(){
        $('html,body').stop().animate({ scrollTop: 0 });
    });
    var sectionNum;

    $(".main-menu li").click(function(){
        sectionNum = $(this).index();
        sectionScrolling(sectionNum);

    });

    function sectionScrolling(n) {
        $('html,body').stop().animate({
            scrollTop: $('.s1').eq(n).offset().top
        });
    }
    $("html,body").scroll(function(){
        var sectionOT = $("this").offset().top;
        var browserOT = $("html,body").offset().top;
        if (sectionOT == browserOT) {
            alert("!");
        }
    });



});