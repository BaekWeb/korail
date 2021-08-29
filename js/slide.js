$(function() {
    var swiper = new Swiper(".slide", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 참조자
  var $this = null;

  $(".slide").find(".play_button").children(".start").on("click", function() {
    $this = $(this);

    change($this);
    swiper.autoplay.stop();
  })

  $(".slide").find(".play_button").children(".stop").on("click", function() {
    $this = $(this);

    change($this);
    swiper.autoplay.start();
  })

  // start & stop 버튼 체인지함수
  function change($this) {
    $this.removeClass("time").siblings().addClass("time");
  }
})