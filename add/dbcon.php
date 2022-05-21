<?php
    // $servername="localhost";
    // $username="root";
    // $password="";
    // $dbname="spotify";

    $servername = "173.254.104.205";
    $username = "mayurapa_dinujaya";
    $password = "Mayurapada.2003";
    $dbname = "mayurapa_quiz_db";
    $conn = new mysqli($servername, $username, $password, $dbname);

    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        exit;
      }
?>