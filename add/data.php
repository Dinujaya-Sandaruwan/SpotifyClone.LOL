<?php
    include 'dbcon.php';
    $song_name = $_POST['name'];
    $song_artist = $_POST['artist'];

    $song_thumb = $_FILES['thumb']['name'];
    $thumb_tmp_name = $_FILES['thumb']['tmp_name'];

    $song_file = $_FILES['song']['name'];
    $song_tmp_name = $_FILES['song']['tmp_name'];
    
    // Thumbnail
    $img_ex = pathinfo($song_thumb, PATHINFO_EXTENSION);
    $img_ex_lc = strtolower($img_ex);
    $new_img_name = uniqid().'.'.$img_ex_lc;
    $img_upload_path = 'images/songs/test/'.$new_img_name;
    // echo"$img_upload_path";
    move_uploaded_file($thumb_tmp_name, $img_upload_path);
    echo"$thumb_tmp_name";
    echo"<br>";
    echo"$thumb_store_path";
    echo"<br>";




    // // Song
    // $song_ex = pathinfo($song_file, PATHINFO_EXTENSION);
    // $song_ex_lc = strtolower($song_ex);
    // $new_song_name = uniqid().'.'. $song_ex_lc;
    // $song_store_path = 'music/test/'.$new_song_name;
    
    // move_uploaded_file($song_tmp_name, $song_store_path);
    // echo"$song_tmp_name";
    // echo"<br>";
    // echo"$song_store_path";

    // $sql = "INSERT INTO `songs`(`name`, `thumb`, `song`, `artist`) VALUES ('$song_name','$thumb_store_path','$song_store_path','$song_artist')";
    // $conn->query($sql);

    // header("Location: index.php");  


?>