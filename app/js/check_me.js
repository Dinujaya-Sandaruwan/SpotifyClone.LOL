let me = document.getElementById('dinujaya');
let me_img = document.getElementById('dinujaya_img');

function watch_me(){
    me.style.animation = 'ggg 1s forwards';
    me.style.backgroundColor = 'red';
    me_img.style.border = '2px solid red';
    setTimeout(remove_anime_me, 1000);
}

function remove_anime_me(){
    me.style.animation = '';
    me.style.backgroundColor = 'var(--bg-color)';
    me_img.style.border = '2px solid var(--bg-color)';
}
