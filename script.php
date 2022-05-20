<?php
include 'add/dbcon.php';

$sql = "SELECT * FROM `songs`;";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
        echo "function fun_".$row['id']."() {";
            echo "if (isPlaying == false) {";
                echo"let play_element = document.getElementById('php_music_".$row['id']."');";
                // echo"console.log(play_element);";
                echo"curr_track = new Audio('".$row['song']. "');";
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
                echo"element_id = play_element;";
                echo"element_name = play_element.id;";
            echo "} else{";
                echo"php_music_".$row['id'].".setAttribute('name', 'play');";
                echo"playpauseTrack();";
                echo"isPlaying = false;";
                echo"element_id = '';";
            echo"}";

            echo"if (element_name != 'php_music_".$row['id']."') {";
                echo"let play_element = document.getElementById('php_music_".$row['id']."');";
                echo"curr_track = new Audio('".$row['song']. "');";
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
                echo"element_id = play_element;";
                echo"element_name = play_element.id;";
            echo"}";
        echo "}";
    }
}else {
    echo "0 results";
}

?>

