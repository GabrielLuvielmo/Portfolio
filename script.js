const buttons = {
    'homepage': 'index.html',
    'materias': './Materias/materias.html',
    'PPE': './PPE/ppe.html',
    'tecnico': './Técnico/tec.html'
  };
  
  document.querySelectorAll('.nav-button').forEach((button) => {
    button.addEventListener('click', () => {
      const url = buttons[button.id];
      if (url) {
        goToPage(url);
      }
    });
  });
  
  function goToPage(url) {
    window.location.href = url;
  }
  