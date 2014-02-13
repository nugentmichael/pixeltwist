// JavaScript Document

/*----- JavaScript Scroll Snap -----*/

$(function() {
  $("ul.content").snapscroll();
});

$(function() {
  // Button group toggling
  $("ul.btn-group.toggle li").on("click", function() {
    $(this).siblings(".active").removeClass("active")
    $(this).addClass("active")
  })

  var details_closed = true;
  $("#navigation a").on("click", function() {
    if(details_closed) {     
      $(this).siblings("div").fadeIn(200)
    } else {
      $(this).siblings("div").fadeOut(200)
    }
    details_closed = !details_closed;
  })
})