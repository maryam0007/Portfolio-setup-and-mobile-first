document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu-');
  const button = document.getElementById('mob-barss');
  const closebtn = document.getElementById('closed');
  const menuitems = document.getElementById('mlist');

  button.onclick = function showMenu() {
    menu.style.display = 'block';
  };

  closebtn.onclick = function hideMenu() {
    menu.style.display = 'none';
  };

  menuitems.onclick = function hideMenu() {
    menu.style.display = 'none';
  };
});
