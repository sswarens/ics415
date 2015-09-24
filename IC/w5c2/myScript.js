/**
 * Created by Shonelle on 9/24/2015.
 */

$(document).ready(function(){
  $("#hide").click(function(){
    $("#col-md-12").hide();
    $("#reveal").show();
  });
  $("#show").click(function(){
    $("#col-md-12").show();
    $("#reveal").hide();
  });
  $(document).ready(function(){
    $("#chest").click(function(){
      $("#replace").load("treasure.txt");
    });
  });
});