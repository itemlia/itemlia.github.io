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


function fadeIn() {
  const elementFadeIn = document.querySelectorAll(".normal" + ".child");
  if (elementFadeIn) {
  window.addEventListener("scroll", function(fadeIn) {
    elementFadeIn.forEach(function(element) {
      if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
      } else {
        element.classList.remove("fade-in-up");
      }
    });
  });
} 
}

function fadeOut() {
  const elementFadeOut = document.querySelectorAll(".child" + ".normal");
  if (elementFadeOut) {
    window.addEventListener("scroll", function(fadeOut) {
      elementFadeOut.forEach(function(element) {
        if (window.scrollY >= (element.offsetTop + window.innerHeight)) {
          element.classList.add("fade-out");
        }
        else
        {
          element.classList.remove("fade-out");
        }
      });
    });
  }

}