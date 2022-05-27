

// const lofi_list = [
//     {
//         id: '1',
//         name: 'name 01',
//         thumb: 'images/songs/628ff11d00d36.jpg',
//         song: 'music/628ff11d0135f.mp3',
//         artist: 'test A 01'
//     },

//     {
//         id: '2',
//         name: 'name 02',
//         thumb: 'images/songs/628ff1349a320.jpg',
//         song: 'music/628ff1349a614.mp3',
//         artist: 'test A 02'
//     }
// ];


function lofi_27(){
    if (isPlaying == false) {
        curr_track = new Audio(lofi_list[0].song);

        curr_track.src = lofi_list[0].song;
        curr_track.load();
        updateTimer = setInterval(setUpdate, 1000);
        curr_track.addEventListener('ended', nextSong);

        document.getElementById('lofi_song_27').style.display = 'none';
        document.getElementById('lofi_icon_27').style.display = 'none';
        document.getElementById('lofi_musuc_bars_27').style.display = 'block';
        document.getElementById('lofi_song_name_27').style.color = 'var(--play-color)';
        track_name.innerText = lofi_list[0].name;
        track_artist.innerText = lofi_list[0].artist;
        track_art.src = lofi_list[0].thumb;
        playpauseTrack();
        isPlaying = true;
        element_id = 'lofi_music_27';
    } else {
        document.getElementById('lofi_song_27').style.removeProperty('display');
        document.getElementById('lofi_icon_27').style.removeProperty('display');
        document.getElementById('lofi_musuc_bars_27').style.removeProperty('display');
        document.getElementById('lofi_song_name_27').style.color = 'var(--white)';
        playpauseTrack();
        isPlaying = false;

        element_id = '';

        if (element_id != 'lofi_music_27') {
            curr_track = new Audio(lofi_list[0].music);
            
            curr_track.src = lofi_list[0].song;
            curr_track.load();
            updateTimer = setInterval(setUpdate, 1000);
            curr_track.addEventListener('ended', nextSong);

            document.getElementById('lofi_song_27').style.display = 'none';
            document.getElementById('lofi_icon_27').style.display = 'none';
            document.getElementById('lofi_musuc_bars_27').style.display = 'block';
            document.getElementById('lofi_song_name_27').style.color = 'var(--play-color)';

            document.getElementById('lofi_song_27').style.removeProperty('display');
            document.getElementById('lofi_icon_27').style.removeProperty('display');
            document.getElementById('lofi_musuc_bars_27').style.removeProperty('display');
            document.getElementById('lofi_song_name_27').style.color = 'var(--white)';

            track_name.innerText = lofi_list[0].name;
            track_artist.innerText = lofi_list[0].artist;
            track_art.src = lofi_list[0].img;
            playpauseTrack();
            isPlaying = true;
            element_id = 'lofi_music_27';
        }
    }
}

function lofi_28(){
    if (isPlaying == false) {
        curr_track = new Audio(lofi_list[1].song);

        curr_track.src = lofi_list[1].song;
        curr_track.load();
        updateTimer = setInterval(setUpdate, 1000);
        curr_track.addEventListener('ended', nextSong);

        document.getElementById('lofi_song_28').style.display = 'none';
        document.getElementById('lofi_icon_28').style.display = 'none';
        document.getElementById('lofi_musuc_bars_28').style.display = 'block';
        document.getElementById('lofi_song_name_28').style.color = 'var(--play-color)';
        track_name.innerText = lofi_list[1].name;
        track_artist.innerText = lofi_list[1].artist;
        track_art.src = lofi_list[1].thumb;
        playpauseTrack();
        isPlaying = true;
        element_id = 'lofi_music_27';
    } else {
        document.getElementById('lofi_song_28').style.removeProperty('display');
        document.getElementById('lofi_icon_28').style.removeProperty('display');
        document.getElementById('lofi_musuc_bars_28').style.removeProperty('display');
        document.getElementById('lofi_song_name_28').style.color = 'var(--white)';
        playpauseTrack();
        isPlaying = false;

        element_id = '';

        if (element_id != 'lofi_music_28') {
            curr_track = new Audio(lofi_list[1].music);
            
            curr_track.src = lofi_list[1].song;
            curr_track.load();
            updateTimer = setInterval(setUpdate, 1000);
            curr_track.addEventListener('ended', nextSong);

            document.getElementById('lofi_song_28').style.display = 'none';
            document.getElementById('lofi_icon_28').style.display = 'none';
            document.getElementById('lofi_musuc_bars_28').style.display = 'block';
            document.getElementById('lofi_song_name_28').style.color = 'var(--play-color)';

            document.getElementById('lofi_song_27').style.removeProperty('display');
            document.getElementById('lofi_icon_27').style.removeProperty('display');
            document.getElementById('lofi_musuc_bars_27').style.removeProperty('display');
            document.getElementById('lofi_song_name_27').style.color = 'var(--white)';

            track_name.innerText = lofi_list[1].name;
            track_artist.innerText = lofi_list[1].artist;
            track_art.src = lofi_list[1].img;
            playpauseTrack();
            isPlaying = true;
            element_id = 'lofi_music_21';
        }
    }
}


