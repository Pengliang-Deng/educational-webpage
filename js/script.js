$(document).ready(function() {

/* jquery-1 Side Navigation */
$("#side-nav-button").click(function(){
    $("#side-nav").toggle();
});

/* jquery-2 A Slide Down button */

$("#container-two").slideUp();
$(".slide-down").click(function(){

    $("#container-two").slideDown();
    $(".slide-down").text("Yeah!");
    $("#rabbit").attr("src", "images/rabbit-idea.png");
    $("#rabbit").css("max-width", "10%");
});

/* jquery-3 slideshow plugin, using this plugin to make website more fun...*/

/* jquery-4 a go-up button */

$("#go-up-button").click(function(){
    event.preventDefault()
    $("html,body").animate({scrollTop:0},'slow');
  });


/* jquery-5 Alert a message about definition for technical words in explore section for some words*/
/* landfill, sanitary landfill, combustion*/
$(".definition").click(function(){
    var key = $(this).text();
    if (key == "landfill") {
        alert("Landfill:  a site for the disposal of waste materials by burial.");
    }
    else if (key == "sanitary landfill") {
        alert("Sanitary landfill: a site for the disposal of waste materials as well, however, it is more modern and advanced with technologies make it isolated from the environment");
    }
    else if (key == "combustion") {
        alert("Combustion is the process of burning something. The more technical way to say is incineration.");
    }
});

})