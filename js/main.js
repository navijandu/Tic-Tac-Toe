$(document).ready(function () {

    $(".top").click(function () {
        var currentUser = $(".player span").text();
        if (currentUser == "Player1") {
            if ($(this).find("span").text() == "") {
                $(this).addClass("circle");


                $(".player #turn").text("Player2")

            } else {

            }
        } else if (currentUser == "Player2") {
            if ($(this).find("span").text() == "") {
                $(this).addClass("x");
                $(".player #turn").text("Player1")
            } else {

            }
        }

    });



});
