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

document.getElementById("play_inp").addEventListener('input',  function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #1ED760 0%, #1ED760 ' + value + '%, #7d7d7d ' + value + '%, #7d7d7d 100%)'
});
document.getElementById("play_inp").addEventListener('mouseover',  function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #1ED760 0%, #1ED760 ' + value + '%, #7d7d7d ' + value + '%, #7d7d7d 100%)'
});
document.getElementById("play_inp").addEventListener('mouseleave',  function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #fff 0%, #fff ' + value + '%, #7d7d7d ' + value + '%, #7d7d7d 100%)'
});

const music_list = [
    {
        name : 'INDUSTRY BABY (feat. Jack Harlow)',
        artist : 'Lil Nas X, Jack Harlow',
        img : 'images/songs/inductryBaby.jpg',
        music : 'music/INDUSTRY BABY.mp3'
    }
]


mx1 = document.getElementById('mx1');
mx2 = document.getElementById('mx2');
mx3 = document.getElementById('mx3');
mx4 = document.getElementById('mx4');
mx5 = document.getElementById('mx5');
mx6 = document.getElementById('mx6');
play_btn = document.getElementById('play_btn');

let isPlaying = false;

// play Song
function play(){
    play_btn.setAttribute('name', 'pause-circle');
    isPlaying = true;
}

// Pause Song
function pause(){
    play_btn.setAttribute('name', 'play-circle');
    isPlaying = false;
}

function mx(){
    var audio = new Audio(music_list[0].music);
    audio.play();
}

// Load Tracks
// load_track(track_index);

// function load_track(track_index){

// }