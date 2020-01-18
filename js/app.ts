import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay"
import AutoPause from "./plugins/AutoPause"

const video = document.querySelector("video"),
      playButton: HTMLElement = document.querySelector("#play-button"),
      unmuteButton: HTMLElement = document.querySelector("#unmute-button");

const player = new MediaPlayer({ 
  el: video, 
  plugins: [new AutoPlay(), new AutoPause()]
});

playButton.onclick = () => player.togglePlay();
unmuteButton.onclick = () => player.toggleMute();
