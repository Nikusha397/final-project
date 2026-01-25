let button = document.querySelector('#menuButton');
let quoteText = document.querySelector('.quote-text');
let menuIcon = document.querySelector('.menu-icon');
let nav = document.querySelector('.about .nav'); 
let menu = document.getElementById('menu');

function updateLayout() {
  if (window.innerWidth < 1024) {
    quoteText.style.display = 'none';
    menuIcon.style.display = 'flex';
    nav.style.display = 'none';
    menu.style.display = 'none';
  } else {
    quoteText.style.display = 'inline';
    menuIcon.style.display = 'none';
    nav.style.display = 'flex';
    menu.style.display = 'none';
  }
}

window.addEventListener('load', updateLayout);
window.addEventListener('resize', updateLayout);


button.addEventListener('click', function (e) {
  e.stopPropagation();

  if (menuIcon.style.display === 'flex') {

    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';

      let rect = button.getBoundingClientRect();
      let scrollTop = window.scrollY;
      let scrollLeft = window.scrollX;

      menu.style.position = 'absolute';
      menu.style.top = rect.bottom + scrollTop + "px";
      menu.style.left = rect.left + scrollLeft + "px";
      menu.style.width = rect.width + "px";
    }
  }
});


document.addEventListener('click', function (e) {
  if (!menu.contains(e.target)) {
    menu.style.display = 'none';
  }
});



  let btn = document.getElementById("sendBtn");
  let message = document.getElementById("message");

  btn.addEventListener("click", function(e) {
    e.preventDefault();
    message.textContent = "Your request is sent";
    setTimeout(() => {
      message.textContent = "";
    }, 3000);
  });



  let video = document.getElementById("myVideo");
  let playBtn = document.querySelector(".play");
  
  playBtn.addEventListener("click", () => {
    video.play();
    playBtn.style.display = "none";
  });

  video.addEventListener("click", () => {
    video.pause();
    playBtn.style.display = "flex";
  });

  video.addEventListener("ended", () => {
    playBtn.style.display = "flex";
  });





