function mxp_00(){
    if (isPlaying == false) {
        curr_track = new Audio(music_list[0].music);
        loadTrack(0)
        top_01.setAttribute('name', 'pause');
        track_name.innerText = music_list[0].name;
        track_artist.innerText = music_list[0].artist;
        track_art.src = music_list[0].img;
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
            curr_track = new Audio(music_list[0].music);
            loadTrack(0)
            top_01.setAttribute('name', 'pause');
            track_name.innerText = music_list[0].name;
            track_artist.innerText = music_list[0].artist;
            track_art.src = music_list[0].img;
            playpauseTrack();
            isPlaying = true;
            element_id = top_01;
            element_name = element_id.id;
        }
    }
}

function mxp_01(){
    if (isPlaying == false) {
        curr_track = new Audio(music_list[1].music);
        loadTrack(1)
        top_02.setAttribute('name', 'pause');
        track_name.innerText = music_list[1].name;
        track_artist.innerText = music_list[1].artist;
        track_art.src = music_list[1].img;
        playpauseTrack();
        isPlaying = true;
        element_id = top_02;
        element_name = element_id.id
    } else {
        top_02.setAttribute('name', 'play');
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'top_02') {
            curr_track = new Audio(music_list[1].music);
            loadTrack(1)
            top_02.setAttribute('name', 'pause');
            track_name.innerText = music_list[1].name;
            track_artist.innerText = music_list[1].artist;
            track_art.src = music_list[1].img;
            playpauseTrack();
            isPlaying = true;
            element_id = top_02;
            element_name = element_id.id;
        }
    }
}

function mxp_02(){
    if (isPlaying == false) {
        curr_track = new Audio(music_list[2].music);
        loadTrack(2)
        top_03.setAttribute('name', 'pause'); //change
        track_name.innerText = music_list[2].name;
        track_artist.innerText = music_list[2].artist;
        track_art.src = music_list[2].img;
        playpauseTrack();
        isPlaying = true;
        element_id = top_03; //change
        element_name = element_id.id
    } else {
        top_03.setAttribute('name', 'play');  //change
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'top_03') { //change
            curr_track = new Audio(music_list[2].music);
            loadTrack(2)
            top_03.setAttribute('name', 'pause');    //change
            track_name.innerText = music_list[2].name;
            track_artist.innerText = music_list[2].artist;
            track_art.src = music_list[2].img;
            playpauseTrack();
            isPlaying = true;
            element_id = top_03;  //change
            element_name = element_id.id;
        }
    }
}

function mxp_03(){
    if (isPlaying == false) {
        curr_track = new Audio(music_list[3].music);
        loadTrack(3)
        top_04.setAttribute('name', 'pause'); //change
        track_name.innerText = music_list[3].name;
        track_artist.innerText = music_list[3].artist;
        track_art.src = music_list[3].img;
        playpauseTrack();
        isPlaying = true;
        element_id = top_04; //change
        element_name = element_id.id
    } else {
        top_04.setAttribute('name', 'play');  //change
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'top_04') { //change
            curr_track = new Audio(music_list[3].music);
            loadTrack(3)
            top_04.setAttribute('name', 'pause');    //change
            track_name.innerText = music_list[3].name;
            track_artist.innerText = music_list[3].artist;
            track_art.src = music_list[3].img;
            playpauseTrack();
            isPlaying = true;
            element_id = top_04;  //change
            element_name = element_id.id;
        }
    }
}

function mxp_04(){
    if (isPlaying == false) {
        curr_track = new Audio(music_list[4].music);
        loadTrack(4)
        top_05.setAttribute('name', 'pause'); //change
        track_name.innerText = music_list[4].name;
        track_artist.innerText = music_list[4].artist;
        track_art.src = music_list[4].img;
        playpauseTrack();
        isPlaying = true;
        element_id = top_05; //change
        element_name = element_id.id
    } else {
        top_05.setAttribute('name', 'play');  //change
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'top_05') { //change
            curr_track = new Audio(music_list[4].music);
            loadTrack(4)
            top_05.setAttribute('name', 'pause');    //change
            track_name.innerText = music_list[4].name;
            track_artist.innerText = music_list[4].artist;
            track_art.src = music_list[4].img;
            playpauseTrack();
            isPlaying = true;
            element_id = top_05;  //change
            element_name = element_id.id;
        }
    }
}

