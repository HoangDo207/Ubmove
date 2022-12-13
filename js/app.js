(function ($) {
  var body = $("body");

  var campaignPromotion = new Swiper(".campaignPromotion", {
    navigation: {
      nextEl: ".campaignPromotion .swiper-button-next",
      prevEl: ".campaignPromotion .swiper-button-prev",
    },
  });

  var eventYear = new Swiper(".eventYear", {
    slidesPerView: 5,
    spaceBetween: 16,
    navigation: {
      nextEl: ".um-event-filter-slide .swiper-button-next",
      prevEl: ".um-event-filter-slide .swiper-button-prev",
    },
  });

  var showAll = $(".show-all-item");
  var hiddenAll = $(".hidden-all-item");
  hiddenAll.css("display", "none");
  var collapseItems = $(".schedule-collapse-content");

  showAll.on("click", function (e) {
    e.preventDefault();
    $(this).css("display", "none");
    collapseItems.each((ind, el) => $(el).collapse("show"));
    $(this).siblings("button").css("display", "block");
  });

  hiddenAll.on("click", function (e) {
    e.preventDefault();
    $(this).css("display", "none");
    collapseItems.each((ind, el) => $(el).collapse("hide"));
    $(this).siblings("button").css("display", "block");
  });

  var toggleSlider = $(".sidebar-toggle");

  toggleSlider.on("click", function (e) {
    e.preventDefault();
    body.toggleClass("sidebar-collapse");
  });

  $(".select2").select2({});

  var sidebarHeight = $(window).outerHeight() || 0;
  var headerHeight = $(".header").outerHeight() || 0;
  console.log(headerHeight);

  $(".main-content").css("min-height", sidebarHeight - headerHeight);
})(jQuery);
