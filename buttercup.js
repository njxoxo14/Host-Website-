$(document).ready(function() {
    $("#chatsubmit").click(function() {
        var text = $("#enter").val();
        $("#chatbox").append(text + "\n");
        $("#enter").val("");
    });
    $("#chat").keyup(function(event) {
        if (event.keyCode == 13) {
            $("#chatsubmit").click();
        }
    });
    $("#gameOne").click(function() {
        window.location = "https://www.youtube.com";
    });
    $("#gameTwo").click(function() {
        window.location = "https://www.facebook.com";
    });
    $("#gameThree").click(function() {
        window.location = "https://www.tumblr.com";
    });
    $(".dropdown-content").click(function(){
       window.location= "http://output.jsbin.com/nipop" 
    });
   
});