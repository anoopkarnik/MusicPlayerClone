var arr = [
    {songName: 'Hello', url: "./songs/hello.mp3", img:"./images/adele.jpg"},
    {songName: 'Kabhi Kabhi Aditi', url: "./songs/kabhi.mp3", img:"./images/jaane.jpg"},
    {songName: 'Saari Duniya Jala Denge', url: "./songs/saari.mp3", img:"./images/animal.jpg"}
]

var selectedSong = 0;

var allSongs = document.querySelector("#all-songs");
var left = document.querySelector("#left");
var play = document.querySelector("#play");
var next = document.querySelector("#next");
var previous = document.querySelector("#previous");

var flag = 0;
var audio = new Audio();

function showSongList(){
    var clutter = "";
    arr.forEach(function(elem,index){
        clutter += `<div class="song-card" id="${index}">
        <div class="part1">
            <img src="${elem.img}" alt="Song Image">
            <h2>${elem.songName}</h2>
        </div>
        <h6>3:56</h6>
        </div>`
    })
    allSongs.innerHTML = clutter;
}

function selectSong(){
    document.querySelector("#all-songs").addEventListener("click", function(event){
        selectedSong = event.target.id
        document.querySelector("#left").innerHTML= `
        <img src="${arr[selectedSong].img}" alt="Song Image">
        `
        
    })
}


function playSong(){
    play.addEventListener("click", function(){
        if(flag == 0){
            audio.src = arr[selectedSong].url;
            audio.play();
            play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
            flag = 1;
        }
        else{
            audio.pause()
            play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
            flag = 0;
        }
    });
}

function nextSong(){
    next.addEventListener("click", function(){
        selectedSong = (selectedSong + 1) % arr.length
        audio.src = arr[selectedSong].url;
        if(flag == 1){
            audio.pause();
            audio.play();
        }
        left.innerHTML= `
        <img src="${arr[selectedSong].img}" alt="Song Image">`
    });
}

function prevSong(){
    previous.addEventListener("click", function(){
        selectedSong = (selectedSong - 1)
        if (selectedSong < 0){
            selectedSong = arr.length - 1;
        }
        audio.src = arr[selectedSong].url;
        if(flag == 1){
            audio.pause();
            audio.play();
        }
        left.innerHTML= `
        <img src="${arr[selectedSong].img}" alt="Song Image">`
    });
}

showSongList();
selectSong();
playSong();
nextSong();
prevSong();