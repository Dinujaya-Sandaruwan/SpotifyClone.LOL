// Instantiating the global app object
// var app = {};

// let topp = document.getElementById('top');
// let round = document.getElementById('round');

// round.addEventListener('mouseover',test);
// round.addEventListener('mouseleave',test1);

// function test() {
//     topp.style.backgroundImage = 'linear-gradient(to bottom, var(--white) 0%, var(--bg-color) 80%)';
    
// }
// function test1() {
//     topp.style.backgroundImage = 'linear-gradient(to bottom, var(--green) 0%, var(--bg-color) 80%)';
    
// }

// Volume and Player background and forground color changer
document.getElementById("volume_inp").addEventListener('input',  function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #1ED760 0%, #1ED760 ' + value + '%, #7d7d7d ' + value + '%, #7d7d7d 100%)'
});
document.getElementById("volume_inp").addEventListener('mouseover',  function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #1ED760 0%, #1ED760 ' + value + '%, #7d7d7d ' + value + '%, #7d7d7d 100%)'
});
document.getElementById("volume_inp").addEventListener('mouseleave',  function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #fff 0%, #fff ' + value + '%, #7d7d7d ' + value + '%, #7d7d7d 100%)'
});

function seek(){
    var seek = document.getElementById("seek_slider");
    var value = (seek.value-this.min)/(this.max-this.min)*100
}

// document.getElementById("seek_slider").addEventListener('mouseover',  function() {
//     var value = (this.value-this.min)/(this.max-this.min)*100
//     this.style.background = 'linear-gradient(to right, #1ED760 0%, #1ED760 ' + value + '%, #7d7d7d ' + value + '%, #7d7d7d 100%)'
// });
// document.getElementById("seek_slider").addEventListener('mouseover',  function() {
//     var value = (this.value-this.min)/(this.max-this.min)*100
//     this.style.background = 'linear-gradient(to right, #1ED760 0%, #1ED760 ' + value + '%, #7d7d7d ' + value + '%, #7d7d7d 100%)'
// });
// document.getElementById("seek_slider").addEventListener('mouseleave',  function() {
//     var value = (this.value-this.min)/(this.max-this.min)*100
//     this.style.background = 'white'
// });

const music_list = [
    {
        img : 'images/songs/erandi.jpg',
        name : 'Mamini Mamini Ma Deyya',
        artist : 'Erandi Heshani',
        music : 'music/0_mamini.mp3'
    },
    {
        img : 'images/songs/calu p.jpg',
        name : 'Manusath Kule',
        artist : 'Kasun Gunasekara',
        music : 'music/1_manusath.mp3'
    },
    {
        img : 'images/songs/sansarini.jpg',
        name : 'Sansarini',
        artist : 'Yasas Medagedara',
        music : 'music/2_sansarini.mp3'
    },
    {
        img : 'images/songs/kan thuje.jpg',
        name : 'KAUN TUJHE',
        artist : 'Amaal Mallik, Palak Muchhal',
        music : 'music/3_thuje.mp3'
    },
    {
        img : 'images/songs/sandawathiye.jpg',
        name : 'Sandawathiye',
        artist : 'Charitha Attalage',
        music : 'music/4_sandawathiye.mp3'
    },
    {
        img : 'images/songs/baby shark.jpg',
        name : 'Baby Shark',
        artist : 'Robin Davies',
        music : 'music/5_baby shark.mp3'
    },
    {
        img : 'images/songs/inductryBaby.jpg',
        name : 'INDUSTRY BABY (feat. Jack Harlow)',
        artist : 'Lil Nas X, Jack Harlow',
        music : 'music/6_INDUSTRY BABY.mp3'
    },
    {
        img : 'images/songs/adk.jpg',
        name : 'ADK and Yohani - Rider Fighter',
        artist : 'ADK, Yohani',
        music : 'music/7_Rider-Fighter.mp3'
    },
    {
        img : 'images/songs/butter.jpg',
        name : 'BTS (방탄소년단) "Butter"',
        artist : 'BTS',
        music : 'music/8_BTS.mp3'
    },
    {
        img : 'images/songs/cardi b up.jpg',
        name : 'Cardi B - Up (Official)',
        artist : 'Cardi B',
        music : 'music/8_Cardi B - Up (Official).webm'
    },
    {
        img : 'images/songs/rap sellama.jpg',
        name : 'Rap Sellama Mashup (Vol.02)',
        artist : 'Desawana Remix',
        music : 'music/9_Rap Sellama Mashup (Vol.02).mp3'
    },
    {
        img : 'images/songs/rude boy.jpg',
        name : 'Rihanna - Rude Boy (Official)',
        artist : 'Rihanna',
        music : 'music/10_Rihanna - Rude Boy (Official).mp3'
    },
    {
        img : 'images/songs/sarith & surith.jpg',
        name : 'Sinhala Punjabi Medley',
        artist : 'Sarith Surith & NEWS',
        music : 'music/11_Sinhala Punjabi Medley.mp3'
    },
    {
        img : 'images/songs/umariya.jpg',
        name : 'Jiya Re - Umariya ft. News',
        artist : 'Umariya, NEWS',
        music : 'music/12_Jiya Re - Umariya ft. News.mp3'
    },
    {
        img : 'images/songs/podda.jpg',
        name : 'Podda',
        artist : 'DJ INK, Monio',
        music : 'music/18_podda.mp3'
    },
    {
        img : 'images/songs/infinity.jpg',
        name : 'Infinity',
        artist : 'Jaymes Young',
        music : 'music/17_Jaymes Young - Infinity.mp3'
    },
    {
        img : 'images/songs/sada katha.jpg',
        name : 'Sada Katha - Shanaka ft. Kaizer Kaiz',
        artist : 'Shanaka, Kaizer Kaiz',
        music : 'music/16_Sada Katha - Shanaka ft. Kaizer Kaiz.mp3'
    },
    {
        img : 'images/songs/mood.jpg',
        name : 'MOOD',
        artist : '24kGolden, inn dior',
        music : 'music/15_mood.mp3'
    },
    {
        img : 'images/songs/hade shoka.jpg',
        name : 'Hade Shoka Gangawe',
        artist : 'Stereomiinds',
        music : 'music/14_Hade Shoka Gangawe.mp3'
    },
    {
        img : 'images/songs/desawana v.jpg',
        name : 'Valentine Mashup 2022',
        artist : 'Desawana Remix',
        music : 'music/13_Valentine Mashup 2022.mp3'
    },

];


