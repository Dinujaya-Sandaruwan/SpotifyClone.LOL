<main class="main">
        <div class="main__top-side lofi_top" id="main__top_side">
            <div class="main__top-side__top">
                <div>
                    <ion-icon name="chevron-back"></ion-icon>
                    <ion-icon name="chevron-forward"></ion-icon>
                </div>
                <div class="round" onclick="display_me()" id="dinujaya">
                    <img src="images/profile.jpg" alt="Profile" id="dinujaya_img">
                    <h1>Dinujaya</h1>
                    <ion-icon name="caret-down"></ion-icon>
                </div>
            </div>

            <div class="main__list__top">
                <img src="images/lofi.gif" alt="" class="list__image">
                <div class="titles">
                    <h2>PUBLIC PLAYLIST</h2>
                    <h1>Study Lofi Remix</h1>
                    <div class="next_title">
                        <div class="user">
                            <img src="images/profile.jpg" alt="">
                            <h1>Dinujaya Sandaruwan</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="main__list-content">
            <div class="main__list-content__top">
                <div class="controls">
                    <ion-icon class="play" name="play" onclick="mxp_00()"></ion-icon>
                    <ion-icon name="heart" class="love"></ion-icon>
                    <ion-icon name="arrow-down-circle-outline" class="download h-white"></ion-icon>
                    <div class="dote h-white">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div class="list-right-side">
                    <ion-icon name="search" class="search h-white"></ion-icon>
                    <h1 class="h-white">Custom order</h1>
                    <ion-icon name="caret-down-outline" class="down h-white"></ion-icon>
                </div>
            </div>
            
            <div class="main__list-content__body">
                <table class="lofi-songs" cellspacing="0" cellpadding="0">
                    <tr class="table_main">
                        <th class="time">#</th>
                        <th>TITLE</th>
                        <th>ARTIST</th>
                        <th>DATE ADDED</th>
                        <th><ion-icon name="time-outline" class="time"></ion-icon></th>
                    </tr>
                <?php
                               
                $sql_lofi = "SELECT * FROM `songs` WHERE playlist = 'lofi';";
                
                $result_lofi = $conn->query($sql_lofi);
                $song_no = 0;
                
                
                if ($result_lofi->num_rows > 0) {
                
                while($row_lofi = $result_lofi->fetch_assoc()) {
                    
                    $song_no = $song_no + 1;
                    echo'<tr class="table-body" onclick="lofi_'.$row_lofi['id'].'()" id="lofi_music_'.$row_lofi['id'].'")">';
                    echo'    <td class="hash">';
                    echo'        <p class="number" id="lofi_song_'.$row_lofi['id'].'">'. $song_no .'</p>';
                    echo'        <ion-icon name="play" id="lofi_icon_'.$row_lofi['id'].'" class="play-btn"></ion-icon>';
                    echo'        <div class="now playing" id="lofi_musuc_bars_'.$row_lofi['id'].'">';
                    echo'            <span class="bar n1"></span>';
                    echo'            <span class="bar n2"></span>';
                    echo'            <span class="bar n3"></span>';
                    echo'            <span class="bar n4"></span>';
                    echo'        </div>';
                    echo'    </td>';
                    echo'    <td class="song">';
                    echo'        <img src="'.$row_lofi['thumb'].'" alt="">';
                    echo'        <div>';
                    echo'            <h1 id="lofi_song_name_'.$row_lofi['id'].'">'.$row_lofi['name'].'</h1>';
                    echo'            <h2>Lorem ipsum dolor sit amet.</h2>';
                    echo'        </div>';
                    echo'    </td>';
                    echo'    <td class="art">'.$row_lofi['artist'].'</td>';
                    echo'    <td>'.$row_lofi['date'].'</td>';
                    echo'    <td>00.00</td>';
                    echo'</tr>';
                
                }
                }
                    
                ?>

                </table>
            </div>
        </div>

    </main>
