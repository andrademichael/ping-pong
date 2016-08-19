$(document).ready(function() {

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
      var output = pingPonger(inputNum);
    //   for (var i = 0; i < (output).length; i++) {
    // $("#outputDisplay").text(output[i]);
    //   }
    $("#outputDisplay").text(output);
    $("#num").text(inputNum);
    console.log("main thing ran with input " + inputNum);
    };
  });

//Backend

  var countUp = function(number) {
      var numbers = [];
      for (var i = 0; i < number; i++) {
        numbers.push(1 + i);
      }
      return numbers;
      console.log("countUp ran");
      console.log(numbers);
    };

  var pingPonger = function(arrayInput) {
    return countUp(arrayInput);
    // if((single int being passed from array)% 3 === 0) {
    //   (sibpfa) = "ping."
    //   return that;
    // }
  };
});
