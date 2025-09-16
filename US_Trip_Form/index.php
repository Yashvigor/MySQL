<?php
$insert=false;
if (isset($_POST['name'])) {
    // setting connection variables
    $servername = "localhost";
    $username   = "root";   // default XAMPP user
    $password   = "";       // default password is empty
    $database   = "us_trip"; 

    // Creating database connection
    $con = mysqli_connect($servername, $username, $password, $database);

    // Check connection
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // collect post variables
    $name   = $_POST['name'];
    $gender = $_POST['gender'];
    $age    = $_POST['age'];
    $email  = $_POST['email'];
    $phone  = $_POST['phone'];
    $desc   = $_POST['desc'];

    $sql = "INSERT INTO `trip` (`name`, `age`, `gender`, `email`, `phone`, `other`, `dt`) 
            VALUES ('$name', '$age', '$gender', '$email', '$phone', '$desc', current_timestamp())";

     //Execute the query
    if ($con->query($sql) === true) {
        echo "Successfully inserted";

        //Flag for succeessfull insertion
        $insert=true;
    } else {
        echo "Error: $sql <br>" . $con->error;
    }
    //cClose the database connection
    $con->close();
}
?>
