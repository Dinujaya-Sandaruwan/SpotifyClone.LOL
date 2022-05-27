<?php
include 'add/dbcon.php';

$sql = "SELECT * FROM `lofi`;";
$result = $conn->query($sql);

echo"let lofi_height = 0;";

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
        echo "function lofi_fun_".$row['id']."() {";
            echo "if (isPlaying == false) {";
                echo"let play_element = document.getElementById('lofi_music_".$row['id']."');";
                // echo"console.log(play_element);";
                echo"curr_track = new Audio('".$row['song']. "');";
                echo"clearInterval(updateTimer);";
                echo"reset();";
                echo"curr_track.src = '".$row['song']."';";
                echo"curr_track.load();";
                echo"updateTimer = setInterval(setUpdate, 1000);";
                echo"curr_track.addEventListener('ended', repeat_song_".$row['id'].");";
                echo"lofi_music_".$row['id'].".setAttribute('name', 'pause');";
                echo"track_name.innerText = '".$row['name']."';";
                echo"track_artist.innerText = '".$row['artist']."';";
                echo"track_art.src = '".$row['thumb']."';";
                echo"playpauseTrack();";
                echo"isPlaying = true;";
                echo"element_id = play_element;";
                echo"element_name = play_element.id;";
            echo "} else{";
                echo"lofi_music_".$row['id'].".setAttribute('name', 'play');";
                echo"playpauseTrack();";
                echo"isPlaying = false;";
                echo"element_id = '';";
            echo"}";

            echo"if (element_name != 'lofi_music_".$row['id']."') {";
                echo"let play_element = document.getElementById('lofi_music_".$row['id']."');";
                echo"curr_track = new Audio('".$row['song']. "');";
                echo"clearInterval(updateTimer);";
                echo"reset();";
                echo"curr_track.src = '".$row['song']."';";
                echo"curr_track.load();";
                echo"updateTimer = setInterval(setUpdate, 1000);";
                echo"curr_track.addEventListener('ended', repeat_song_".$row['id'].");";
                echo"lofi_music_".$row['id'].".setAttribute('name', 'pause');";
                echo"track_name.innerText = '".$row['name']."';";
                echo"track_artist.innerText = '".$row['artist']."';";
                echo"track_art.src = '".$row['thumb']."';";
                echo"playpauseTrack();";
                echo"isPlaying = true;";
                echo"element_id = play_element;";
                echo"element_name = play_element.id;";
            echo"}";
        echo "}";

        echo"lofi_height = lofi_height + 1;";  
        
        echo"function repeat_song_".$row['id']."(){";
            echo"console.log('repeating');";
            echo"curr_track = new Audio('".$row['song']. "');";
            echo"clearInterval(updateTimer);";
            echo"reset();";
            echo"curr_track.src = '".$row['song']."';";
            echo"curr_track.load();";
            echo"updateTimer = setInterval(setUpdate, 1000);";
            echo"curr_track.addEventListener('ended', repeat_song_".$row['id'].");";
            echo"lofi_music_".$row['id'].".setAttribute('name', 'pause');";
            echo"track_name.innerText = '".$row['name']."';";
            echo"track_artist.innerText = '".$row['artist']."';";
            echo"track_art.src = '".$row['thumb']."';";
            echo"playTrack();";
            echo"isPlaying = true;";
        echo"}";
    }
}else {
    echo "0 results";
}

echo"let lofi_height_element = document.getElementById('change_lofi_height');";
echo"let real_lofi_height  = lofi_height*50;";
echo"if ((lofi_height/6) == 0){";
    echo"let lofi_height_number = lofi_height/6;";
    echo"lofi_height_element.style.maxHeight = lofi_height_number * 300 + 'px';";
    echo"lofi_height_element.style.height = lofi_height_number * 300 + 'px';";
echo"}else{";
    echo"lofi_height = real_lofi_height - ((lofi_height% 6) * 50);";
    echo"lofi_height_element.style.maxHeight = lofi_height + 'px';";
    echo"lofi_height_element.style.height = lofi_height + 'px';";
echo"}";


?>

