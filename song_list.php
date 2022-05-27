<?php
include 'add/dbcon.php';

$sql = "SELECT * FROM `songs`;";
$result = $conn->query($sql);
echo"const music_list_php = [";

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()){
            echo"{";
                echo"img : '".$row['thumb']."',";
                echo"name : '".$row['name']."',";
                echo"artist : '".$row['artist']."',";
                echo"music : '".$row['song']."'";
            echo"},";
    }
}else {
    echo "0 results";
}
echo"];";

echo"function nextTrack(){";
    echo"if(track_index < music_list_php.length - 1 && lofi_play == true){console.log(track_index = track_index);";
    echo"}else if(track_index < music_list_php.length - 1 && isRandom === false){";
        echo"track_index += 1;";
    echo"}else if(track_index < music_list_php.length - 1 && isRandom === true){";
        echo"let random_index = Number.parseInt(Math.random() * music_list_php.length);";
        echo"track_index = random_index;";
    echo"}else{";
        echo"track_index = 0;";
    echo"}";
    echo"clearInterval(updateTimer);";
    echo"reset();";
    echo"curr_track.src = music_list_php[track_index].music;";
    echo"curr_track.load();";
    echo"updateTimer = setInterval(setUpdate, 1000);";
    echo"curr_track.addEventListener('ended', nextSong);";
    echo"track_name.innerText = music_list_php[track_index].name;";
    echo"track_artist.innerText = music_list_php[track_index].artist;";
    echo"track_art.src = music_list_php[track_index].img;";
    echo"playTrack();";
echo"}";

// echo"function prevTrack(){";
//     echo"if(track_index > 0){";
//         echo"track_index -= 1;";
//     echo"}else{";
//         echo"track_index = music_list_php.length -1;";
//     echo"clearInterval(updateTimer);";
//     echo"reset();";
//     echo"curr_track.src = music_list_php[track_index].music;";
//     echo"curr_track.load();";
//     echo"updateTimer = setInterval(setUpdate, 1000);";
//     echo"curr_track.addEventListener('ended', nextSong);";
//     echo"track_name.innerText = music_list_php[track_index].name;";
//     echo"track_artist.innerText = music_list_php[track_index].artist;";
//     echo"track_art.src = music_list_php[track_index].img;";
//     echo"playTrack();";
// echo"}";
// ?>

