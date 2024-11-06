const buttons = {
    'homepage': '../index.html',
    'materias': '../Materias/materias.html',
    'PPE': '../PPE/ppe.html',
    'tecnico': './tec.html',
    'button1': './tareas/modelagem.html',
    'button2': './tareas/banco.html',
    'button3': './tareas/desenvolvimento.html',
    'button4': './tareas/implantacao.html',
    'button5': './tareas/aplicativos.html'
  };
  
  document.querySelectorAll('.nav-button').forEach((button) => {
    button.addEventListener('click', () => {
      const url = buttons[button.id];
      if (url) {
        goToPage(url);
      }
    });
  });

  document.querySelectorAll('.new-button').forEach((button) => {
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