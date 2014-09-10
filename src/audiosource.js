var ngui            = require('nw.gui'),
    nwin            = ngui.Window.get();


var video         = document.querySelector('video'),
    mediaStream   = null,
    mouseX        = 0,
    mouseY        = 0;

  // This is used to take a screenshot of the users desktop
  navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.getUserMedia;
  navigator.getUserMedia({
         audio: true,
         video: {
             mandatory: {
                 chromeMediaSource: 'screen',
                 maxWidth: 400,
                 maxHeight: 400
             },
             optional: []
         }
      }, function(stream) {
         video.src = window.URL.createObjectURL(stream);
         mediaStream = stream;
      }, function(){
          // error
      }
  );


video.addEventListener("play", function() {}, false);