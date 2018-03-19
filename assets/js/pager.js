$(document).ready(function() {
      $("#gallery-2").hide();
      $("#gallery-1").show();
    
    $('#next').click(function(){
      $("#gallery-2").show();
      $("#gallery-1").hide();
    });
    
    $('#prev').click(function(){
      $("#gallery-2").hide();
      $("#gallery-1").show();
    });
});