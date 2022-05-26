let me = document.getElementById('dinujaya');
let me_lofi = document.getElementById('dinujaya_lofi');
let me_img = document.getElementById('dinujaya_img');
let me_lofi_img = document.getElementById('dinujaya_lof_img');

function watch_me(){
    me.style.animation = 'ggg 1s forwards';
    me.style.backgroundColor = 'red';
    me_img.style.border = '2px solid red';

    me_lofi.style.animation = 'ggg 1s forwards';
    me_lofi.style.backgroundColor = 'yellow';
    me_lofi_img.style.border = '2px solid yellow';
    setTimeout(remove_anime_me, 1000);
}

function remove_anime_me(){
    me.style.animation = '';
    me.style.backgroundColor = 'var(--bg-color)';
    me_img.style.border = '2px solid var(--bg-color)';

    me_lofi.style.animation = '';
    me_lofi.style.backgroundColor = 'var(--bg-color)';
    me_lofi_img.style.border = '2px solid var(--bg-color)';
}
