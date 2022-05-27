<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spotify By Dinujaya</title>
    <link rel="shortcut icon" href="images/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="dist/style.css?cb=1653651981867">
</head>
<body>
    <!-- <div class="loader">
        <img src="images/logo.png" alt="">
        <h1>Spotify By Dinujaya</h1>
    </div> -->

    <div class="large_screen" onclick="remove_screen()" id="screen_alt" style="display:flex;">
        <img src="images/large.png" alt="">
    </div>
    <div class="developer" id="developer" onclick="remove_me_alet()">        
        <div class="developer__main">
            <div class="top">
                <ion-icon name="close" id="close_btn" onclick="remove_me()"></ion-icon>
            </div>
            <a href="https://www.facebook.com/dinujaya.sandaruwan/" target="_blank">
            <img src="images/profile.jpg" alt="">
            </a>
            <div class="content">
                <h1>Dinujaya Sandaruwan</h1>
                <p>
                ⭕️ Hi, my name is Dinujaya Sandaruwan and I created this Spotify Clone because I want to showcase my web development skills. 😆😅<br>
                ⭕️ I used <span>HTML, Scss, JavaScript, PHP, SQL and Node</span> to create this site, so I can use this site to play my favorite songs like Spotify. It also has a database, so I can insert and delete songs at any time.😌😇<br>
                ⭕️ But the special thing is, you can also download the source code of this site from my Github profile. 😋😋<br>
                ⭕️ Lastly if you want to create any kind of website feel free to talk me.🤭🤭<br>
                </p>
            </div>
        </div>     
    </div>
    <?php include 'content/left-side.php'; ?>
    
    <?php include 'content/main/index.php'; ?>
    <?php include 'content/main/lofi.php'; ?>
    
    <?php include 'content/right-side.php'; ?>
    
    <?php include 'content/player.php'; ?>


    <script src="dist/all.js?cb=1653651981867"></script>
    <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
    <script src="lofi.js"></script>
    
    <script>
        <?php
        include 'song_list.php';
        include 'script.php';
        include 'lofi.php';

        ?>

        
    </script>
</body>
</html>
