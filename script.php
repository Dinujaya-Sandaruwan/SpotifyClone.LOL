<?php
include 'add/dbcon.php';

$sql = "SELECT * FROM `songs`;";
$result = $conn->query($sql);

echo"let height_count = 0;";

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

        echo"height_count = height_count + 1;";       
    }
}else {
    echo "0 results";
}

echo"console.log('Database has ' + height_count + ' songs');";
echo"let height_element = document.getElementById('change_height');";
echo"let real_height  = height_count*50;";
echo"if ((height_count/6) == 0){";
    echo"let height_number = height_count/6;";
    echo"height_element.style.maxHeight = height_number * 300 + 'px';";
    echo"height_element.style.height = height_number * 300 + 'px';";
echo"}else{";
    echo"height_count = real_height - ((height_count% 6) * 50);";
    echo"height_element.style.maxHeight = height_count + 'px';";
    echo"height_element.style.height = height_count + 'px';";
echo"}";


?>

