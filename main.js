import videojs from 'video.js'
import * as axios from 'axios'


var options = {};


videojs('my-player', options, function onPlayerReady() {


  axios.get('https://zapp-pipes2-demo.web.app/jw/playlists/q87jSmY5').then(({ data }) => {
    const src = data.entry[1].content.src

    this.src({
      src: data.entry[1].content.src,
      type: 'application/x-mpegURL'
    });

  })


});