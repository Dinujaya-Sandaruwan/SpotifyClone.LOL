<?php

include 'add/dbcon.php';

$sql = "SELECT * FROM `lofi`;";
$result = $conn->query($sql);
echo"let lofi_list_play_element = '';";
echo"let lofi_songs_duration = '';";

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
        echo "function lofi_list_fun_".$row['id']."() {";
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
                // echo"lofi_music_".$row['id'].".setAttribute('name', 'pause');";
                echo"track_name.innerText = '".$row['name']."';";
                echo"track_artist.innerText = '".$row['artist']."';";
                echo"track_art.src = '".$row['thumb']."';";
                echo"playpauseTrack();";
                echo"isPlaying = true;";
                echo"element_id = play_element;";
                echo"element_name = play_element.id;";

                echo"document.getElementById('lofi_song_".$row['id']."').style.display = 'none';";
                echo"document.getElementById('lofi_icon_".$row['id']."').style.display = 'none';";
                echo"document.getElementById('lofi_musuc_bars_".$row['id']."').style.display = 'block';";
                echo"document.getElementById('lofi_song_name_".$row['id']."').style.color = 'var(--play-color)';";
                echo"lofi_list_play_element = '".$row['id']."';";
                echo"document.getElementById('lofi_list_play_btn').setAttribute('name', 'pause');";
                
            echo "} else{";
                // echo"lofi_music_".$row['id'].".setAttribute('name', 'play');";
                echo"playpauseTrack();";
                echo"isPlaying = false;";
                echo"element_id = '';";

                echo"document.getElementById('lofi_song_".$row['id']."').style.removeProperty('display');";
                echo"document.getElementById('lofi_icon_".$row['id']."').style.removeProperty('display');";
                echo"document.getElementById('lofi_musuc_bars_".$row['id']."').style.removeProperty('display');";
                echo"document.getElementById('lofi_song_name_".$row['id']."').style.color = 'var(--white)';";
                echo"document.getElementById('lofi_list_play_btn').setAttribute('name', 'play');";
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
                // echo"lofi_music_".$row['id'].".setAttribute('name', 'pause');";
                echo"track_name.innerText = '".$row['name']."';";
                echo"track_artist.innerText = '".$row['artist']."';";
                echo"track_art.src = '".$row['thumb']."';";
                echo"playpauseTrack();";
                echo"isPlaying = true;";
                echo"element_id = play_element;";
                echo"element_name = play_element.id;";

                echo"document.getElementById('lofi_song_".$row['id']."').style.display = 'none';";
                echo"document.getElementById('lofi_icon_".$row['id']."').style.display = 'none';";
                echo"document.getElementById('lofi_musuc_bars_".$row['id']."').style.display = 'block';";
                echo"document.getElementById('lofi_song_name_".$row['id']."').style.color = 'var(--play-color)';";

                echo"document.getElementById('lofi_song_' + lofi_list_play_element).style.removeProperty('display');";
                echo"document.getElementById('lofi_icon_' + lofi_list_play_element).style.removeProperty('display');";
                echo"document.getElementById('lofi_musuc_bars_' + lofi_list_play_element).style.removeProperty('display');";
                echo"document.getElementById('lofi_song_name_' + lofi_list_play_element).style.color = 'var(--white)';";
                echo"lofi_list_play_element = '".$row['id']."';";
                echo"document.getElementById('lofi_list_play_btn').setAttribute('name', 'pause');";
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
            // echo"lofi_music_".$row['id'].".setAttribute('name', 'pause');";
            echo"track_name.innerText = '".$row['name']."';";
            echo"track_artist.innerText = '".$row['artist']."';";
            echo"track_art.src = '".$row['thumb']."';";
            echo"playTrack();";
            echo"isPlaying = true;";
            echo"document.getElementById('lofi_list_play_btn').setAttribute('name', 'pause');";
        echo"}";

        echo"document.getElementById('lofi_date_".$row['id']."').innerText = getDate();";
        // echo"lofi_songs_duration = new Audio('".$row['song']. "');";
        // echo"lofi_songs_duration.src = '".$row['song']."';";
        // echo"document.getElementById('lofi_song_duration_".$row['id']."').innerText = lofi_songs_duration.duration;";

    }
}else {
    echo "0 results";
}





?>