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

// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}
                                


