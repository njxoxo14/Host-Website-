$(document).ready(function() {
    $("#chatsubmit").click(function() {
        var text = $("#enter").val();
        $("#chatbox").append(text+"\n");
        $("#enter").val("");
    });
});