document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password match
    if (username === 'ttlaAdmin' && password === 'ttla666') {
        // Redirect to welcome page
        localStorage.setItem("user", username)

        /*       window.location.href = 'venderView.html'; */
        document.getElementById("login-container").style.display = 'none';
        document.getElementById("contenedorPrincipal").style.display = 'flex';
        document.getElementById("sidebar").style.display = 'block';
        console.log(localStorage.getItem('user'))
        // cargarVistaPrimaria()
    } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
});
