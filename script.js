let progress = 0;

function increaseProgress() {
    if (progress < 100) {
        progress += 10;
        document.getElementById('progress-bar').style.width = progress + '%';
    }
}

//typewriter effect on about me section of index page 
var i = 0;
var textAM = document.getElementById('about-me-del').innerHTML;
var speed = 65;

window.onload = function twAboutMe() {
    document.getElementById('about-me-del').innerHTML = "";
  if (i < textAM.length) {
    document.getElementById('am-set').innerHTML += textAM.charAt(i);
    i++;
    setTimeout(twAboutMe, speed);
  }
}

window.onscroll = function fadeIn() {
  var appear = 20
  if (window.pageYOffset >= appear) {
    // If more show the element
    document.querySelectorAll(".normal" + ".child").style.opacity = '1'
    document.querySelectorAll(".normal" + ".child").style.pointerEvents = 'all'
  } else {
    // Else hide it
    document.querySelectorAll(".normal" + ".child").style.opacity = '0'
    document.querySelectorAll(".normal" + ".child").style.pointerEvents = 'none'
  }
}


