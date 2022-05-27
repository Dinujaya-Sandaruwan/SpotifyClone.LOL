<?php
include '../add/dbcon.php';

$sql = 'SELECT * FROM `lofi`ORDER BY Id DESC';

$result = $conn->query($sql);
$song_count = 0;
?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Spotify DB - Dinujaya Sandaruwan</title>
    <link rel="stylesheet" href="../dist/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <style>
        body{
            overflow-y: scroll;
        }
        ::-webkit-scrollbar{
            width: 0px;
        }

    </style>
  </head>
  <body>
    <main class="db">
        <div class="password" id="password">
            <div class="form">
                <div class="row g-3">
                <div class="col-auto">
                    <label class="visually-hidden">Password</label>
                    <input type="password" class="form-control" id="password_input" placeholder="Password">
                </div>
                <div class="col-auto">
                    <button class="btn btn-primary mb-3" onclick="check_pass2()">Confirm identity</button>
                </div>
                </div>
            </div>
        </div>

        <div class="top-bar">
            <h1>My Spotify Database</h1>
        </div>
        <div class="content">
            <h2>Let's see how many <span>Songs</span> my in DB 😋😋</h2>

            <table class="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Artist</th>
                        <th scope="col">Remove Song</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    if ($result->num_rows > 0) {

                        while($row = $result->fetch_assoc()) {
                            $song_count = $song_count +1;
                            echo'<tr>';
                            echo'    <th scope="row">'.$row['id'].'</th>';
                            echo'    <td><img class="thumb" src="../'.$row['thumb'].'" alt=""> '.$row['name'].'</td>';
                            echo'    <td>'.$row['artist'].'</td>';
                            echo'    <td><form action="delete.php" method="post"><input type="hidden" name="id" value="'.$row['id'].'"><button type="submit" class="btn btn-danger">Remove</button></form></td>';
                            echo'</tr>';  

                        }
                        }
                    ?>
                </tbody>
            </table>
            <?php $missed_songs = $song_count % 6?>
            <h2>Total <span><?php echo $song_count?></span> Songs in DB and <span style="color:#fa0f0f;">0<?php echo $missed_songs?></span></span> missed.</h2>
        </div>

        
    </main>
    <script src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
  </body>
</html>
