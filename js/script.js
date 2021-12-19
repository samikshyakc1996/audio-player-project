const playOrPause = document.querySelector(`#playOrPause`);
const playprev = document.querySelector(`#playprev`);
const playnext = document.querySelector(`#playnext`);
const playlistEle = document.querySelector(`#playlists`);

const playlist = [
  `./audio/10 Adele - Lovesong.mp3`,
  `./audio/10.Pennyroyal Tea.mp3`,

  `https://cdn.pixabay.com/audio/2021/11/01/audio_00fa5593f3.mp3`,
  `https://cdn.pixabay.com/audio/2021/11/24/audio_82498b22da.mp3`,
  `https://cdn.pixabay.com/audio/2021/11/25/audio_91b32e02f9.mp3`,
  `./audio/All You Need Is Love - Remastered 2009.mp3`,
  `./audio/Ed Sheeran-Perfect.mp3`,
  `./audio/Ice Cream (with Selena Gomez).mp3`,
  `./audio/Ticket To Ride - Remastered 2009.mp3`,
  `./audio/With A Little Help From My Friends - Remastered 2009.mp3`,
];

let playlistIndex = 0;
const song = new Audio();
//FUNCTIONS
const loadSongFromPlaylistByIndex = function (index = 0, start = false) {
  playlistIndex = index;

  const keepPlaying = !song.paused;
  //SETUP THE FIRST SONG TO PLAY
  song.src = playlist[playlistIndex];
};
playlist.forEach(function (item, index) {
  playlistEle.innerHTML += `<li data-index="${index}">${item.slice(
    item.indexOf("audio/") + 6
  )}</li>`;
  // SHORTENED THE NAME OF TRACK
});

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
  playnext.addEventListener(`click`, function (event) {
    playOrPause.textContent = `⏸`;

    const nextIndex =
      playlistIndex + 1 > playlist.length - 1 ? 0 : playlistIndex + 1;

    loadSongFromPlaylistByIndex(nextIndex, true);
  });

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
