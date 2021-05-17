$("document").ready(function() {
    /*$("#login").click(function() {
              username = $("#user").val();
              pass = $("#pass").val();
              log(username, pass);
          });*/

    function start() {
        $("#main").show();
        $("#home").show();
        $("#Food").hide();
        $("#Health").hide();
        $("#Beauty").hide();
        $("#fitness").hide();
        $("#self").hide();
        $("#personalised").hide();
    }
    /*
          function log(user, pass) {
              console.log(user);
              console.log(pass);
              if (user == "" || pass == "") {
                  alert("Username or Password can't Be blank");
              } else {
                  if (user == "notpremium") {
                      if (pass == "notpremium") {
                          $("#logbox").hide();
                          start();
                      } else {
                          alert("Username Or Password Incorrect");
                      }
                  } else if (user == "premium") {
                      if (pass == "premium") {
                          alert("Login Successful");
                          $("#logbox").hide();
                          $("#main").show();
                      } else {
                          alert("Username Or Password Incorrect");
                      }
                  } else {
                      alert("Username Or Password Incorrect");
                  }
              }
          }
          */
});