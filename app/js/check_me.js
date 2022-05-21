let me = document.getElementById('dinujaya');

function watch_me(){
    me.style.animation = 'ggg 1s forwards';
    me.style.backgroundColor = 'red';
    setTimeout(remove_anime_me, 1000);
}

function remove_anime_me(){
    me.style.animation = '';
    me.style.backgroundColor = 'var(--bg-color)';
}
