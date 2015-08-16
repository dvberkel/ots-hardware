;(function($){
  $.onceInAWhile = function(callback){
    return function(delay){
      var lastTimestamp = (new Date()).getTime();
      return function(){
        var timestamp = (new Date()).getTime();
        if ((timestamp - lastTimestamp) > delay) {
          lastTimestamp = timestamp;
          callback.call(undefined);
        }
      }
    };

  }

})(window.drumstick = window.drumstick || {});