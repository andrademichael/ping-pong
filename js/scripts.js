$(document).ready(function() {

  //Frontend
  $("form").submit(function(event) {
    $("div").removeClass("has-error");
    event.preventDefault();
    var input = $("#nameInput").val();
    var output = answerParser(input);

    //
    var answerParser = function(name)
    if(!name) {
      $("#numBox").addClass("has-error");
      $("#numHelp").text("Please enter a whole number");
    } else {

      console.log(ruby, java, csharp, design)
      $("img").hide();
      $("div#trackSuggestion").css("backgroundColor", "favColor");
      $("#trackSuggestion").show();
      $("#nameOut").text(name);

      //Which result to display logic
    }
  });
});
