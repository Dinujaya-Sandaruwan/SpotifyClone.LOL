let developer = document.getElementById('developer');
let close_btn = document.getElementById('close_btn');
// developer.style.animation = 'animation: skake 1s forwards';

function remove_me_alet(){
    close_btn.style.animation = 'skake 1s forwards';
    setTimeout(remove_anime, 1000);
}

function remove_anime(){
    close_btn.style.animation = '';
}

function remove_me(){
    developer.style.display = 'none';
}

function display_me(){
    developer.style.display = 'flex';
}