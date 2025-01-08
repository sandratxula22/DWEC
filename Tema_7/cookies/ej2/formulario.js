let emailInput = document.getElementById("email");
let errorEmail = document.getElementById("error_email");
let enviar = document.getElementById("enviar");

emailInput.addEventListener("invalid", function(){
    if(emailInput.validity.valueMissing){
        errorEmail.textContent = "El campo es obligatorio";
    }else if(emailInput.validity.typeMismatch){
        errorEmail.textContent = " Introduce un correo válido";
    }
    errorEmail.style.display = 'block';
});
