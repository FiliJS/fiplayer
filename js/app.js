import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./AutoPlay.js";

const video = document.querySelector("video"),
      playButton = document.querySelector("#play-button"),
      unmuteButton = document.querySelector("#unmute-button")

const player = new MediaPlayer({ 
  el: video, 
  plugins: [new AutoPlay()]
});

playButton.onclick = () => player.togglePlay();
unmuteButton.onclick = () => player.toggleMute();
