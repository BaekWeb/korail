$(function() {

    // 참조자
    var $tab = $(".content > .reservation > .tab > .tab_item");
    var mo_button = $(".content > .mo_reservation");


    // tabbar
    $tab.each(function() {
        $(this).children("h3").on("click", function() {
            $(".tabShow").removeClass("tabShow");
            $(this).addClass("tabShow").next("div").addClass("tabShow");
        })
    })

    // 모바일 상태일때 버튼 - open 
    mo_button.find(".button > .open").on("click", function() {
        $(this).removeClass("click").next(".close").addClass("click").parents(".mo_reservation").next(".reservation").addClass("show");
    })

    // 모바일 상태일때 버튼 - close 
    mo_button.find(".button > .close").on("click", function() {
        $(this).removeClass("click").prev(".open").addClass("click").parents(".mo_reservation").next(".reservation").removeClass("show");
    })
}); 
