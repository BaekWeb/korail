$(function() {
    // 참조자
    var $drop = $(".header .nav > ul > li");
    var $side_menu_button = $(".bar .side_menu_button");
    
    var $sideMenu = $('.sideMenu');
    var $dropdown = $(".sideMenu .side_nav > ul > li > h3");
    var $close = $sideMenu.find(".side_header").children(".close");


    // drop
    $drop.each(function() {
        $(this).hover(
            function() {$(this).children(".dropdown").addClass("drop").parents(".nav").addClass("on");},
            function() {$(this).children(".dropdown").removeClass("drop").parents(".nav").removeClass("on");}
        )
    });

    // 사이드메뉴 open
    $side_menu_button.on("click", function() {
        $sideMenu.fadeIn(300).children('.side_content').animate({
            right: 0,
        }, 1000);
    });

    // 사이드메뉴 close
    $close.on('click', function() {
        close()

        $(".dropdown:visible").slideUp();
        $(".on").removeClass("on");
    })

    // close 함수
    function close() {
        $sideMenu.children('.side_content').animate({
            right: -100 + '%',
        }, 1000, function() {
            $sideMenu.fadeOut(300);
        })
    }

    // 사이드메뉴 drop
    $dropdown.on("click", function(event) {
        event.preventDefault();
        if ($(this).next(".dropdown").is(":visible")) {
            $(this).removeClass("on").next(".dropdown").slideUp();
        } else {
            $(".dropdown:visible").slideUp();
            $(".on").removeClass("on");
            $(this).addClass("on").next(".dropdown").slideDown();
        }
    });
});
