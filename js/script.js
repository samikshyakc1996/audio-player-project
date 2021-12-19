import { $, $$ } from "./utils.js";
import { playlist } from "./data.js";

// DOCUMENT ELEMENTS
const playOrPause = $(`#playOrPause`);
const playprev = $(`#playprev`);
const playnext = $(`#playnext`);
const playlistEle = $(`#playlists`);
const trackDuration = $(`#trackDuration`);
const trackTime = $(`#trackTime`);
const trackProgress = $(`#trackProgress`);
const trackVolume = $(`#trackVolume`);

//VARIABLES
let playlistIndex = 0;
const song = new Audio();

//FUNCTIONS
const loadSongFromPlaylistByIndex = function (index = 0, start = false) {
  playlistIndex = index;

  const keepPlaying = !song.paused;
  //SETUP THE FIRST SONG TO PLAY
  song.src = playlist[playlistIndex];
  if (keepPlaying || start) {
    song.play().then(() => {
      //console.log("yeha kina aayena??");
    });
  }
};
const setVolumeTo = function (vol) {
  song.volume = vol;
};

//LOAD UP THE PLAYLIST
playlist.forEach(function (item, index) {
  playlistEle.innerHTML += `<li data-index="${index}">${item.slice(
    item.indexOf("audio/") + 6
  )}</li>`;
  // SHORTENED THE NAME OF TRACK
});

const playNextSong = function () {
  playOrPause.textContent = `⏸`;
  const nextIndex =
    playlistIndex + 1 > playlist.length - 1 ? 0 : playlistIndex + 1;

  loadSongFromPlaylistByIndex(nextIndex, true);
};
//WHEN THE APP GETS LOAD
window.addEventListener(`load`, function () {
  // IF PLAY/PAUSE IS CLICKED
  playOrPause.addEventListener(`click`, function (event) {
    if (!song.paused) {
      song.pause();
      playOrPause.textContent = `▶️`;
    } else if (song.paused) {
      song.play();

      playOrPause.textContent = `⏸`;
    }
  });

  // WHEN PREVIOUS SONG BUTTON IS CLICKED
  playprev.addEventListener(`click`, function (event) {
    playOrPause.textContent = `⏸`;

    playlistIndex =
      playlistIndex - 1 < 0 ? playlist.length - 1 : playlistIndex - 1;
    loadSongFromPlaylistByIndex(playlistIndex, true);
  });
  // WHEN NEXT SONG BUTTON IS CLICKED
  playnext.addEventListener(`click`, playNextSong);

  //ADD A LISTENER TO ENTIRE PLAYLIST
  playlistEle.addEventListener(`click`, function (event) {
    const songToPlay = event.target;
    if (event.target.matches(`li`)) {
      playlistIndex = Number(songToPlay.dataset.index);
      loadSongFromPlaylistByIndex(playlistIndex, true);

      playOrPause.textContent = `⏸`;
    }
  });
});
trackVolume.addEventListener(`input`, function (event) {
  setVolumeTo(trackVolume.value);
});
