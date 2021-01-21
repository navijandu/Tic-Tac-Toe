$(document).ready(function () {
    $(".top").click(function () {
        if ($(".box").hasClass("circle")) {
            if ($(this).hasClass("x")) {
                alert("Please Try diffrent box");
            } else {
                $(this).addClass("circle")
                var winnervalue = checkWinnner();
                if (winnervalue) {
                    setTimeout(function () {
                        $(".result").append("Circel is Winner")
                        $(".winnerMessage").addClass("show")
                        /*$(".box").removeClass("x || circle")
                        $(".top").removeClass("x || circle")*/
                    }, 400)

                }
                $(".box").removeClass("circle").addClass("x")
            }
        } else if ($(".box").hasClass("x")) {
            if ($(this).hasClass("circle")) {
                alert("Please Try diffrent box");

            } else {
                $(this).addClass("x");

                var winnervalue = checkWinnner();
                if (winnervalue) {
                    /*$(".winnerMessage").addClass("show")*/
                    setTimeout(function () {

                        $(".result").append("X is Winner")
                        $(".winnerMessage").addClass("show")
                        /* $(".box").removeClass("x || circle")
                         $(".top").removeClass("x || circle")*/

                    }, 400)
                }
                $(".box").removeClass("x").addClass("circle")
            }
        }
    });

    /*Reset button to reload the game*/
    $("#restartButton").click(function () {
        $(".box").removeClass("x || circle")
        $(".top").removeClass("x || circle")
        $(".winnerMessage").addClass("show")
        $(".result").html("")
    });
    /*reset on result page*/
    $(".restartButton-Outer").click(function () {
        $(".box").removeClass("x || circle")
        $(".top").removeClass("x || circle")
        $(".result").html("")

    });

    /*selecting circle class*/
    $("#select-C").click(function () {
        $(".winnerMessage").removeClass("show")
        $(".box").addClass("circle")
        $(".top").removeClass("x || circle")
        $(".result").html("")
    });
    /*selecting the X class*/
    $("#select-X").click(function () {
        $(".winnerMessage").removeClass("show")
        $(".box").addClass("x")
        $(".result").html("")
        $(".top").removeClass("x || circle")
    });
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml16');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({
            loop: true
        })
        .add({
            targets: '.ml16 .letter',
            translateY: [-100, 0],
            easing: "easeOutExpo",
            duration: 1400,
            delay: (el, i) => 30 * i
        }).add({
            targets: '.ml16',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
});

function checkWinnner() {
    var turn = $(".box").attr("class").split(" ")[1];

    if ($('.sp1').hasClass(turn) && $(".sp2").hasClass(turn) && $(".sp3").hasClass(turn)) {
        return true;
    } else if ($('.sp4').hasClass(turn) && $('.sp5').hasClass(turn) && $(".sp6").hasClass(turn)) {
        return true;
    } else if ($('.sp7').hasClass(turn) && $('.sp8').hasClass(turn) && $(".sp9").hasClass(turn)) {
        return true;
    } else if ($('.sp1').hasClass(turn) && $('.sp4').hasClass(turn) && $(".sp7").hasClass(turn)) {
        return true;
    } else if ($('.sp2').hasClass(turn) && $('.sp5').hasClass(turn) && $(".sp8").hasClass(turn)) {
        return true;
    } else if ($('.sp3').hasClass(turn) && $('.sp6').hasClass(turn) && $(".sp9").hasClass(turn)) {
        return true;
    } else if ($('.sp1').hasClass(turn) && $('.sp5').hasClass(turn) && $(".sp9").hasClass(turn)) {
        return true;
    } else if ($('.sp3').hasClass(turn) && $('.sp5').hasClass(turn) && $(".sp7").hasClass(turn)) {
        return true;
    } else {
        return false;
    }
}
