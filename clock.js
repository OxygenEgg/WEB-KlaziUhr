window.requestAnimFrame = (function() {
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
  }
)();

(function clock() {
    (function loop(){
        requestAnimFrame(loop);
        draw();
    })();

    function draw(){
        var now = new Date(),
            then = new Date(now.getFullYear(),now.getMonth(),now.getDate(), 0, 0, 0),
            diffInMil = (now.getTime() - then.getTime()),
            h = (diffInMil/(1000 * 60 * 60)),
            m = (h * 60),
            s = (m * 60);
        document.getElementById("hourHand").style.rotate = (h * 30 + (h / 2)) + "deg";
        document.getElementById("minuteHand").style.rotate = (m * 6) + "deg";
        document.getElementById("secondHand").style.rotate = (s * 6) + "deg";
    }
}
)();
