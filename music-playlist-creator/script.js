var modal = document.getElementById("playlistmodal");
var span = document.getElementsByClassName("close")[0];
const remplaylist = document.getElementById("playlist-grid");
const songList = document.getElementById("songs-container")


function makeCards() {
    const playlistContainer = document.getElementById("playlist-grid");

    data.playlists.forEach(d => {
        const card = document.createElement("div");
        card.addEventListener("click", function () {
            openModal(d);
        })
        card.className = "playlist-blocks";



        const image = document.createElement("img");
        image.src = d["playlist_art"]
        card.appendChild(image);

        const name = document.createElement("h1");
        name.innerHTML = d["playlist_name"]
        card.appendChild(name);

        const creatorname = document.createElement("div");
        creatorname.innerHTML = d["playlist_creator"]
        //console.log(creatorname.innerHTML)
        card.appendChild(creatorname);


        var likeicon = document.createElement("span")
        likeicon.innerHTML =
            `<i class="fa-regular fa-heart" id="${d.playlistID}likeicon"></i>`
        //<i class="fa-regular fa-heart"></i>
        // <span class = "close"> &times;</span>
        card.appendChild(likeicon)


        const numoflikes = document.createElement("div");
        numoflikes.innerHTML = d["likeCount"]
        card.appendChild(numoflikes);

        document.getElementById("playlist-grid").appendChild(card);


        let count = 0
        // increase the count
        likeicon.addEventListener("click", (event) => {
            event.stopPropagation();
            count++
            numoflikes.innerText = count

            if (count > 0) {
                likeicon.innerHTML = `<i class="fa-solid fa-heart" id="${d.playlistID}likeicon"></i>`
            }
        })


    })
}

makeCards()

//open modal on the main page
function openModal(playlist) {
    document.getElementById('PlaylistName').innerText = playlist["playlist_name"];
    document.getElementById('Playlistimage').src = playlist["playlist_art"];
    document.getElementById('modalPlaylistCreator').innerText = playlist["playlist_creator"];

    let likeicon = document.getElementById(`${playlist.playlistID}likeicon`);
    if (likeicon.matches(":hover")) return;

    modal.style.display = "block";
    modalcontent(playlist);

    let shufflebutton = document.getElementsByClassName("shuffle-button")[0];
    shufflebutton.addEventListener('click', () => shuffleplaylist(playlist))
}

span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//open the modal when a playlist is clicked 
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

// function deleteplaylistcards(){

// })

// shuffle  each playlist function
let shufflebutton = document.getElementsByClassName("shuffle-button");
function shuffleplaylist(playlist) {
    console.log(playlist);
    for (let j = playlist.songs.length - 1; j > 0; j--) {
        let y = Math.floor(Math.random() * (j + 1))
        let tmp = playlist.songs[j];
        playlist.songs[j] = playlist.songs[y];
        playlist.songs[y] = tmp;

    }
    modalcontent(playlist)

}



// display  playlist on new page 
// function displayPlaylist(playlist){
//     let index = randomPLaylist();
//     let playlistArray = playlists[index];
//     document.getElementById("playlistImage").src = playlists[index].playlist_art;
//     document.getElementById("playlistTitle").innerText = playlists[index].playlists_name;
//     document.getElementById("creatorName").innerText = playlists[index].playlist_creator;
//     makeCards(playlistArray);

//     let shuffleButton = document.getElementById("shuffle");
//     shuffleButton.addEventListener("click", function(event){
//         shuffleplaylist(playlist);
//     });

//  }

// //  create a random playlist for the fe
// function randomPLaylist(){ 
//      let randomNum = Math.floor(Math.random()*(playlistData.playlists.length+1));
//      return randomNum

// }
// displayPlaylist(playlist)


// function deletePlaylist(){

// }


// function addPlaylist(){

// }
