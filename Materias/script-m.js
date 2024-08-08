const buttons = {
    'homepage': '../index.html',
    'materias': './materias.html',
    'PPE': '../PPE/ppe.html',
    'tecnico': '../Técnico/tec.html',
    'button1': './areas/mat.html',
    'button2': './areas/lin.html',
    'button3': './areas/chu.html',
    'button4': './areas/cna.html'
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