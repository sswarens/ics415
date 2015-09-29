/**
 * Created by Shonelle on 9/25/2015.
 */
$(document).ready(function() {
  $("#submission").click(function () {
    var webUrl = $("#website");
    var url = webUrl.value;
    $("#answer").load(url)
      var linkNum = $("a").length;
      document.getElementById("answer").innerHTML = "There are " + linkNum + " links";
  });

  $("#one").click(function () {
    $("#onetext").toggle();
    var txt1 = $("#one").text();
    if (txt1 == "How do you pronounce your name? (+)") {
      $("#one").text("How do you pronounce your name? (-)");
    }
    if (txt1 == "How do you pronounce your name? (-)") {
      $("#one").text("How do you pronounce your name? (+)");
    }
  });
  $("#two").click(function () {
    $("#twotext").toggle();
    var txt2 = $("#two").text();
    if (txt2 == "Why are you here if you're an art major? (+)") {
      $("#two").text("Why are you here if you're an art major? (-)");
    }
    if (txt2 == "Why are you here if you're an art major? (-)") {
      $("#two").text("Why are you here if you're an art major? (+)");
    }
  });
  $("#three").click(function () {
    $("#threetext").toggle();
    var txt3 = $("#three").text();
    if (txt3 == "What kind of art do you do? (+)") {
      $("#three").text("What kind of art do you do? (-)");
    }
    if (txt3 == "What kind of art do you do? (-)") {
      $("#three").text("What kind of art do you do? (+)");
    }
  });
  $("#four").click(function () {
    $("#fourtext").toggle();
    var txt4 = $("#four").text();
    if (txt4 == "Why is your hair green? (+)") {
      $("#four").text("Why is your hair green? (-)");
    }
    if (txt4 == "Why is your hair green? (-)") {
      $("#four").text("Why is your hair green? (+)");
    }
  });
  $("#five").click(function () {
    $("#fivetext").toggle();
    var txt5 = $("#five").text();
    if (txt5 == "Are you hungry? (+)") {
      $("#five").text("Are you hungry? (-)");
    }
    if (txt5 == "Are you hungry? (-)") {
      $("#five").text("Are you hungry? (+)");
    }
  });
});