setInterval(
    function() {
	    var now = new Date().getTime();
	    var hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	    var minutes = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
	    var seconds = Math.floor((now % (1000 * 60)) / 1000);
        console.log(hours, minutes, seconds);

        var hourHandRotation = hours * 6;
        var minuteHandRotation = minutes * 6;
        var secondHandRotation = seconds * 6;
        document.getElementById("hourHand").style.rotate=hourHandRotation + "deg"
        document.getElementById("minuteHand").style.rotate=minuteHandRotation + "deg"
        document.getElementById("secondHand").style.rotate=secondHandRotation + "deg"
    },
1000);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}









// Yay for SO - http://stackoverflow.com/questions/23847310/css-and-jquery-analog-clock-smooth-animation
//use requestAnimationFrame for smoothness (shimmed with setTimeout fallback)
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
  })();
  
  //initialize the clock in a self-invoking function
  (function clock(){ 
      var hour = document.getElementById("hour"),
          min = document.getElementById("min"),
          sec = document.getElementById("sec");
      //set up a loop
      (function loop(){
          requestAnimFrame(loop);
          draw();
      })();
      //position the hands
      function draw(){
          var now = new Date(),//now
              then = new Date(now.getFullYear(),now.getMonth(),now.getDate(),0,0,0),//midnight
              diffInMil = (now.getTime() - then.getTime()),// difference in milliseconds
              h = (diffInMil/(1000*60*60)),//hours
              m = (h*60),//minutes
              s = (m*60);//seconds
          //rotate the hands accordingly
          sec.style.webkitTransform = "rotate(" + (s * 6) + "deg)";
          hour.style.webkitTransform = "rotate(" + (h * 30 + (h / 2)) + "deg)";
          min.style.webkitTransform = "rotate(" + (m * 6) + "deg)";
      } 
  })();
  https://csshint.com/html-clock/





  
  setInterval(
    function() {
	    var time = new Date();
	    var hours = time.getHours();
	    var minutes = time.getMinutes();
	    var seconds = time.getSeconds();
        console.log(hours, minutes, seconds);  //TODO: delete

        var hourHandRotation = 360 * (hours / 24);
        var minuteHandRotation = 360 * (minutes / 60);
        var secondHandRotation = 360 * (seconds / 60);

        document.getElementById("hourHand").style.rotate=hourHandRotation + "deg"
        document.getElementById("minuteHand").style.rotate=minuteHandRotation + "deg"
        document.getElementById("secondHand").style.rotate=secondHandRotation + "deg"
    },
1000);






var website = document.documentElement;
var isInFullscreen = false;
var div = document.querySelector(".controls");
var button = document.querySelector(".fadeButton")

function checkState() {
    if ((!window.fullScreen) || (window.innerwidth == screen.width && window.innerHeight == screen.height)) {
        isInFullscreen = false;
    }
    else {
        isInFullscreen = true;
    }
}

function toggleFullscreen() {
    checkState();
    if (isInFullscreen) {
        document.exitFullscreen();
    }
    else {
        document.documentElement.requestFullscreen();
    }
}

function toggleControls() {
    if (document.getElementById("controls").style.display=="unset") {
        document.getElementById("controls").style.display="none";
    }
    else {
        document.getElementById("controls").style.display="unset";
    }
}
