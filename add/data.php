<?php
include 'dbcon.php';

if (isset($_FILES['thumb'])) {

    $img_name = $_FILES['thumb']['name'];
    $img_size = $_FILES['thumb']['size'];
    $tmp_name = $_FILES['thumb']['tmp_name'];
    $error_img = $_FILES['thumb']['error'];

    if ($error_img === 0){
        $img_ex = pathinfo($img_name, PATHINFO_EXTENSION);
        $img_ex_lc = strtolower($img_ex);
        $new_img_name = uniqid().'.'.$img_ex_lc;
        $img_upload_path = '../images/songs/test/'.$new_img_name;
        $img_real_path = 'images/songs/test/'.$new_img_name;
        // echo"$img_upload_path";
        move_uploaded_file($tmp_name, $img_upload_path);

    }}

if (isset($_FILES['song'])) {
    $song_name = $_FILES['song']['name'];
    $song_size = $_FILES['song']['size'];
    $song_temp_name = $_FILES['song']['tmp_name'];
    $error_song = $_FILES['song']['error'];

    if ($error_song === 0){
        $song_ex = pathinfo($song_name, PATHINFO_EXTENSION);
        $song_ex_lc = strtolower($song_ex);
        $new_song_name = uniqid().'.'.$song_ex_lc;
        $song_upload_path = '../music/test/'.$new_song_name;
        $song_real_path = 'music/test/'.$new_song_name;
        // echo"$img_upload_path";
        move_uploaded_file($song_temp_name, $song_upload_path);

    }}

$name = $_POST['name'];
$artist = $_POST['artist'];

$sql = "INSERT INTO `songs`(`name`, `thumb`, `song`, `artist`) VALUES ('$name','$img_real_path','$song_real_path','$artist')";
$conn->query($sql);

header("Location: index.php");  


?>
