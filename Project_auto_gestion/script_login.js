function toggleView() {
    const loginView = document.getElementById('login-view');
    const registerView = document.getElementById('register-view');

    if (loginView.style.display === 'none') {
        loginView.style.display = 'block';
        registerView.style.display = 'none';
    } else {
        loginView.style.display = 'none';
        registerView.style.display = 'block';
    }
}

// Redirigir al enviar el formulario de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto
    window.location.href = 'page_1.html'; // Redirige a la página deseada
});