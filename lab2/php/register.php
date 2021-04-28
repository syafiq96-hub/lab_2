<?php
    include_once("dbconnect.php");
     $username = $_POST["username"];
     $phone = $_POST["phone"];
     $passa = $_POST["passworda"];
     $passb = $_POST["passwordb"];
     $shapass = sha1($passa);  

     if (!(isset($username) || isset($phone) || isset($phone) || isset($passa) || isset($passb))){
         echo "<script>alert('Please fill in all required information')</script>";
         echo "<script>window.location.replace('../html/register.html')</script>";
     }else{
        $sqlregister = "INSERT INTO tbl_user(username,phone,password) VALUES('$username','$phone','$shapass')";
        try{
            $conn->exec($sqlregister);
            echo "<script> alert('Registration successful')</script>";
            echo "<script> window.location.replace('../html/login.html')</script>";
        }catch(PDOException $e){
            echo "<script> alert('Registration failed')</script>";
            echo "<script> window.location.replace('../html/register.html')</script>";
        }
     }
?>