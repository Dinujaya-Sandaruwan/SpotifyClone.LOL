<?php
include 'add/dbcon.php';

$sql = "SELECT * FROM `songs`;";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
        echo "function fun_".$row['id']."(){";
        echo "    if (isPlaying == false) {";
        echo "        track_name = '".$row['song']."';";
        echo "        curr_track = new Audio(track_name);";
        echo "        clearInterval(updateTimer);";
        echo "        reset();";
        echo "        curr_track.src = '".$row['song']."' ;";
        echo "        curr_track.load();";
        echo "        updateTimer = setInterval(setUpdate, 1000);";
        echo "        curr_track.addEventListener('ended', nextTrack);";
        echo "        php_music_".$row['id'].".setAttribute('name', 'pause');";
        echo "        track_name.innerText = '".$row['name']."';";
        echo "        track_artist.innerText = '".$row['artist']."';";
        echo "        console.log('saman');";
        echo "        track_art.src = '".$row['thumb']."';";
        echo "        playpauseTrack();";
        echo "        isPlaying = true;";
        echo "        element_name = php_music_".$row['id'].";";
        echo "    }";
        echo "        top_01.setAttribute('name', 'play');";
        echo "        playpauseTrack();";
        echo "        isPlaying = false;";
        echo "        element_id = '';";
        echo "";
        echo "        if (element_name != 'top_01') {";
        echo "            curr_track = new Audio(music_list[0].music);";
        echo "            loadTrack(0);";
        echo "            top_01.setAttribute('name', 'pause');";
        echo "            track_name.innerText = music_list[0].name;";
        echo "            track_artist.innerText = music_list[0].artist;";
        echo "            track_art.src = music_list[0].img;";
        echo "            playpauseTrack();";
        echo "            isPlaying = true;";
        echo "            element_id = top_01;";
        echo "            element_name = element_id.id;";
        echo "        }";
        echo "    }";
        echo "}";
    }
}else {
    echo "0 results";
}

?>