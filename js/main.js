$(document).ready(function () {

    $(".top").click(function () {

        if ($(".box").hasClass("circle")) {
            if ($(this).hasClass("x")) {
                alert("Please Try diffrent box");
            } else {
                $(this).addClass("circle")
                var winnervalue = checkWinnner();
                if (winnervalue) {
                    alert("circle winner ")
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
                    alert("x winner ")
                }
                /*}, 1000)*/
                $(".box").removeClass("x").addClass("circle")
            }
        }
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
