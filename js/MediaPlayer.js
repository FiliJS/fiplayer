export class MediaPlayer {
  constructor(settings) {
    this.video = settings.currentVideo;
    this.plugins = settings.plugins || [];
    this._initPlugins();
  }

  _initPlugins() {
    let player = {
      play: this.play,
      pause: this.pause
    };

    this.plugins.forEach(plugin => {
      plugin.run(player);
    })
  }

  play() {
    console.log("Play");
  }

  pause() {
    console.log("Pause");
  }
}