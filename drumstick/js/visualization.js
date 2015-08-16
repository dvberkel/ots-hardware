;(function($){
  var Visualizer = $.Visualizer = function(canvas){
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.update();
  };
  Visualizer.prototype.update = function(){
    var ctx = this.context;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  
  
})(window.drumstick = window.drumstick || {});