const button = document.querySelector('#menuButton');
const quoteText = document.querySelector('.quote-text');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.about .nav'); 
const menu = document.getElementById('menu');

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

      const rect = button.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const scrollLeft = window.scrollX;

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
