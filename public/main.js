var introLines = [`^1500Hi there!^500 I'm Will.^1500`, 
                  `^I like clean, modular code, creative problem-solving, Pop-Tarts&trade; and fantasy football.^1500`];

$(document).ready(function() {
    // Stop the typing on a click
    $(".about").click(shortCircuit);

    /* Hide everything, bring in the header, then start typing and bring in each successive
    * line recursively */
    $(".short-circuit").hide();
    $(".after-intro").hide();
    $(".copyright").hide();
    $(".header").hide().slideDown('slow', nextLine(0));
});


 function shortCircuit(e) {
    $(".intro-text-0").parent().hide();
    $(".short-circuit").fadeIn("fast");
    $(".after-intro").fadeIn("slow");
    $(".copyright").fadeIn("slow");
 }

function nextLine(line) {
     return function() {
         if (line < introLines.length) {
             $(".typed-cursor").fadeOut("fast");
             $(".intro-text-" + line).typed({
                 strings: [introLines[line]],
                 typeSpeed: 1,
                 cursorChar: " |",
                 callback: nextLine(line + 1)
             })
         }
         else {
             $(".after-intro").fadeIn("slow");
             $(".copyright").fadeIn("slow");
         }
     }
 };