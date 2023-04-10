document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu-');
  const button = document.getElementById('mob-barss');
  const closebtn = document.getElementById('closed');
  const menuitems = document.getElementById('mlist');

  button.onclick = function () {
    menu.style.display = 'block';
  };

  closebtn.onclick = function () {
    menu.style.display = 'none';
  };

  menuitems.onclick = function () {
    menu.style.display = 'none';
  };
}); 
