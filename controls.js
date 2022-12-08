var isInFullscreen = false;

function checkState() {
    if ((!window.fullScreen) || (window.innerwidth == screen.width &&
                                    window.innerHeight == screen.height)) {
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
    if (!document.getElementById("controls").disabled) {
        document.getElementById("controls").classList.add("fadeOut");
        setTimeout(function() {
            document.getElementById("controls").classList.remove("fadeOut");
            document.getElementById("controls").disabled = true;
            document.getElementById("controls").style.opacity = 0;
            $("#controls").children().prop('disabled',true);
        },1000);
    }
    else if (document.getElementById("controls").disabled) {
        document.getElementById("controls").classList.add("fadeIn");
        $("#controls").children().prop('disabled',false);
        setTimeout(function() {
            document.getElementById("controls").classList.remove("fadeIn");
            document.getElementById("controls").disabled = false;
            document.getElementById("controls").style.opacity = 1;
        },1000);
    }
}

function invertColor() {
    if (document.getElementById("mainPortion").style.filter=="invert(100%)") {
        document.getElementById("mainPortion").style.filter="invert(0%)"
    }
    else {
        document.getElementById("mainPortion").style.filter="invert(100%)"
    }
}
