var introLines = [`^1500Hi there!^500 I'm Will.^1500`, `^I'm a creative, passionate software engineer who believes in clean, modular, 
human-focused code.^1500`,`I also love barbecue, single-malt Scotch, playing my trumpet, and worrying 
a bit more than is reasonable about fantasy football.^1500`, 'Have a look around!^1000'];

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
                 typeSpeed: 0,
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