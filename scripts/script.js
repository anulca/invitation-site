$(document).ready(function() {
  $('a[href^="#"]').click(function() {
      $("#menu").hide(600);
    });
  $("#menu-button").click(function() {
    
    $("#menu")
      .stop()
      .slideToggle(300);
  });
  $('a[href^="#"]').on("click", function(event) {
    var target = $($(this).attr("href"));

    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        500
      );
    }
  });
});
