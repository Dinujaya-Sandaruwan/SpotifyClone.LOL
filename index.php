<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spotify By Dinujaya</title>
    <link rel="shortcut icon" href="images/logo.png" type="image/x-icon">
    <link rel="stylesheet" href="dist/style.css?cb=1652929582766">
</head>
<body>
    <aside class="left-side">
        <div class="left-side__file-info">
            <div class="left-side__file-info__dote"></div>
            <div class="left-side__file-info__dote"></div>
            <div class="left-side__file-info__dote"></div>
        </div>
        <div class="left-side__icons">
            <div class="left-side__icons__main">
                <div class="left-side__icons__main__ico ">
                    <ion-icon name="home" class="white"></ion-icon>
                    <h1 class="main-icon-text white">Home</h1>
                </div>
                <div class="left-side__icons__main__ico">
                    <ion-icon name="search-outline"></ion-icon>
                    <h1 class="main-icon-text">Search</h1>
                </div>
                <div class="left-side__icons__main__ico">
                    <ion-icon name="library-outline"></ion-icon>
                    <h1 class="main-icon-text">Your Library</h1>
                </div>
            </div>
            <div class="left-side__icons__other">
                <div class="left-side__icons__other__ico">
                    <ion-icon name="add-outline" class="white-bg"></ion-icon>
                    <h1 class="main-icon-text">Create Playlist</h1>
                </div>
                <div class="left-side__icons__other__ico">
                    <ion-icon name="heart" class="graident-bg"></ion-icon>
                    <h1 class="main-icon-text">Liked Songs</h1>
                    <ion-icon name="arrow-down-outline" class="downloaded"></ion-icon>
                </div>
            </div>
        </div>
        <hr class="left-side__hr">
        <div class="left-side__playlists">
            <h3 class="left-side__playlists__one-list">Lofi Girl's Favourits</h3>
            <div class="downloaded-playlist">
                <h3 class="left-side__playlists__one-list">Hits of All Time</h3>
                <ion-icon name="arrow-down-outline" class="downloaded"></ion-icon>
            </div>
            <h3 class="left-side__playlists__one-list">Top Hits | Bonfire</h3>
            <h3 class="left-side__playlists__one-list">My Songs List For Editing</h3>
            <h3 class="left-side__playlists__one-list">Best Hindi Songs</h3>
            <h3 class="left-side__playlists__one-list">Specific Artests</h3>
            <div class="playlist-collection">
                <h3 class="left-side__playlists__one-list">Kaveesha Dilmin</h3>
                <ion-icon name="caret-down" class="look-down"></ion-icon>
            </div>
            <h3 class="left-side__playlists__one-list">&nbsp &nbsp My Favourits</h3>
            <h3 class="left-side__playlists__one-list">Sinhala My Favourits</h3>
        </div>
    </aside>
    <main class="main">
        <div class="main__top-side">
            <div class="main__top-side__top">
                <div>
                    <ion-icon name="chevron-back"></ion-icon>
                    <ion-icon name="chevron-forward"></ion-icon>
                </div>
                <div class="round">
                    <img src="images/profile.jpg" alt="Profile">
                    <h1>Dinujaya</h1>
                    <ion-icon name="caret-down"></ion-icon>
                </div>
            </div>

            <h1 class="greting">Good Morning</h1>    

            <div class="main__top-side__content">
                <!-- Top Contents -->
                <div class="main__top-side__content__row">
                    <div>
                        <img src="images/like.png" alt="...">
                        <h1>Liked Songs</h1>
                        <ion-icon class="play" name="play" id="top_01" onclick="mxp_00()"></ion-icon>
                    </div>
                    <div>
                        <img src="images/songs/kalu.jpg" alt="...">
                        <h1>KALU's Faves</h1>
                        <ion-icon class="play" name="play" id="top_02" onclick="mxp_01()"></ion-icon>
                    </div>
                    <div>
                        <img src="images/songs/nadun uyana.jpg" alt="...">
                        <h1>Nadun Uyana (නදුන් උයන)</h1>
                        <ion-icon class="play" name="play" id="top_03" onclick="mxp_02()"></ion-icon>
                    </div>
                </div>
                <div class="main__top-side__content__row">
                    <div>
                        <img src="images/songs/evening.jpg" alt="...">
                        <h1>Songs For Everning</h1>
                        <ion-icon class="play" name="play" id="top_04" onclick="mxp_03()"></ion-icon>
                    </div>
                    <div>
                        <img src="images/songs/sandawathiye.jpg" alt="...">
                        <h1>Sandawathiye (Mix)</h1>
                        <ion-icon class="play" name="play" id="top_05" onclick="mxp_04()"></ion-icon>
                    </div>
                    <div>
                        <img src="images/songs/baby shark.jpg" alt="...">
                        <h1>Baby Chark (Mix)</h1>
                        <ion-icon class="play" name="play" id="top_06" onclick="mxp_05()"></ion-icon>
                    </div>
                </div>
            </div>    
        </div>
        <!-- Your Top Mixes -->
        <div class="main__content">
            <div class="main__content__top">
                <h1>Your top mixes</h1>
                <h2>SEE ALL</h2>
            </div>
            <div class="main__content__body">
                <div>
                    <ion-icon class="play" name="play" id="mx1" onclick="mxp_06()"></ion-icon>
                    <img src="images/songs/inductryBaby.jpg" alt="">
                    <h1>Industry Baby Mix</h1>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </div>
                <div>
                    <ion-icon class="play" name="play" id="mx2" onclick="mxp_07()"></ion-icon>
                    <img src="images/songs/adk.jpg" alt="">
                    <h1>ADK Mix</h1>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </div>                
                <div>
                    <ion-icon class="play" name="play" id="mx3" onclick="mxp_08()"></ion-icon>
                    <img src="images/songs/bts.jpg" alt="">
                    <h1>BTS Band Mix</h1>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </div>                
                <div>
                    <ion-icon class="play" name="play" id="mx4" onclick="mxp_09()"></ion-icon>
                    <img src="images/songs/cardi b up.jpg" alt="">
                    <h1>Cardi B Mix</h1>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </div>
                <div>
                    <ion-icon class="play" name="play" id="mx5" onclick="mxp_10()"></ion-icon>
                    <img src="images/songs/baby.jpg" alt="">
                    <h1>Sinhala Rap Mix</h1>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </div>
                <div>
                    <ion-icon class="play" name="play" id="mx6" onclick="mxp_11()"></ion-icon>
                    <img src="images/songs/rihanna.jpg" alt="">
                    <h1>Rihanna Mix</h1>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </div>
            </div>
        </div>
        <!-- Daily Mixes (Made For Dinujaya) -->
        <div class="main__content">
            <div class="main__content__top">
                <h1>Made For Dinujaya</h1>
                <h2>SEE ALL</h2>
            </div>
            <div class="main__content__body">
                <div>
                    <ion-icon class="play" name="play" id="d_mix_01" onclick="mxp_12()"></ion-icon>
                    <img src="images/songs/d-mix/1.jpg" alt="">
                    <h1>Daily Mix 01</h1>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </div>
                <div>
                    <ion-icon class="play" name="play" id="d_mix_02" onclick="mxp_13()"></ion-icon>
                    <img src="images/songs/d-mix/2.jpg" alt="">
                    <h1>Daily Mix 02</h1>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </div>                
                <div>
                    <ion-icon class="play" name="play" id="d_mix_03" onclick="mxp_14()"></ion-icon>
                    <img src="images/songs/d-mix/3.jpg" alt="">
                    <h1>Daily Mix 03</h1>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </div>                
                <div>
                    <ion-icon class="play" name="play" id="d_mix_04" onclick="mxp_15()"></ion-icon>
                    <img src="images/songs/d-mix/4.jpg" alt="">
                    <h1>Daily Mix 04</h1>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </div>
                <div>
                    <ion-icon class="play" name="play" id="d_mix_05" onclick="mxp_16()"></ion-icon>
                    <img src="images/songs/d-mix/5.jpg" alt="">
                    <h1>Daily Mix 05</h1>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </div>
                <div>
                    <ion-icon class="play" name="play" id="d_mix_06" onclick="mxp_17()"></ion-icon>
                    <img src="images/songs/d-mix/6.jpg" alt="">
                    <h1>Daily Mix 06</h1>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </div>
            </div>
        </div>

        <div class="main__content">
            <div class="main__content__top">
                <h1>Made For Dinujaya</h1>
                <h2>SEE ALL</h2>
            </div>
            <div class="main__content__body">
            <?php
                include 'data.php';
            ?>
            </div>
        </div>

    </main>
    <aside class="right-side">
        <div class="right-side__title">
            <h1>Friend Activity</h1>
            <div name="icons">
                <ion-icon name="person-add-outline"></ion-icon>
                <ion-icon name="close-outline" class="close"></ion-icon>
            </div>
        </div>
        <div class="right-side__content">
            <img src="images/dineth.jpg" alt="..." class="avater">
            <div>
                <h1>Dineth Siriwardha...</h1>
                <div class="song-name">
                    <ion-icon name="musical-notes"></ion-icon>
                    <p class="song">&nbsp Kailashini</p>
                </div>
                <p class="artest">Song By Eranda Abegu...</p>
            </div>
        </div>
        <div class="right-side__content">
            <img src="images/kalu.png" alt="..." class="avater">
            <div>
                <h1>Kalu Malli</h1>
                <div class="song-name">
                    <ion-icon name="musical-notes"></ion-icon>
                    <p class="song">&nbsp Sandawathiye</p>
                </div>
                <p class="artest">Song By Charitha Attalage</p>
            </div>
        </div>
        <div class="right-side__content">
            <img src="images/maniya.png" alt="..." class="avater">
            <div>
                <h1>Maniya</h1>
                <div class="song-name">
                    <ion-icon name="musical-notes"></ion-icon>
                    <p class="song">&nbsp Py FM Theme</p>
                </div>
                <p class="artest">Song By Lahiru Supun</p>
            </div>
        </div>
        <div class="right-side__content">
            <img src="images/hasitha.jpg" alt="..." class="avater">
            <div>
                <h1>Hasitha Sandeepa</h1>
                <div class="song-name">
                    <ion-icon name="musical-notes"></ion-icon>
                    <p class="song">&nbsp Pem Kawak Liyu</p>
                </div>
                <p class="artest">Song By Karunarathna...</p>
            </div>
        </div>
        <div class="right-side__content">
            <img src="images/podda.png" alt="..." class="avater">
            <div>
                <h1>Podda</h1>
                <div class="song-name">
                    <ion-icon name="musical-notes"></ion-icon>
                    <p class="song">&nbsp Channa Kinnaravi</p>
                </div>
                <p class="artest">Song By Pasan Liyanage</p>
            </div>
        </div>
        <div class="right-side__content">
            <img src="images/aruni.jpg" alt="..." class="avater">
            <div>
                <h1>Anusarani Gunaw...</h1>
                <div class="song-name">
                    <ion-icon name="musical-notes"></ion-icon>
                    <p class="song">&nbsp Hudakalawa Remix</p>
                </div>
                <p class="artest">Song By OOSeven</p>
            </div>
        </div>
    </aside>

    <aside class="player">
        <div class="player__left">
            <img src="images/songs/erandi.jpg" alt="" id="track_art">
            <div>
                <h1 id="track_name">INDUSTRY BABY (feat. Jack Harlow)</h1>
                <p id="track_artist">Lil Nas X, Jack Harlow</p>
            </div>
        </div>
        <div class="player__middle">
            <div class="controls">
                <ion-icon name="shuffle" id="random_btn"></ion-icon>
                <ion-icon name="play-skip-back-sharp" id="prev_btn" onclick="prevTrack()"></ion-icon>
                <ion-icon name="play-circle" class="play" id="play_btn" onclick="playpauseTrack()"></ion-icon>
                <ion-icon name="play-skip-forward-sharp" id="next_btn" onclick="nextTrack()"></ion-icon>
                <ion-icon name="repeat" onclick=""></ion-icon>
            </div>
            <div class="track">
                <p id="curr_time">00:00</p>
                <input type="range" class="control_player inpppp" id="seek_slider" min="1" max="100" onchange="seekTo()">
                <p id="total_duration">00:00</p>
            </div>
        </div>
        <div class="player__right">
            <ion-icon name="mic-outline"></ion-icon>
            <ion-icon name="list-outline"></ion-icon>
            <ion-icon name="cellular-outline"></ion-icon>
            <ion-icon name="volume-medium-outline" class="volume"></ion-icon>
            <input type="range" class="control_volume " id="volume_inp" min="1" max="100" value="99" onchange="setVolume()">
            <ion-icon name="expand-outline"></ion-icon>
        </div>
    </aside>
    <script src="dist/all.js?cb=1652929582766"></script>
    <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>

    <script>
        <?php
        include 'stest.php';
        ?>
    </script>

</body>
</html>