let top_01 = document.getElementById('top_01');
let top_02 = document.getElementById('top_02');
let top_03 = document.getElementById('top_03');
let top_04 = document.getElementById('top_04');
let top_05 = document.getElementById('top_05');
let top_06 = document.getElementById('top_06');

let mx_01 = document.getElementById('mx1');
let mx_02 = document.getElementById('mx2');
let mx_03 = document.getElementById('mx3');
let mx_04 = document.getElementById('mx4');
let mx_05 = document.getElementById('mx5');
let mx_06 = document.getElementById('mx6');

let d_mix_01 = document.getElementById('d_mix_01');
let d_mix_02 = document.getElementById('d_mix_02');
let d_mix_03 = document.getElementById('d_mix_03');
let d_mix_04 = document.getElementById('d_mix_04');
let d_mix_05 = document.getElementById('d_mix_05');
let d_mix_06 = document.getElementById('d_mix_06');

let track_art = document.getElementById('track_art');
let track_name = document.getElementById('track_name');
let track_artist = document.getElementById('track_artist');

let playpause_btn = document.getElementById('play_btn');
let next_btn = document.getElementById('next_btn');
let prev_btn = document.getElementById('prev_btn');

let seek_slider = document.getElementById('seek_slider');
let volume_slider = document.getElementById('volume_inp');
let curr_time = document.getElementById('curr_time');
let total_duration = document.getElementById('total_duration');
let randomIcon = document.getElementById('random_btn');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = true;
let updateTimer;

loadTrack(track_index);

// All Play Functions
let element_id = '';
let element_name = '';

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "images/songs/erandi.jpg";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    // now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextSong);
    // random_bg_color();
}

function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    // track_art.classList.add('rotate');
    // wave.classList.add('loader');
    playpause_btn.setAttribute('name', 'pause-circle');
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    // track_art.classList.remove('rotate');
    // wave.classList.remove('loader');
    playpause_btn.setAttribute('name', 'play-circle');
    if (element_id != '') {
        element_id.setAttribute('name', 'play');
        element_id = ''; 
    }

}

function nextSong() {
    nextTrack()
}

// function nextTrack(){
//     if(track_index < music_list.length - 1 && isRandom === false){
//         track_index += 1;
//     }else if(track_index < music_list.length - 1 && isRandom === true){
//         let random_index = Number.parseInt(Math.random() * music_list.length);
//         track_index = random_index;
//     }else{
//         track_index = 0;
//     }
//     loadTrack(track_index);
//     track_name.innerText = music_list[track_index].name;
//     track_artist.innerText = music_list[track_index].artist;
//     track_art.src = music_list[track_index].img;
//     playTrack();
// }
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    track_name.innerText = music_list[track_index].name;
    track_artist.innerText = music_list[track_index].artist;
    track_art.src = music_list[track_index].img;
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}

document.addEventListener("keypress", function onEvent(e) {
    if (e.key == ' ') {
        e.preventDefault();
        playpauseTrack()
    }
});
