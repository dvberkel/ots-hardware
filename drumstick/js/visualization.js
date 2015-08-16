;(function($){
  var Visualizer = $.Visualizer = function(canvas){
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.context.translate(canvas.width/2, canvas.height/2);
    this.update();
  };
  Visualizer.prototype.update = function(event){
    acceleration = (event || {}).acceleration || {
      'x': 0,
      'y': 0,
      'z': 0
    }
    var ctx = this.context;
    var width = this.canvas.width;
    var height = this.canvas.height;
    ctx.fillStyle = 'white';
    ctx.fillRect(-width/2, -height/2, width, height);
    
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(acceleration.x, acceleration.y, 5, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fill();
    
  }
  
  
})(window.drumstick = window.drumstick || {});