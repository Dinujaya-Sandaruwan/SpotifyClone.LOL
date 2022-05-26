<?php
$sql_lofi = "SELECT * FROM `songs` WHERE playlist = 'lofi';";

$result_lofi = $conn->query($sql_lofi);
$song_no = 0;
if ($result_lofi->num_rows > 0) {
    
    echo"const lofi_list = ["; 
    
    while($row_lofi = $result_lofi->fetch_assoc()) {
        
            echo"{";
            echo"    id: '".$row_lofi['id']."',";
            echo"    name: '".$row_lofi['name']."',";
            echo"    thumb: '".$row_lofi['thumb']."',";
            echo"    song: '".$row_lofi['song']."',";
            echo"    artist: '".$row_lofi['artist']."'";
            echo"},";
        
    
    }

    echo"];";
    }

?>