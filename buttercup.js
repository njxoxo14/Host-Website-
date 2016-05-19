$(document).ready(function() {
    $("#chatsubmit").click(function() {
        var text = $("#enter").val();
        $("#chatbox").append(text+"\n");
        $("#enter").val("");
    });
    $("#gameOne").click(function(){
        window.location = "https://www.youtube.com";
    });
    $("#gameTwo").click(function(){
       window.location = "https://www.facebook.com";
    });
    $("#gameThree").click(function(){
       window.location = "https://www.tumblr.com";
    });
    $("#showcase").hover(function(){
        $("#intro").css({'color':'white'});
    });
});