$(function() {
  $("button.cat").click(function() {
    $("ul.cat").prepend("<li>Meow</li>");
    $("ul.dog").prepend("<li>What?</li>");
  });

  $("button.dog").click(function() {
    $("ul.dog").prepend("<li>Bark</li>");
    $("ul.cat").prepend("<li>I'm so over you!</li>");
  });

  $("button.image").click(function() {
    $("img#pizza").show();
  });

});
