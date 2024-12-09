document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('.navbar-nav li a');

  // Función para actualizar el estado activo
  function setActiveLink(link) {
    menuLinks.forEach(item => item.classList.remove('active')); // Elimina la clase 'active' de todos los enlaces
    link.classList.add('active'); // Añade la clase 'active' al enlace clickeado
  }

  // Detectar si hay un enlace guardado en localStorage
  const savedActiveLink = localStorage.getItem('activeLink');
  if (savedActiveLink) {
    const activeLinkElement = document.querySelector(`.navbar-nav li a[href="${savedActiveLink}"]`);
    if (activeLinkElement) {
      setActiveLink(activeLinkElement); // Establece el enlace guardado como activo
    }
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Guarda el href del enlace clickeado en localStorage
      localStorage.setItem('activeLink', this.getAttribute('href'));

      setActiveLink(this); // Actualiza el estado activo
    });
  });
});