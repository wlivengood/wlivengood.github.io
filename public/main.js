var introLines = [`^1500Hi there!`, `^1500I am a creative, passionate software engineer who 
enjoys building robust web applications using clean, modular code across the stack.`, 
`^1500When I'm not coding (and sometimes when I am), I like to eat good barbecue, sip single malt 
scotch, play my trumpet and worry far more than is reasonable about fantasy football.`,
`^1500Have a look around!`];

$(document).ready(function() {

    var nextLine = function(line) {
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

    $(".after-intro").hide();
    $(".copyright").hide();
    $(".header").hide().slideDown('slow', function() {
        $(".intro-text-0").typed({
            strings: [introLines[0]],
            typeSpeed: 0,
            cursorChar: " |",
            callback: nextLine(1)
        });
    });
});


