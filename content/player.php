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
            <div class="volume_div" id="volume_div"> <input type="range" class="control_volume " id="volume_inp" min="1" max="100" value="99" onchange="setVolume()"></div>
            <ion-icon name="expand-outline"></ion-icon>
        </div>
    </aside>