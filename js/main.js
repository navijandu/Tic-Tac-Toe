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
                /*setTimeout(function () {*/
                var winnervalue = checkWinnner();
                if (winnervalue) {
                    /*$(".winnerMessage").addClass("show")*/
                    setTimeout(function () {
                        /*  alert("X is winner")*/
                        $(".result").append("X is Winner")
                        $(".winnerMessage").addClass("show")
                        /* $(".box").removeClass("x || circle")
                         $(".top").removeClass("x || circle")*/

                    }, 400)

                }
                /*}, 1000)*/
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
    });
    /*selecting the X class*/
    $("#select-X").click(function () {
        $(".winnerMessage").removeClass("show")
        $(".box").addClass("x")

        $(".top").removeClass("x || circle")
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
