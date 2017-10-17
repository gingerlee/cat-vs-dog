$(function() {
  $("button.cat").click(function() {
    $("ul.cat").prepend("<li>Meow</li>");
  });
});
