function seek(){document.getElementById("seek_slider").value,this.min,this.max,this.min}document.getElementById("volume_inp").addEventListener("input",(function(){var e=(this.value-this.min)/(this.max-this.min)*100;this.style.background="linear-gradient(to right, #1ED760 0%, #1ED760 "+e+"%, #7d7d7d "+e+"%, #7d7d7d 100%)"})),document.getElementById("volume_inp").addEventListener("mouseover",(function(){var e=(this.value-this.min)/(this.max-this.min)*100;this.style.background="linear-gradient(to right, #1ED760 0%, #1ED760 "+e+"%, #7d7d7d "+e+"%, #7d7d7d 100%)"})),document.getElementById("volume_inp").addEventListener("mouseleave",(function(){var e=(this.value-this.min)/(this.max-this.min)*100;this.style.background="linear-gradient(to right, #fff 0%, #fff "+e+"%, #7d7d7d "+e+"%, #7d7d7d 100%)"}));const music_list=[{img:"images/songs/erandi.jpg",name:"Mamini Mamini Ma Deyya",artist:"Erandi Heshani",music:"music/0_mamini.mp3"},{img:"images/songs/calu p.jpg",name:"Manusath Kule",artist:"Kasun Gunasekara",music:"music/1_manusath.mp3"},{img:"images/songs/sansarini.jpg",name:"Sansarini",artist:"Yasas Medagedara",music:"music/2_sansarini.mp3"},{img:"images/songs/kan thuje.jpg",name:"KAUN TUJHE",artist:"Amaal Mallik, Palak Muchhal",music:"music/3_thuje.mp3"},{img:"images/songs/sandawathiye.jpg",name:"Sandawathiye",artist:"Charitha Attalage",music:"music/4_sandawathiye.mp3"},{img:"images/songs/baby shark.jpg",name:"Baby Shark",artist:"Robin Davies",music:"music/5_baby shark.mp3"},{img:"images/songs/inductryBaby.jpg",name:"INDUSTRY BABY (feat. Jack Harlow)",artist:"Lil Nas X, Jack Harlow",music:"music/6_INDUSTRY BABY.mp3"},{img:"images/songs/adk.jpg",name:"ADK and Yohani - Rider Fighter",artist:"ADK, Yohani",music:"music/7_Rider-Fighter.mp3"},{img:"images/songs/butter.jpg",name:'BTS (방탄소년단) "Butter"',artist:"BTS",music:"music/8_BTS.mp3"},{img:"images/songs/cardi b up.jpg",name:"Cardi B - Up (Official)",artist:"Cardi B",music:"music/8_Cardi B - Up (Official).webm"},{img:"images/songs/rap sellama.jpg",name:"Rap Sellama Mashup (Vol.02)",artist:"Desawana Remix",music:"music/9_Rap Sellama Mashup (Vol.02).mp3"},{img:"images/songs/rude boy.jpg",name:"Rihanna - Rude Boy (Official)",artist:"Rihanna",music:"music/10_Rihanna - Rude Boy (Official).mp3"},{img:"images/songs/sarith & surith.jpg",name:"Sinhala Punjabi Medley",artist:"Sarith Surith & NEWS",music:"music/11_Sinhala Punjabi Medley.mp3"},{img:"images/songs/umariya.jpg",name:"Jiya Re - Umariya ft. News",artist:"Umariya, NEWS",music:"music/12_Jiya Re - Umariya ft. News.mp3"},{img:"images/songs/podda.jpg",name:"Podda",artist:"DJ INK, Monio",music:"music/18_podda.mp3"},{img:"images/songs/infinity.jpg",name:"Infinity",artist:"Jaymes Young",music:"music/17_Jaymes Young - Infinity.mp3"},{img:"images/songs/sada katha.jpg",name:"Sada Katha - Shanaka ft. Kaizer Kaiz",artist:"Shanaka, Kaizer Kaiz",music:"music/16_Sada Katha - Shanaka ft. Kaizer Kaiz.mp3"},{img:"images/songs/mood.jpg",name:"MOOD",artist:"24kGolden, inn dior",music:"music/15_mood.mp3"},{img:"images/songs/hade shoka.jpg",name:"Hade Shoka Gangawe",artist:"Stereomiinds",music:"music/14_Hade Shoka Gangawe.mp3"},{img:"images/songs/desawana v.jpg",name:"Valentine Mashup 2022",artist:"Desawana Remix",music:"music/13_Valentine Mashup 2022.mp3"}];let updateTimer,top_01=document.getElementById("top_01"),top_02=document.getElementById("top_02"),top_03=document.getElementById("top_03"),top_04=document.getElementById("top_04"),top_05=document.getElementById("top_05"),top_06=document.getElementById("top_06"),mx_01=document.getElementById("mx1"),mx_02=document.getElementById("mx2"),mx_03=document.getElementById("mx3"),mx_04=document.getElementById("mx4"),mx_05=document.getElementById("mx5"),mx_06=document.getElementById("mx6"),d_mix_01=document.getElementById("d_mix_01"),d_mix_02=document.getElementById("d_mix_02"),d_mix_03=document.getElementById("d_mix_03"),d_mix_04=document.getElementById("d_mix_04"),d_mix_05=document.getElementById("d_mix_05"),d_mix_06=document.getElementById("d_mix_06"),track_art=document.getElementById("track_art"),track_name=document.getElementById("track_name"),track_artist=document.getElementById("track_artist"),playpause_btn=document.getElementById("play_btn"),next_btn=document.getElementById("next_btn"),prev_btn=document.getElementById("prev_btn"),seek_slider=document.getElementById("seek_slider"),volume_slider=document.getElementById("volume_inp"),curr_time=document.getElementById("curr_time"),total_duration=document.getElementById("total_duration"),randomIcon=document.getElementById("random_btn"),curr_track=document.createElement("audio"),track_index=0,isPlaying=!1,isRandom=!0;loadTrack(track_index);let element_id="",element_name="";function loadTrack(e){clearInterval(updateTimer),reset(),curr_track.src=music_list[e].music,curr_track.load(),track_art.style.backgroundImage="images/songs/erandi.jpg",track_name.textContent=music_list[e].name,track_artist.textContent=music_list[e].artist,updateTimer=setInterval(setUpdate,1e3),curr_track.addEventListener("ended",nextSong)}function reset(){curr_time.textContent="00:00",total_duration.textContent="00:00",seek_slider.value=0}function randomTrack(){isRandom?pauseRandom():playRandom()}function playRandom(){isRandom=!0,randomIcon.classList.add("randomActive")}function pauseRandom(){isRandom=!1,randomIcon.classList.remove("randomActive")}function repeatTrack(){loadTrack(track_index),playTrack()}function playpauseTrack(){isPlaying?pauseTrack():playTrack()}function playTrack(){curr_track.play(),isPlaying=!0,playpause_btn.setAttribute("name","pause-circle")}function pauseTrack(){curr_track.pause(),isPlaying=!1,playpause_btn.setAttribute("name","play-circle"),""!=element_id&&(element_id.setAttribute("name","play"),element_id="")}function nextSong(){nextTrack()}function prevTrack(){track_index>0?track_index-=1:track_index=music_list.length-1,loadTrack(track_index),track_name.innerText=music_list[track_index].name,track_artist.innerText=music_list[track_index].artist,track_art.src=music_list[track_index].img,playTrack()}function seekTo(){let e=curr_track.duration*(seek_slider.value/100);curr_track.currentTime=e}function setVolume(){curr_track.volume=volume_slider.value/100}function setUpdate(){let e=0;if(!isNaN(curr_track.duration)){e=curr_track.currentTime*(100/curr_track.duration),seek_slider.value=e;let t=Math.floor(curr_track.currentTime/60),i=Math.floor(curr_track.currentTime-60*t),a=Math.floor(curr_track.duration/60),n=Math.floor(curr_track.duration-60*a);i<10&&(i="0"+i),n<10&&(n="0"+n),t<10&&(t="0"+t),a<10&&(a="0"+a),curr_time.textContent=t+":"+i,total_duration.textContent=a+":"+n}}document.addEventListener("keypress",(function(e){" "==e.key&&(e.preventDefault(),playpauseTrack())}));let developer=document.getElementById("developer"),close_btn=document.getElementById("close_btn");function remove_me_alet(){close_btn.style.animation="skake 1s forwards",setTimeout(remove_anime,1e3)}function remove_anime(){close_btn.style.animation=""}function remove_me(){developer.style.display="none"}function display_me(){developer.style.display="flex"}function mxp_00(){0==isPlaying?(curr_track=new Audio(music_list[0].music),loadTrack(0),top_01.setAttribute("name","pause"),track_name.innerText=music_list[0].name,track_artist.innerText=music_list[0].artist,track_art.src=music_list[0].img,playpauseTrack(),isPlaying=!0,element_id=top_01,element_name=element_id.id):(top_01.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","top_01"!=element_name&&(curr_track=new Audio(music_list[0].music),loadTrack(0),top_01.setAttribute("name","pause"),track_name.innerText=music_list[0].name,track_artist.innerText=music_list[0].artist,track_art.src=music_list[0].img,playpauseTrack(),isPlaying=!0,element_id=top_01,element_name=element_id.id))}function mxp_01(){0==isPlaying?(curr_track=new Audio(music_list[1].music),loadTrack(1),top_02.setAttribute("name","pause"),track_name.innerText=music_list[1].name,track_artist.innerText=music_list[1].artist,track_art.src=music_list[1].img,playpauseTrack(),isPlaying=!0,element_id=top_02,element_name=element_id.id):(top_02.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","top_02"!=element_name&&(curr_track=new Audio(music_list[1].music),loadTrack(1),top_02.setAttribute("name","pause"),track_name.innerText=music_list[1].name,track_artist.innerText=music_list[1].artist,track_art.src=music_list[1].img,playpauseTrack(),isPlaying=!0,element_id=top_02,element_name=element_id.id))}function mxp_02(){0==isPlaying?(curr_track=new Audio(music_list[2].music),loadTrack(2),top_03.setAttribute("name","pause"),track_name.innerText=music_list[2].name,track_artist.innerText=music_list[2].artist,track_art.src=music_list[2].img,playpauseTrack(),isPlaying=!0,element_id=top_03,element_name=element_id.id):(top_03.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","top_03"!=element_name&&(curr_track=new Audio(music_list[2].music),loadTrack(2),top_03.setAttribute("name","pause"),track_name.innerText=music_list[2].name,track_artist.innerText=music_list[2].artist,track_art.src=music_list[2].img,playpauseTrack(),isPlaying=!0,element_id=top_03,element_name=element_id.id))}function mxp_03(){0==isPlaying?(curr_track=new Audio(music_list[3].music),loadTrack(3),top_04.setAttribute("name","pause"),track_name.innerText=music_list[3].name,track_artist.innerText=music_list[3].artist,track_art.src=music_list[3].img,playpauseTrack(),isPlaying=!0,element_id=top_04,element_name=element_id.id):(top_04.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","top_04"!=element_name&&(curr_track=new Audio(music_list[3].music),loadTrack(3),top_04.setAttribute("name","pause"),track_name.innerText=music_list[3].name,track_artist.innerText=music_list[3].artist,track_art.src=music_list[3].img,playpauseTrack(),isPlaying=!0,element_id=top_04,element_name=element_id.id))}function mxp_04(){0==isPlaying?(curr_track=new Audio(music_list[4].music),loadTrack(4),top_05.setAttribute("name","pause"),track_name.innerText=music_list[4].name,track_artist.innerText=music_list[4].artist,track_art.src=music_list[4].img,playpauseTrack(),isPlaying=!0,element_id=top_05,element_name=element_id.id):(top_05.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","top_05"!=element_name&&(curr_track=new Audio(music_list[4].music),loadTrack(4),top_05.setAttribute("name","pause"),track_name.innerText=music_list[4].name,track_artist.innerText=music_list[4].artist,track_art.src=music_list[4].img,playpauseTrack(),isPlaying=!0,element_id=top_05,element_name=element_id.id))}function mxp_05(){0==isPlaying?(curr_track=new Audio(music_list[5].music),loadTrack(5),top_06.setAttribute("name","pause"),track_name.innerText=music_list[5].name,track_artist.innerText=music_list[5].artist,track_art.src=music_list[5].img,playpauseTrack(),isPlaying=!0,element_id=top_06,element_name=element_id.id):(top_06.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","top_06"!=element_name&&(curr_track=new Audio(music_list[5].music),loadTrack(5),top_06.setAttribute("name","pause"),track_name.innerText=music_list[5].name,track_artist.innerText=music_list[5].artist,track_art.src=music_list[5].img,playpauseTrack(),isPlaying=!0,element_id=top_06,element_name=element_id.id))}function mxp_06(){0==isPlaying?(curr_track=new Audio(music_list[6].music),loadTrack(6),mx_01.setAttribute("name","pause"),track_name.innerText=music_list[6].name,track_artist.innerText=music_list[6].artist,track_art.src=music_list[6].img,playpauseTrack(),isPlaying=!0,element_id=mx_01,element_name=element_id.id):(mx_01.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","mx1"!=element_name&&(curr_track=new Audio(music_list[6].music),loadTrack(6),mx_01.setAttribute("name","pause"),track_name.innerText=music_list[6].name,track_artist.innerText=music_list[6].artist,track_art.src=music_list[6].img,playpauseTrack(),isPlaying=!0,element_id=mx_01,element_name=element_id.id))}function mxp_07(){0==isPlaying?(curr_track=new Audio(music_list[7].music),loadTrack(7),mx_02.setAttribute("name","pause"),track_name.innerText=music_list[7].name,track_artist.innerText=music_list[7].artist,track_art.src=music_list[7].img,playpauseTrack(),isPlaying=!0,element_id=mx_02,element_name=element_id.id):(mx_02.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","mx2"!=element_name&&(curr_track=new Audio(music_list[7].music),loadTrack(7),mx_02.setAttribute("name","pause"),track_name.innerText=music_list[7].name,track_artist.innerText=music_list[7].artist,track_art.src=music_list[7].img,playpauseTrack(),isPlaying=!0,element_id=mx_02,element_name=element_id.id))}function mxp_08(){0==isPlaying?(curr_track=new Audio(music_list[8].music),loadTrack(8),mx_03.setAttribute("name","pause"),track_name.innerText=music_list[8].name,track_artist.innerText=music_list[8].artist,track_art.src=music_list[8].img,playpauseTrack(),isPlaying=!0,element_id=mx_03,element_name=element_id.id):(mx_03.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","mx3"!=element_name&&(curr_track=new Audio(music_list[8].music),loadTrack(8),mx_03.setAttribute("name","pause"),track_name.innerText=music_list[8].name,track_artist.innerText=music_list[8].artist,track_art.src=music_list[8].img,playpauseTrack(),isPlaying=!0,element_id=mx_03,element_name=element_id.id))}function mxp_09(){0==isPlaying?(curr_track=new Audio(music_list[9].music),loadTrack(9),mx_04.setAttribute("name","pause"),track_name.innerText=music_list[9].name,track_artist.innerText=music_list[9].artist,track_art.src=music_list[9].img,playpauseTrack(),isPlaying=!0,element_id=mx_04,element_name=element_id.id):(mx_04.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","mx4"!=element_name&&(curr_track=new Audio(music_list[9].music),loadTrack(9),mx_04.setAttribute("name","pause"),track_name.innerText=music_list[9].name,track_artist.innerText=music_list[9].artist,track_art.src=music_list[9].img,playpauseTrack(),isPlaying=!0,element_id=mx_04,element_name=element_id.id))}function mxp_10(){0==isPlaying?(curr_track=new Audio(music_list[10].music),loadTrack(10),mx_05.setAttribute("name","pause"),track_name.innerText=music_list[10].name,track_artist.innerText=music_list[10].artist,track_art.src=music_list[10].img,playpauseTrack(),isPlaying=!0,element_id=mx_05,element_name=element_id.id):(mx_05.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","mx5"!=element_name&&(curr_track=new Audio(music_list[10].music),loadTrack(10),mx_05.setAttribute("name","pause"),track_name.innerText=music_list[10].name,track_artist.innerText=music_list[10].artist,track_art.src=music_list[10].img,playpauseTrack(),isPlaying=!0,element_id=mx_05,element_name=element_id.id))}function mxp_11(){0==isPlaying?(curr_track=new Audio(music_list[11].music),loadTrack(11),mx_06.setAttribute("name","pause"),track_name.innerText=music_list[11].name,track_artist.innerText=music_list[11].artist,track_art.src=music_list[11].img,playpauseTrack(),isPlaying=!0,element_id=mx_06,element_name=element_id.id):(mx_06.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","mx6"!=element_name&&(curr_track=new Audio(music_list[11].music),loadTrack(11),mx_06.setAttribute("name","pause"),track_name.innerText=music_list[11].name,track_artist.innerText=music_list[11].artist,track_art.src=music_list[11].img,playpauseTrack(),isPlaying=!0,element_id=mx_06,element_name=element_id.id))}function mxp_12(){if(0==isPlaying){let e=Number.parseInt(Math.random()*music_list.length);loadTrack(e),d_mix_01.setAttribute("name","pause"),track_name.innerText=music_list[e].name,track_artist.innerText=music_list[e].artist,track_art.src=music_list[e].img,playpauseTrack(),isPlaying=!0,element_id=d_mix_01,element_name=element_id.id}else if(d_mix_01.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","d_mix_01"!=element_name){let e=Number.parseInt(Math.random()*music_list.length);loadTrack(e),d_mix_01.setAttribute("name","pause"),track_name.innerText=music_list[e].name,track_artist.innerText=music_list[e].artist,track_art.src=music_list[e].img,playpauseTrack(),isPlaying=!0,element_id=d_mix_01,element_name=element_id.id}}function mxp_13(){if(0==isPlaying){let e=Number.parseInt(Math.random()*music_list.length);loadTrack(e),d_mix_02.setAttribute("name","pause"),track_name.innerText=music_list[e].name,track_artist.innerText=music_list[e].artist,track_art.src=music_list[e].img,playpauseTrack(),isPlaying=!0,element_id=d_mix_02,element_name=element_id.id}else if(d_mix_02.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","d_mix_02"!=element_name){let e=Number.parseInt(Math.random()*music_list.length);loadTrack(e),d_mix_02.setAttribute("name","pause"),track_name.innerText=music_list[e].name,track_artist.innerText=music_list[e].artist,track_art.src=music_list[e].img,playpauseTrack(),isPlaying=!0,element_id=d_mix_02,element_name=element_id.id}}function mxp_14(){if(0==isPlaying){let e=Number.parseInt(Math.random()*music_list.length);loadTrack(e),d_mix_03.setAttribute("name","pause"),track_name.innerText=music_list[e].name,track_artist.innerText=music_list[e].artist,track_art.src=music_list[e].img,playpauseTrack(),isPlaying=!0,element_id=d_mix_03,element_name=element_id.id}else if(d_mix_03.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","d_mix_03"!=element_name){let e=Number.parseInt(Math.random()*music_list.length);loadTrack(e),d_mix_03.setAttribute("name","pause"),track_name.innerText=music_list[e].name,track_artist.innerText=music_list[e].artist,track_art.src=music_list[e].img,playpauseTrack(),isPlaying=!0,element_id=d_mix_03,element_name=element_id.id}}function mxp_15(){if(0==isPlaying){let e=Number.parseInt(Math.random()*music_list.length);loadTrack(e),d_mix_04.setAttribute("name","pause"),track_name.innerText=music_list[e].name,track_artist.innerText=music_list[e].artist,track_art.src=music_list[e].img,playpauseTrack(),isPlaying=!0,element_id=d_mix_04,element_name=element_id.id}else if(d_mix_04.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","d_mix_04"!=element_name){let e=Number.parseInt(Math.random()*music_list.length);loadTrack(e),d_mix_04.setAttribute("name","pause"),track_name.innerText=music_list[e].name,track_artist.innerText=music_list[e].artist,track_art.src=music_list[e].img,playpauseTrack(),isPlaying=!0,element_id=d_mix_04,element_name=element_id.id}}function mxp_16(){if(0==isPlaying){let e=Number.parseInt(Math.random()*music_list.length);loadTrack(e),d_mix_05.setAttribute("name","pause"),track_name.innerText=music_list[e].name,track_artist.innerText=music_list[e].artist,track_art.src=music_list[e].img,playpauseTrack(),isPlaying=!0,element_id=d_mix_05,element_name=element_id.id}else if(d_mix_05.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","d_mix_05"!=element_name){let e=Number.parseInt(Math.random()*music_list.length);loadTrack(e),d_mix_05.setAttribute("name","pause"),track_name.innerText=music_list[e].name,track_artist.innerText=music_list[e].artist,track_art.src=music_list[e].img,playpauseTrack(),isPlaying=!0,element_id=d_mix_05,element_name=element_id.id}}function mxp_17(){if(0==isPlaying){let e=Number.parseInt(Math.random()*music_list.length);loadTrack(e),d_mix_06.setAttribute("name","pause"),track_name.innerText=music_list[e].name,track_artist.innerText=music_list[e].artist,track_art.src=music_list[e].img,playpauseTrack(),isPlaying=!0,element_id=d_mix_06,element_name=element_id.id}else if(d_mix_06.setAttribute("name","play"),playpauseTrack(),isPlaying=!1,element_id="","d_mix_06"!=element_name){let e=Number.parseInt(Math.random()*music_list.length);loadTrack(e),d_mix_06.setAttribute("name","pause"),track_name.innerText=music_list[e].name,track_artist.innerText=music_list[e].artist,track_art.src=music_list[e].img,playpauseTrack(),isPlaying=!0,element_id=d_mix_06,element_name=element_id.id}}let volume_div=document.getElementById("volume_div");function volume_click(){console.log("clicked"),volume_div.style.display="block"}
//# sourceMappingURL=all.js.map