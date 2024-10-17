document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
  
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Aquí deberías hacer una llamada a tu API para autenticar al usuario
      // Por ahora, usaremos una autenticación simulada
      if (username === 'admin' && password === 'admin') {
        // Autenticación exitosa
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'dashboard.html';
      } else {
        // Autenticación fallida
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
      }
    });
  });