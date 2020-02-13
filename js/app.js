import { MediaPlayer } from "./MediaPlayer.js";
import { AutoPlay } from "./plugins/AutoPlay.js";

const currentVideo = document.getElementById("current-video"),
      btnPrev = document.getElementById("btn-prev"),
      btnPlayPause = document.getElementById("btn-play-pause"),
      btnNext = document.getElementById("btn-next"),
      btnSuffe = document.getElementById("btn-suffle"),
      btnRepeat = document.getElementById("btn-repeat"),
      btnMuteUnmute = document.getElementById("btn-mute-unmute"),
      btnPip = document.getElementById("btn-pip"),
      btnFullScreen = document.getElementById("btn-fullscreen"),
      currentTimeText = document.getElementById("current-time-text"),
      remainingTimeText = document.getElementById("remaining-time-text");


const player = new MediaPlayer({
  currentVideo: currentVideo,
  plugins: [
    new AutoPlay(),
  ]
});