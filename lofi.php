<?php
include 'add/dbcon.php';

$sql = "SELECT * FROM `lofi` ORDER BY RAND();";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
        echo' <div loading="lazy">';
        echo' <ion-icon class="play" name="play" id="lofi_music_'.$row['id'].'" onclick="lofi_fun_'.$row['id'].'()"></ion-icon>';
        echo' <img src="'.$row['thumb'].'" alt="">';
        echo' <h1>'.$row['name'].'</h1>';
        echo' <p>Lorem ipsum dolor sit amet consectetur...</p>';
        echo' </div>';
    }
}else {
    echo "0 results";
}

?>