/*

document.addEventListener('DOMContentLoaded', function() {
    
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

*/

function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorDiv = document.getElementById('error');
    
    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
      errorDiv.style.display = 'block';
      return false; // Evita que el formulario se envíe
    }
    
    return true; // Permite que el formulario se envíe
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const errorDiv = document.getElementById('error');
    
    // Esconder mensajes cuando el usuario comienza a escribir de nuevo
    password.addEventListener('input', function() {
      errorDiv.style.display = 'none';
    });
    
    confirmPassword.addEventListener('input', function() {
      errorDiv.style.display = 'none';
    });
    
    // Abrir el modal automáticamente al cargar la página
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
  });