function mxp_05(){
    if (isPlaying == false) {
        curr_track = new Audio(music_list[5].music);
        loadTrack(5)
        top_06.setAttribute('name', 'pause'); //change
        track_name.innerText = music_list[5].name;
        track_artist.innerText = music_list[5].artist;
        track_art.src = music_list[5].img;
        playpauseTrack();
        isPlaying = true;
        element_id = top_06; //change
        element_name = element_id.id
    } else {
        top_06.setAttribute('name', 'play');  //change
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'top_06') { //change
            curr_track = new Audio(music_list[5].music);
            loadTrack(5)
            top_06.setAttribute('name', 'pause');    //change
            track_name.innerText = music_list[5].name;
            track_artist.innerText = music_list[5].artist;
            track_art.src = music_list[5].img;
            playpauseTrack();
            isPlaying = true;
            element_id = top_06;  //change
            element_name = element_id.id;
        }
    }
}

function mxp_06(){
    if (isPlaying == false) {
        curr_track = new Audio(music_list[6].music);
        loadTrack(6)
        mx_01.setAttribute('name', 'pause'); //change
        track_name.innerText = music_list[6].name;
        track_artist.innerText = music_list[6].artist;
        track_art.src = music_list[6].img;
        playpauseTrack();
        isPlaying = true;
        element_id = mx_01; //change
        element_name = element_id.id
    } else {
        mx_01.setAttribute('name', 'play');  //change
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'mx1') { //change
            curr_track = new Audio(music_list[6].music);
            loadTrack(6)
            mx_01.setAttribute('name', 'pause');    //change
            track_name.innerText = music_list[6].name;
            track_artist.innerText = music_list[6].artist;
            track_art.src = music_list[6].img;
            playpauseTrack();
            isPlaying = true;
            element_id = mx_01;  //change
            element_name = element_id.id;
        }
    }
}

function mxp_07(){
    if (isPlaying == false) {
        curr_track = new Audio(music_list[7].music);
        loadTrack(7)
        mx_02.setAttribute('name', 'pause'); //change
        track_name.innerText = music_list[7].name;
        track_artist.innerText = music_list[7].artist;
        track_art.src = music_list[7].img;
        playpauseTrack();
        isPlaying = true;
        element_id = mx_02; //change
        element_name = element_id.id
    } else {
        mx_02.setAttribute('name', 'play');  //change
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'mx2') { //change
            curr_track = new Audio(music_list[7].music);
            loadTrack(7)
            mx_02.setAttribute('name', 'pause');    //change
            track_name.innerText = music_list[7].name;
            track_artist.innerText = music_list[7].artist;
            track_art.src = music_list[7].img;
            playpauseTrack();
            isPlaying = true;
            element_id = mx_02;  //change
            element_name = element_id.id;
        }
    }
}

function mxp_08(){
    if (isPlaying == false) {
        curr_track = new Audio(music_list[8].music);
        loadTrack(8)
        mx_03.setAttribute('name', 'pause'); //change
        track_name.innerText = music_list[8].name;
        track_artist.innerText = music_list[8].artist;
        track_art.src = music_list[8].img;
        playpauseTrack();
        isPlaying = true;
        element_id = mx_03; //change
        element_name = element_id.id
    } else {
        mx_03.setAttribute('name', 'play');  //change
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'mx3') { //change
            curr_track = new Audio(music_list[8].music);
            loadTrack(8)
            mx_03.setAttribute('name', 'pause');    //change
            track_name.innerText = music_list[8].name;
            track_artist.innerText = music_list[8].artist;
            track_art.src = music_list[8].img;
            playpauseTrack();
            isPlaying = true;
            element_id = mx_03;  //change
            element_name = element_id.id;
        }
    }
}

function mxp_09(){
    if (isPlaying == false) {
        curr_track = new Audio(music_list[9].music);
        loadTrack(9)
        mx_04.setAttribute('name', 'pause'); //change
        track_name.innerText = music_list[9].name;
        track_artist.innerText = music_list[9].artist;
        track_art.src = music_list[9].img;
        playpauseTrack();
        isPlaying = true;
        element_id = mx_04; //change
        element_name = element_id.id
    } else {
        mx_04.setAttribute('name', 'play');  //change
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'mx4') { //change
            curr_track = new Audio(music_list[9].music);
            loadTrack(9)
            mx_04.setAttribute('name', 'pause');    //change
            track_name.innerText = music_list[9].name;
            track_artist.innerText = music_list[9].artist;
            track_art.src = music_list[9].img;
            playpauseTrack();
            isPlaying = true;
            element_id = mx_04;  //change
            element_name = element_id.id;
        }
    }
}

