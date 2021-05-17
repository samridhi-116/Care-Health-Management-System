

<?php
if(isset($_POST['regit'])) {
    echo "DATA IS TO BE INSERTED RIGHT NOW AND RIGHT HERE";
    $id= $_POST['id'];
    $password= $_POST['pass'];
    $name=$_POST['nam'];
    $email=$_POST['email'];
    $phone = $_POST['phn'];
    $gender = $_POST['gen'];
    $age = $_POST['age'];
    $weight = $_POST['weight'];
    $height = $_POST['height'];
    $connect= mysqli_connect('localhost','root','','care');
    $sql= "INSERT into personal(id,password,name,email,phone,gender,height,weight,age) values('$id','$password','$name','$email','$phone','$gender','$height','$weight','$age')";
    $res= mysqli_query($connect,$sql);
    }else {
    echo "DATA NOT INSERTED OR SOME ISSUE IS THERE WITH THE CODE IN DATA INSERTION";
    }
?>