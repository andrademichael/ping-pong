$(document).ready(function() {

//Frontend
  $("form").submit(function(event) {
    $("div").removeClass("has-error");
    event.preventDefault();
    var input = $("#nameInput").val();
    var output = answerParser(input);

//Backend
  var answerParser = function(name)
  if(!name) {
    $("#numBox").addClass("has-error");
    $("#numHelp").text("Please enter a whole number");
  } else {

  }
  });
});
