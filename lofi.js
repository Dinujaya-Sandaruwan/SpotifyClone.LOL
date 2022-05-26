

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


function lofi_01(){
    if (isPlaying == false) {
        curr_track = new Audio(lofi_list[0].song);

        curr_track.src = lofi_list[0].song;
        curr_track.load();
        updateTimer = setInterval(setUpdate, 1000);
        curr_track.addEventListener('ended', nextSong);

        document.getElementById('number_01').style.display = 'none';
        document.getElementById('icon_01').style.display = 'none';
        document.getElementById('music_bars_01').style.display = 'block';
        document.getElementById('song_name_01').style.color = 'var(--play-color)';
        track_name.innerText = lofi_list[0].name;
        track_artist.innerText = lofi_list[0].artist;
        track_art.src = lofi_list[0].thumb;
        playpauseTrack();
        isPlaying = true;
        element_id = top_01;
        element_name = element_id.id;
    } else {
        top_01.setAttribute('name', 'play');
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'top_01') {
            curr_track = new Audio(lofi_list[0].music);
            loadTrack(0)
            top_01.setAttribute('name', 'pause');
            track_name.innerText = lofi_list[0].name;
            track_artist.innerText = lofi_list[0].artist;
            track_art.src = lofi_list[0].img;
            playpauseTrack();
            isPlaying = true;
            element_id = top_01;
            element_name = element_id.id;
        }
    }
}