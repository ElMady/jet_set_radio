export function setupMenu() {
  const menuButton = document.getElementById('menu-button');
  const submenu = document.getElementById('submenu');

  // Mostrar/ocultar submenú al hacer clic en el botón
  menuButton.addEventListener('click', () => {
    submenu.classList.toggle('show');
  });

  // Ocultar el submenú al hacer clic fuera de él
  document.addEventListener('click', function(event) {
    if (!menuButton.contains(event.target) && !submenu.contains(event.target)) {
      submenu.classList.remove('show');
    }
  });
};