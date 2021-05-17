$("document").ready(function() {
    //Calculates the BMI of the person when it is clicked//
    $("#findBmi").click(function() {
        weight = $("#w1").val();
        foot = $("#foot").val();
        inches = $("#inches").val();
        BMI(weight, foot, inches);
    });
    //Calculation and logic of BMI//
    function BMI(weight, foot, inches) {
        metres = met(foot, inches);
        bmi = weight / metres ** 2;

        if (bmi < 18.5) {
            alert("You are Underweight");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            alert("You are Healthy");
        } else if (bmi > 24.9 && bmi <= 29.9) {
            alert("You are Overweight");
        } else if (bmi > 29.9 && bmi <= 39.9) {
            alert("You are Obese");
        } else {
            alert("You are Extremely Obese");
        }
    }
    //for converting foot and inches into meters//
    function met(foot, inches) {
        return (foot * 12 * 2.5 + inches * 2.5) / 100;
    }
});