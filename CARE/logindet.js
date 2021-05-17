$("document").ready(function() {
    ids = ["Account1", "Account2", "Account3", "Account4"];
    names = ["User 1", "User 2", "User 3", "User 4"];
    passes = ["password", "password1", "password2", "password3"];
    ages = [24, 19, 22, 17];
    gen = ["male", "male", "female", "female"];
    emails = [
        "account1@care.in",
        "account2@care.in",
        "account3@care.in",
        "account4@care.in",
    ];
    phones = ["987***0000", "987***1501", "987***9999", "987***1500"];
    heights = [1.7, 1.65, 1.6, 1.45];
    weights = [66, 83, 56, 60];
    $("#login").click(function() {
        username = $("#user").val();
        pass = $("#pass").val();
        logger(username, pass);
    });

    function storeandregister() {
        id = $("#user1").val();
        pass = $("#pass1").val();
        ame = $("#regname").val();
        age = $("#regage").val();
        phone = $("#regphone").val();
        email = $("#regmail").val();
        height = $("#regheight").val();
        height = height / 100;
        weight = $("#regweight").val();
        gender = $("#reggen").val();
    }

    function fetchAndSave(x) {
        $("name").text(names[x]);
        $("age").text(ages[x]);
        $("id").text(ids[x]);
        $("gender").text(gen[x]);
        $("email").text(emails[x]);
        $("phone").text(phones[x]);
        $("height").text(heights[x]);
        $("weight").text(weights[x]);
        wei = weights[x];
        heig = heights[x];
        body = wei / heig ** 2;
        $("bmi").text(body);
        health(body);
    }
    $("#Regit").click(function() {
        storeandregister();
        ids.push(id);
        passes.push(pass);
        names.push(ame);
        validatEmail(email);
        gen.push(gender);
        ages.push(age);
        heights.push(height);
        weights.push(weight);
        console.log(id);
        console.log(pass);
        console.log(ame);
        console.log(email);
        console.log(phone);
        console.log(gender);
        console.log(age);
        console.log(height);
        console.log(weight);
    });

    function validatEmail(email) {
        arr = email.search(/\@/g);
        arr1 = email.search(/\./g);
        if (arr > 3 && arr1 > 4) {
            emails.push(email);
        } else {
            alert("Enter a Valid Email");
        }
    }

    function health(bmi) {
        if (bmi < 18.5) {
            $("health").css("color", "blue");
            $("health").text("You are Underweight");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            $("health").css("color", "green");
            $("health").text("You are Healthy");
        } else if (bmi > 24.9 && bmi <= 29.9) {
            $("health").css("color", "#F40");
            $("health").text("You are Overweight");
        } else if (bmi > 29.9 && bmi <= 39.9) {
            $("health").css("color", "Red");
            $("health").text("You are Obese");
        } else {
            $("health").css("color", "Maroon");
            $("health").text("You are Extremely Obese");
        }
    }

    function start() {
        $("#main").show();
        $("#home1").show();
        $("#Food1").hide();
        $("#Health1").hide();
        $("#Beauty1").hide();
        $("#fitness1").hide();
        $("#self1").hide();
        $("#personalised1").hide();
        $("#logbox").hide();
        $("#boxlog").hide();
        $("#logout").show();
        $("#register").hide();
        $("#BMIWin").hide();
        $("#personal1").hide();
    }

    function logger(user, pass) {
        if (user == "" || pass == "") {
            alert("Username or Password can't Be blank");
        } else {
            x = ids.indexOf(user);
            console.log(x);
            y = passes.indexOf(pass);
            console.log(y);
            if (x < 0 || y < 0) {
                alert("Wrong Username or Password");
            } else if (x == y) {
                alert("Login Successful");
                $("#logbox").hide();
                fetchAndSave(x);
                start();
            } else {
                alert("Username and Password Don't match");
            }
        }
    }
});