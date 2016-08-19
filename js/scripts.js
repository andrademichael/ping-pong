$(document).ready(function() {
//Backend

  var countUp = function(number) {
      var numbers = [];
      var arrayOutput = [];
      for (var i = 0; i < number - 1; i++) {
        if ((i + 1) % 15 === 0) {
          arrayOutput[i] = "Ping...PONG!";
        } else {
          arrayOutput[i] = [1 + i];
        }
      }
      console.log(numbers);
      return arrayOutput;
      console.log("countUp ran");
    };

  // var pingPonger = function(arrayInput) {
  //   var arrayOutput = arrayInput.slice(0);
  //   console.log(arrayInput);
  //   for (var i = 0; i < arrayInput.length; i++) {
  //     if (arrayInput[i] % 15 === 0) {
  //       arrayOutput[i] = "ping...PONG!";
  //     } elseif {
  //
  //     }
  //   }
  //   return arrayOutput;
  // };

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
      console.log(inputNum);
    } else {
        var output = countUp(inputNum);
        $("#outputList").text("");
        for (var i = 0; i < output.length; i++) {
          $("#outputList").append("<li>" + output[i] + "</li>");
        };
        $("#outputSentence").text("Ok, here's the serve with " + inputNum + " volleys!");
        $("#outputRhetoric").text("Isn't this an exciting game?")
        $("#num").text(inputNum);
        console.log("form submit ran with input " + inputNum);
    };
  });
});
