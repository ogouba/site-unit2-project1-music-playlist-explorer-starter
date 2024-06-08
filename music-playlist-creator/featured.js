function displayPlaylist(playlists){
    let index = randomPlaylist(playlists);
    let playlistArray = playlists[index];
    document.getElementById("playlist-image").src = playlists[index].playlist_art;
    document.getElementById("playlist-title").innerText = playlists[index].playlist_name;
    document.getElementById("playlist-creator").innerText = playlists[index].playlist_creator;

 }

//  create a random playlist for the page
function randomPlaylist(playlists){ 
     let randomNum = Math.floor(Math.random()*(playlists.length));
     return randomNum
}

displayPlaylist(data.playlists)

function modalcontent(playlist) {

    let songList = document.getElementById("songs-container-feature");

    playlist["songs"].forEach(song => {
        const remplaylist = document.createElement("div");
        remplaylist.className = "modal-overlay-content";
        remplaylist.innerHTML +=
            `<div class = "songs-container-feature">
                <img src = "${song.cover_art}"/>
                <div class= "songtext">
                    ${song.title}</br>
                    ${song.artist}</br>
                    ${song.album}</br>
                 </div>
                <div id = "songtime">${song.duration}</br> </div
            </div>`
            ;

        songList.appendChild(remplaylist);
    })
}

modalcontent(data["playlists"][randomPlaylist(data["playlists"])])

