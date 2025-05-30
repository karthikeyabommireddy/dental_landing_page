$(".bottom-sec-3-feature-item").click(function() {
  if ($(this).hasClass("no-action")) return;

  $(".bottom-sec-3-feature-item").removeClass("active");
  $(".bottom-sec-3-toggle-btn").text("+");

  $(this).addClass("active");
  $(this).find(".bottom-sec-3-toggle-btn").text("-");

  var imgSrc = $(this).attr("data-img");
  var descText = $(this).attr("data-desc");

  $(".bottom-sec-3-img").attr("src", "img/" + imgSrc);
  $(".bottom-sec-3-desc").text(descText);
});
