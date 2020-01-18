import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js"
import AutoPause from "./plugins/AutoPause.js"

const video = document.querySelector("video"),
      playButton = document.querySelector("#play-button"),
      unmuteButton = document.querySelector("#unmute-button")

const player = new MediaPlayer({ 
  el: video, 
  plugins: [new AutoPlay(), new AutoPause()]
});

playButton.onclick = () => player.togglePlay();
unmuteButton.onclick = () => player.toggleMute();

if("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch( error => {
    console.log(error.message);
  })
}