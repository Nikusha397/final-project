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



  document.querySelectorAll(".box .btn button").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var message = this.nextElementSibling;
      if (message) {
        message.textContent = "Your request is sent";
        setTimeout(function () {
          message.textContent = "";
        }, 3000);
      }
    });
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


  let video2 = document.getElementById("myVideo2");
  let playBtn2 = document.querySelector(".play2");
  
  playBtn2.addEventListener("click", () => {
    video2.play();
    playBtn2.style.display = "none";
  });

  video2.addEventListener("click", () => {
    video2.pause();
    playBtn2.style.display = "flex";
  });

  video2.addEventListener("ended", () => {
    playBtn2.style.display = "flex";
  });

  let playBtnn = document.querySelector(".player");

playBtnn.addEventListener("click", () => {
  let video = document.createElement("video");
  video.src = "video/loundry.mp4";
  video.controls = true;
  video.autoplay = true;
  video.className = "buts-inline-video";
  playBtnn.insertAdjacentElement("afterend", video);
  playBtnn.style.display = "none";
  video.addEventListener("ended", () => {
    video.remove();
    playBtnn.style.display = "flex";
  });
});



document.addEventListener("DOMContentLoaded", () => {
  let spots = document.querySelectorAll(".spot");
  let popup = document.getElementById("spotPopup");
  let popupTitle = document.getElementById("popupTitle");
  let popupText = document.getElementById("popupText");
  let timeoutId;

  spots.forEach(spot => {
    spot.addEventListener("click", (e) => {
      e.stopPropagation();
      popupTitle.textContent = spot.dataset.title;
      popupText.textContent = spot.dataset.text;
      popup.style.display = "block";

      let container = spot.parentElement;
      let popupWidth = popup.offsetWidth;
      let popupHeight = popup.offsetHeight;
      let popupTop = spot.offsetTop + spot.offsetHeight / 2 - popupHeight / 2;
      let popupLeft = spot.offsetLeft - popupWidth - 8;
      if (popupLeft < 0) {
        popupLeft = spot.offsetLeft + spot.offsetWidth + 8;
      }
      if (popupLeft + popupWidth > container.offsetWidth) {
        popupLeft = container.offsetWidth - popupWidth - 8;
      }
      popup.style.top = popupTop + "px";
      popup.style.left = popupLeft + "px";
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        popup.style.display = "none";
      }, 1000);
    });
  });
  document.addEventListener("click", () => {
    popup.style.display = "none";
    if (timeoutId) clearTimeout(timeoutId);
  });
});

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});


let container = document.getElementById("testimonialContainer");
let squares = document.querySelectorAll(".square");

function slideTo(page) {
  let card = container.querySelector(".card");
  let gap = parseInt(getComputedStyle(container).gap) || 0;
  let cardWidth = card.offsetWidth + gap;
  let offset = (page - 1) * 2 * cardWidth;
  container.style.transform = `translateX(-${offset}px)`;
  squares.forEach(sq => sq.classList.remove("active"));
  squares[page - 1].classList.add("active");
}

squares.forEach(sq => {
  sq.addEventListener("click", () => {
    slideTo(Number(sq.dataset.page));
  });
});

slideTo(1);

let footerForm = document.querySelector(".footer-subscribe");
if (footerForm) {
  footerForm.addEventListener("submit", function (e) {
    e.preventDefault();
  });
}
