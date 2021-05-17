$("document").ready(function() {
    $("#main").show();
    $("#logout").hide();
    sto();
    $("#home1").show();
    $("#food").click(function() {
        sto();
        $("#Food1").show();
    });
    $("#self").click(function() {
        sto();
        $("#self1").show();
    });
    $("#beauty").click(function() {
        sto();

        $("#Beauty1").show();
    });
    $("#fitness").click(function() {
        sto();
        $("#fitness1").show();
    });
    $("#health").click(function() {
        sto();
        $("#Health1").show();
    });
    $("#Personal").click(function() {
        sto();
        $("#home1").show();
    });
    $("#boxlog").click(function() {
        $("#logbox").show();
        $("#main").hide();
    });
    $("#logout").click(function() {
        $("#main").hide();
        alert("Logged Out Successfully");
        $("#logbox").show();
    });
    $("#Personal").click(function() {
        sto();
        $("#personal1").show();
    });
    $("#clickreg").click(function() {
        $("#logbox").hide();
        $("#register").show();
    });
    $("#back").click(function() {
        $("#logbox").show();
        $("#register").hide();
    });
    $("#img0").click(function() {
        sto();
        $("#joint").show();
    });
    $("#img1").click(function() {
        sto();
        $("#acne").show();
    });
    $("#img2").click(function() {
        sto();
        $("#dal").show();
    });
});
/*Hides all the divs in the main page */
function sto() {
    $("#home1").hide();
    $("#Food1").hide();
    $("#Health1").hide();
    $("#Beauty1").hide();
    $("#fitness1").hide();
    $("#self1").hide();
    $("#personalised1").hide();
    $("#logbox").hide();
    $("#register").hide();
    $("#BMIWin").hide();
    $("#personal1").hide();
    $("#acne").hide();
    $("#dal").hide();
    $("#joint").hide();
}