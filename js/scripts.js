$(document).ready(function() {
//Backend
  var countUp = function(number) {
      var arrayOutput = [];
      for (var i = 0; i < number; i++) {
        if ((i + 1) % 15 === 0) {
          arrayOutput[i] = "Ping...PONG!";
        } else if ((i + 1) % 5 === 0) {
          arrayOutput[i] = "Pong.";
        } else if ((i + 1) % 3 === 0) {
          arrayOutput[i] = "Ping!";
        } else {
          arrayOutput[i] = [1 + i];
        }
      }
      return arrayOutput;
    };
//Frontend
  $("#inputForm").submit(function(event) {
    $("div").removeClass("has-error");
    event.preventDefault();
    $("#inputBox").removeClass("has-error");
    $("#inputHelp").text("");
    var inputNum = parseInt($("#inputBox").val());
    if(!inputNum) {
      $("#inputBox").addClass("has-error");
      $("#inputHelp").text("...Please, enter a whole number?");
    } else {
        var output = countUp(inputNum);
        $("#outputList").text("");
        for (var i = 0; i < output.length; i++) {
          $("#outputList").append("<li>" + output[i] + "</li>");
        };
        $("#outputSentence").text("Ok, here's the serve with " + inputNum + " volleys!");
        $("#outputRhetoric").text("Isn't this an exciting game?")
        $("#num").text(inputNum);
    };
  });
});