function mxp_10(){
    if (isPlaying == false) {
        curr_track = new Audio(music_list[10].music);
        loadTrack(10)
        mx_05.setAttribute('name', 'pause'); //change
        track_name.innerText = music_list[10].name;
        track_artist.innerText = music_list[10].artist;
        track_art.src = music_list[10].img;
        playpauseTrack();
        isPlaying = true;
        element_id = mx_05; //change
        element_name = element_id.id
    } else {
        mx_05.setAttribute('name', 'play');  //change
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'mx5') { //change
            curr_track = new Audio(music_list[10].music);
            loadTrack(10)
            mx_05.setAttribute('name', 'pause');    //change
            track_name.innerText = music_list[10].name;
            track_artist.innerText = music_list[10].artist;
            track_art.src = music_list[10].img;
            playpauseTrack();
            isPlaying = true;
            element_id = mx_05;  //change
            element_name = element_id.id;
        }
    }
}

function mxp_11(){
    if (isPlaying == false) {
        curr_track = new Audio(music_list[11].music);
        loadTrack(11)
        mx_06.setAttribute('name', 'pause'); //change
        track_name.innerText = music_list[11].name;
        track_artist.innerText = music_list[11].artist;
        track_art.src = music_list[11].img;
        playpauseTrack();
        isPlaying = true;
        element_id = mx_06; //change
        element_name = element_id.id
    } else {
        mx_06.setAttribute('name', 'play');  //change
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'mx6') { //change
            curr_track = new Audio(music_list[11].music);
            loadTrack(11)
            mx_06.setAttribute('name', 'pause');    //change
            track_name.innerText = music_list[11].name;
            track_artist.innerText = music_list[11].artist;
            track_art.src = music_list[11].img;
            playpauseTrack();
            isPlaying = true;
            element_id = mx_06;  //change
            element_name = element_id.id;
        }
    }
}

function mxp_12(){
    if (isPlaying == false) {
        let random_index = Number.parseInt(Math.random() * music_list.length);
        loadTrack(random_index)
        d_mix_01.setAttribute('name', 'pause'); //change
        track_name.innerText = music_list[random_index].name;
        track_artist.innerText = music_list[random_index].artist;
        track_art.src = music_list[random_index].img;
        playpauseTrack();
        isPlaying = true;
        element_id = d_mix_01; //change
        element_name = element_id.id
    } else {
        d_mix_01.setAttribute('name', 'play');  //change
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'd_mix_01') { //change
            let random_index = Number.parseInt(Math.random() * music_list.length);
            loadTrack(random_index)
            d_mix_01.setAttribute('name', 'pause');    //change
            track_name.innerText = music_list[random_index].name;
            track_artist.innerText = music_list[random_index].artist;
            track_art.src = music_list[random_index].img;
            playpauseTrack();
            isPlaying = true;
            element_id = d_mix_01;  //change
            element_name = element_id.id;
        }
    }
}

function mxp_13(){
    if (isPlaying == false) {
        let random_index = Number.parseInt(Math.random() * music_list.length);
        loadTrack(random_index)
        d_mix_02.setAttribute('name', 'pause'); //change
        track_name.innerText = music_list[random_index].name;
        track_artist.innerText = music_list[random_index].artist;
        track_art.src = music_list[random_index].img;
        playpauseTrack();
        isPlaying = true;
        element_id = d_mix_02; //change
        element_name = element_id.id
    } else {
        d_mix_02.setAttribute('name', 'play');  //change
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'd_mix_02') { //change
            let random_index = Number.parseInt(Math.random() * music_list.length);
            loadTrack(random_index)
            d_mix_02.setAttribute('name', 'pause');    //change
            track_name.innerText = music_list[random_index].name;
            track_artist.innerText = music_list[random_index].artist;
            track_art.src = music_list[random_index].img;
            playpauseTrack();
            isPlaying = true;
            element_id = d_mix_02;  //change
            element_name = element_id.id;
        }
    }
}

