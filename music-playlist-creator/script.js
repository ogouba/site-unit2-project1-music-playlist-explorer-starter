var modal = document.getElementById("playlistmodal");
var span = document.getElementsByClassName("close")[0];
const remplaylist = document.getElementById("playlist-grid");
const songList = document.getElementById("songs-container");
const homebutton = document.getElementById("home-button");


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
        card.appendChild(likeicon)



        const numoflikes = document.createElement("div");
        numoflikes.innerHTML = d["likeCount"]
        card.appendChild(numoflikes);

        var deletebutton = document.createElement("span")
        deletebutton.innerHTML = `<i class="fa-solid fa-trash" ></i>`

        card.appendChild(deletebutton);
        document.getElementById("playlist-grid").appendChild(card);


        // add an event listener to check if and when someone clicks on the like icon
        let count = 0
        likeicon.addEventListener("click", () => {
            event.stopPropagation();
            count++
            numoflikes.innerText = count

            if (count > 0) {
                likeicon.innerHTML = `<i class="fa-solid fa-heart" id="${d.playlistID}likeicon"></i>`
            }
        })
        //let deletebutton = document.getElementById(`delete-${playlist.playlistID}`);
        deletebutton.addEventListener('click', (event)=>{
            event.stopPropagation();
            playlistContainer.removeChild(card);

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

// search bar  button functionality 
// const searchbar = document.getElementById("search-bar");
// searchbar.addEventListener("keyup", (event)=>{
//     const searchtext = event.target.value.toLowerCase();
//     const musicalblockforsearch = document.querySelectorAll('.playlist-block)');{
//         musicalblockforsearch.forEach(musicBlock =>{
//             const playlistname = musicblock.querySelector('.music-text').textContent.tolowercase();
//             const playlist_creator = musicalBlock.querySelector('.music-creator').textContent.toLowerCase();
//             if (playlistname.includes(searchText) || playlist_creator.includes(searchText)){
//                 musicBlock.style.diaplay = "block";
//             }
//             else{
//                 musicBlock.style.display = 'name';                
//             }       
//         }) 
//     }
// })

