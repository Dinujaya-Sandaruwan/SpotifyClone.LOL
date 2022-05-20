<?php
include 'add/dbcon.php';

$sql = "SELECT * FROM `songs`;";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
        echo "function fun_".$row['id']."() {";
            echo "if (isPlaying == false) {";
                echo"let track_name = document.getElementById('track_name');";
                echo"curr_track = new Audio(track_name);";
                echo"clearInterval(updateTimer);";
                echo"reset();";
                echo"curr_track.src = '".$row['song']."';";
                echo"curr_track.load();";
                echo"updateTimer = setInterval(setUpdate, 1000);";
                echo"curr_track.addEventListener('ended', nextTrack);";
                echo"php_music_".$row['id'].".setAttribute('name', 'pause');";
                echo"track_name.innerText = '".$row['name']."';";
                echo"track_artist.innerText = '".$row['artist']."';";
                echo"track_art.src = '".$row['thumb']."';";
                echo"playpauseTrack();";
                echo"isPlaying = true;";
                echo"element_id = 'php_music_".$row['id']."';";
                echo"element_name = php_music_".$row['id'].";";
            echo "}";
        echo "}";
    }
}else {
    echo "0 results";
}

?>