function mxp_14(){
    if (isPlaying == false) {
        let random_index = Number.parseInt(Math.random() * music_list.length);
        loadTrack(random_index)
        d_mix_03.setAttribute('name', 'pause'); //change
        track_name.innerText = music_list[random_index].name;
        track_artist.innerText = music_list[random_index].artist;
        track_art.src = music_list[random_index].img;
        playpauseTrack();
        isPlaying = true;
        element_id = d_mix_03; //change
        element_name = element_id.id
    } else {
        d_mix_03.setAttribute('name', 'play');  //change
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'd_mix_03') { //change
            let random_index = Number.parseInt(Math.random() * music_list.length);
            loadTrack(random_index)
            d_mix_03.setAttribute('name', 'pause');    //change
            track_name.innerText = music_list[random_index].name;
            track_artist.innerText = music_list[random_index].artist;
            track_art.src = music_list[random_index].img;
            playpauseTrack();
            isPlaying = true;
            element_id = d_mix_03;  //change
            element_name = element_id.id;
        }
    }
}

function mxp_15(){
    if (isPlaying == false) {
        let random_index = Number.parseInt(Math.random() * music_list.length);
        loadTrack(random_index)
        d_mix_04.setAttribute('name', 'pause'); //change
        track_name.innerText = music_list[random_index].name;
        track_artist.innerText = music_list[random_index].artist;
        track_art.src = music_list[random_index].img;
        playpauseTrack();
        isPlaying = true;
        element_id = d_mix_04; //change
        element_name = element_id.id
    } else {
        d_mix_04.setAttribute('name', 'play');  //change
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'd_mix_04') { //change
            let random_index = Number.parseInt(Math.random() * music_list.length);
            loadTrack(random_index)
            d_mix_04.setAttribute('name', 'pause');    //change
            track_name.innerText = music_list[random_index].name;
            track_artist.innerText = music_list[random_index].artist;
            track_art.src = music_list[random_index].img;
            playpauseTrack();
            isPlaying = true;
            element_id = d_mix_04;  //change
            element_name = element_id.id;
        }
    }
}

function mxp_16(){
    if (isPlaying == false) {
        let random_index = Number.parseInt(Math.random() * music_list.length);
        loadTrack(random_index)
        d_mix_05.setAttribute('name', 'pause'); //change
        track_name.innerText = music_list[random_index].name;
        track_artist.innerText = music_list[random_index].artist;
        track_art.src = music_list[random_index].img;
        playpauseTrack();
        isPlaying = true;
        element_id = d_mix_05; //change
        element_name = element_id.id
    } else {
        d_mix_05.setAttribute('name', 'play');  //change
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'd_mix_05') { //change
            let random_index = Number.parseInt(Math.random() * music_list.length);
            loadTrack(random_index)
            d_mix_05.setAttribute('name', 'pause');    //change
            track_name.innerText = music_list[random_index].name;
            track_artist.innerText = music_list[random_index].artist;
            track_art.src = music_list[random_index].img;
            playpauseTrack();
            isPlaying = true;
            element_id = d_mix_05;  //change
            element_name = element_id.id;
        }
    }
}

function mxp_17(){
    if (isPlaying == false) {
        let random_index = Number.parseInt(Math.random() * music_list.length);
        loadTrack(random_index)
        d_mix_06.setAttribute('name', 'pause'); //change
        track_name.innerText = music_list[random_index].name;
        track_artist.innerText = music_list[random_index].artist;
        track_art.src = music_list[random_index].img;
        playpauseTrack();
        isPlaying = true;
        element_id = d_mix_06; //change
        element_name = element_id.id
    } else {
        d_mix_06.setAttribute('name', 'play');  //change
        playpauseTrack();
        isPlaying = false;
        element_id = '';

        if (element_name != 'd_mix_06') { //change
            let random_index = Number.parseInt(Math.random() * music_list.length);
            loadTrack(random_index)
            d_mix_06.setAttribute('name', 'pause');    //change
            track_name.innerText = music_list[random_index].name;
            track_artist.innerText = music_list[random_index].artist;
            track_art.src = music_list[random_index].img;
            playpauseTrack();
            isPlaying = true;
            element_id = d_mix_06;  //change
            element_name = element_id.id;
        }
    }
}