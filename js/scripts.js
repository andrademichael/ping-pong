$(document).ready(function() {

//Frontend
  $("#inputForm").submit(function(event) {
    $("div").removeClass("has-error");
    event.preventDefault();
    $("#inputBox").removeClass("has-error");
    $("#inputHelp").text("");

    var inputNum = parseInt($("#inputBox").val());
    var pingParser = function(pingInput) {

    };
    if(!inputNum) {
      $("#inputBox").addClass("has-error");
      $("#inputHelp").text("...Please, enter a whole number?");
      console.log(inputNum);
    } else {
      var output = pingParser(inputNum);

    $("#outputDisplay").show;
    console.log("main thing ran");
    };
  });

//Backend
  var answerParser = function(name) {
  //
  // var func = function() {
  //
  // };
  // if((single int being passed from array)% 3 === 0) {
  //    (sibpfa) = "ping."
  //    return that

  // };
  };
});
