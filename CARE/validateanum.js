function validateNumber() {
    var number = prompt("Enter a Phone Number to Validate !!");
    arr = number.match(/\d/g);
    console.log(arr);
    if (arr.length == 10) {
        if (arr[0] == 9 || arr[0] == 8 || arr[0] == 7 || arr[0] == 6) {
            console.log("True");
        } else {
            console.log("True");
        }
    } else {
        console.log("False");
    }
}