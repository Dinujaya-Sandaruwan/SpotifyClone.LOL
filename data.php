<?php
include 'add/dbcon.php';

$sql = "SELECT * FROM `songs` ORDER BY RAND();";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
        echo' <div>';
        echo' <ion-icon class="play" name="play" id="php_music_'.$row['id'].'" onclick="fun_'.$row['id'].'()"></ion-icon>';
        echo' <img src="'.$row['thumb'].'" alt="">';
        echo' <h1>'.$row['name'].'</h1>';
        echo' <p>Lorem ipsum dolor sit amet consectetur...</p>';
        echo' </div>';
    }
}else {
    echo "0 results";
}

?>