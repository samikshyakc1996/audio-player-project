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

playlist.forEach(function (item, index) {
  playlistEle.innerHTML += `<li data-index="${index}">${item.slice(
    item.indexOf("audio/") + 6
  )}</li>`;
  // SHORTENED THE NAME OF TRACK
});
