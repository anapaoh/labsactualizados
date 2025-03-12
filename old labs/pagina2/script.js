const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirmPassword");
const errorDiv = document.getElementById("error");
const submitButton = document.getElementById("submitButton");

document.addEventListener('DOMContentLoaded', function() {

  var exampleModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  exampleModal.show();

  passwordField.addEventListener('input', validatePasswords);
  confirmPasswordField.addEventListener('input', validatePasswords);

  var tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipElements.forEach(function (tooltipElement) {
    new bootstrap.Tooltip(tooltipElement);
  });

  function validatePasswords() {
    if (passwordField.value === confirmPasswordField.value && passwordField.value !== "") {
      errorDiv.style.visibility = "hidden";
      submitButton.disabled = false;
    } else {
      errorDiv.style.visibility = "visible";
      submitButton.disabled = true;
    }
  }

  function cambiarEstilo(inputId) {
    const input = document.getElementById(inputId);
    input.style.fontSize = '18px'; 
    input.style.color = 'blue';  
}


exampleModal._element.addEventListener('hidden.bs.modal', function () {
  var offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasDark'));
  offcanvas.show();
});


submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  exampleModal.hide();
});
});