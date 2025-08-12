export function music_Player(){
// Elementos del DOM
const audio = document.getElementById('audio');
const playBtn = document.getElementsByClassName('musicplayer__controls--play')[0];
const prevBtn = document.getElementsByClassName('musicplayer__controls--prev')[0];
const nextBtn = document.getElementsByClassName('musicplayer__controls--next')[0];
const progress = document.getElementsByClassName('musicplayer__pbar--progress')[0];
const currentTimeEl = document.getElementsByClassName('musicplayer__pbar--time')[0];
const durationEl = document.getElementsByClassName('musicplayer__pbar--duration')[0];
const volumeControl = document.getElementsByClassName('musicplayer__volume--range')[0];


// Lista de canciones (puedes agregar más)
const songs = [
    { title: "Canción 1", src: '/global/Music/Sneakman.mp3' },
    { title: "Canción 2", src: "/global/Music/Let Mom Sleep.mp3" },
    { title: "Canción 3", src: "/global/Music/Reps - 'Bout the City.mp3" },
    { title: "Canción 4", src: "/global/Music/Guitar Vader - Super Brothers.mp3" }

];

let currentSongIndex = 0;

// Cargar canción
function loadSong(songIndex) {
    const song = songs[songIndex];
    audio.src = song.src;
}

// Reproducir o pausar
function togglePlay() {
    if (audio.paused) {
        audio.play();
        //playBtn.textContent = '⏸';
    } else {
        audio.pause();
        //playBtn.textContent = '▶';
    }
}

// Actualizar barra de progreso
function updateProgress() {
    const { currentTime, duration } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progress.value = progressPercent;
    
    // Formatear tiempo
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60).toString().padStart(2, '0');
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    
    if (!isNaN(duration)) {
        const durationMinutes = Math.floor(duration / 60);
        const durationSeconds = Math.floor(duration % 60).toString().padStart(2, '0');
        durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
}

// Saltar a una parte de la canción
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

// Cambiar volumen
function setVolume() {
    audio.volume = volumeControl.value;
}

// Cambiar canción
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    if (!audio.paused) audio.play();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    if (!audio.paused) audio.play();
}

// Event Listeners
playBtn.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
audio.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', setProgress);
volumeControl.addEventListener('input', setVolume);
audio.addEventListener('ended', nextSong); // Siguiente canción al terminar

// Cargar primera canción
loadSong(currentSongIndex);

}