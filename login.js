document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulamos obtener los datos de los usuarios (en una app real sería de un archivo o base de datos)
    const users = [
        { "username": "admin", "password": "12345","role": "admin", "profile": "admin.html" },
        { "username": "cliente", "password": "123456","role": "cliente", "profile": "cliente.html" },
        { "username": "invitado", "password": "1234567","role": "invitado", "profile": "invitado.html" }
    ];

    // Verificamos si las credenciales coinciden
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        //alert('Bienvenido, ' + username + '!');
         window.location.href = user.profile;
    } else {
        document.getElementById('error-message').textContent = 'Contraseña incorrectas. Verifique sus datos.';
    }
});
