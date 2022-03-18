$(document).ready(function(){
  $("#about-btn").click(function() {
    $("#about").removeClass("d-none");
    $("#intro-container").addClass("d-none");
  });
  $("#intro-btn").click(function() {
    $("#about").addClass("d-none");
    $("#intro-container").removeClass("d-none");
  });
});
