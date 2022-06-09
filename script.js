$(document).ready( function(){
    $("#example").hover ( function(){
        $(this).css({"background-color": "#00FFFF", "text-decoration": "underline"});
        $("#example > p").text("You're hovering on me!");
        $("body").css({"background-color": "black"});
    },
    function(){
        $(this).css({"background-color": "#FF00FF", "text-decoration": "none"});
        $("#example > p").text("Do it again!!!");
        $("body").css({"background-color": "#CCCCAA"});
    })
});