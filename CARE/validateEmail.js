function validatEmail() {
    var mail = prompt("Enter an Email to Validate !!");
    arr = mail.search(/\@/g);
    arr1 = mail.search(/\./g);
    console.log(arr);
    console.log(arr1);
    if (arr > 3 && arr1 > 4) {
        console.log("True");
    } else {
        console.log("Falsee");
    }
}