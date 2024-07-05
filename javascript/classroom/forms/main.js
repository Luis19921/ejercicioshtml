let password = document.getElementById("Myform");
password.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    password.setCustomValidity("Este es un campo de contraseña!!!");
  } else {
    password.setCustomValidity("No es válido");
  }
});
if (password.reportValidity()){
    console.log("Todos los campos del formulario están validados correctamente.");
  } else {
    console.log("Hay campos del formulario con problemas de validación.");
  }

