;(function($){
  function extend(){
    var result = {};
    Array.prototype.slice.call(arguments).forEach(function(data){
      for (var key in data){
        if (data.hasOwnProperty(key) && !(key in result)) {
          result[key] = data[key];
        }
      }
    });
    return result;
  }
  
  function square(value){
    return value * value;
  }
  
  function norm(acceleration){
    return Math.sqrt(square(acceleration.x) + square(acceleration.y) + square(acceleration.z));
  }
  
  $.whenHitDo = function(callback, options) {
    options = extend(options || {}, { 'max': 12.0 });
    console.log(options);
    return function(event){
      var acceleration = event.accelerationIncludingGravity;
      if (norm(acceleration) >= options.max) {
        callback.call(undefined, event);
      }
    }
  }
})(window.drumstick = window.drumstick || {});