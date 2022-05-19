<?php
include 'add/dbcon.php';

$sql = "SELECT * FROM `songs`;";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
        echo "function fun_".$row['id']."() {";
        echo "var audio = new Audio('". $row['song'] ."');";
        echo "audio.play();";
        echo "}";
    }
}else {
    echo "0 results";
}

?>