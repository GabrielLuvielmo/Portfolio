const buttons = {
    'homepage': '../index.html',
    'materias': './materias.html',
    'PPE': '../PPE/ppe.html',
    'tecnico': '../Técnico/tec.html',
    'button1': './Mat/mat.html',
    'button2': './Lin/lin.html',
    'button3': './CHU/chu.html',
    'button4': './CNA/cna.html'
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