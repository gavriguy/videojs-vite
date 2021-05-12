import './style.css'
import videojs from 'video.js'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

var options = {};

var player = videojs('my-player', options, function onPlayerReady() {
  videojs.log('Your player is ready!');

  // In this context, `this` is the player that was created by Video.js.
  // this.play();

  // How about an event listener?
  this.on('ended', function () {
    videojs.log('Awww...over so soon?!');
  });
});