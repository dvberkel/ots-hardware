// DOMContentLoaded is fired once the document has been loaded and parsed,
// but without waiting for other external resources to load (css/images/etc)
// That makes the app more responsive and perceived as faster.
// https://developer.mozilla.org/Web/Reference/Events/DOMContentLoaded
window.addEventListener('DOMContentLoaded', function() {

  // We'll ask the browser to use strict code to help us catch errors earlier.
  // https://developer.mozilla.org/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
  'use strict';

  var translate = navigator.mozL10n.get;

  // We want to wait until the localisations library has loaded all the strings.
  // So we'll tell it to let us know once it's ready.
  navigator.mozL10n.once(start);

  // ---

  function start() {

    var message = document.getElementById('message');

    // We're using textContent because inserting content from external sources into your page using innerHTML can be dangerous.
    // https://developer.mozilla.org/Web/API/Element.innerHTML#Security_considerations
    message.textContent = translate('message');

    var visuals = document.getElementById('visuals');
    var canvas = visuals.querySelector('#accelerometer-visual');
    canvas.width = canvas.height;
    var visualizer = new drumstick.Visualizer(canvas);
    window.addEventListener('devicemotion', visualizer.update.bind(visualizer));

    var delay = 200;
    var threshold = 12.0;
    var colorBackground = drumstick.onceInAWhile(function(){
      document.body.classList.add('hit');
      setTimeout(function(){
        document.body.classList.remove('hit');
      }, 200);
    });
    window.addEventListener('devicemotion', drumstick.whenHitDo(colorBackground(delay), { max: threshold }));

    var player = document.getElementById('player');
    player.mozAudioChannel = 'normal';

    var playSound = drumstick.onceInAWhile(function(){
      player.play(); 
    });
    window.addEventListener('devicemotion', drumstick.whenHitDo(playSound(delay), { max: threshold }));

  }

});
