function displayPlaylist(playlists){
    let index = randomPLaylist();
    let playlistArray = playlists[index];
    document.getElementById("playlistImage").src = playlists[index].playlist_art;
    document.getElementById("playlistTitle").innerText = playlists[index].playlist_name;
    document.getElementById("creatorName").innerText = playlists[index].playlist_creator;
    makeCards(playlistArray);

    let shuffleButton = document.getElementById("shuffle");
    shuffleButton.addEventListener("click", function(event){
        shuffleplaylist(playlist);
    });

 }

//  create a random playlist for the page
function randomPlaylist(){ 
     let randomNum = Math.floor(Math.random()*(playlists.length+1));
     return randomNum

}
displayPlaylist(randomPlaylist())

function modalcontent(playlist) {

    songList.innerHTML = '';

    playlist["songs"].forEach(song => {
        const remplaylist = document.createElement("div");
        remplaylist.className = "modal-overlay-content";
        remplaylist.innerHTML +=
            `<div class = "overlay-blocks">
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
