let form = document.getElementById("formulario");
let enviar = document.getElementById("enviar");

let nombreInput = document.getElementById("nombre");
let errorNombre = document.getElementById("error_nombre");
let emailInput = document.getElementById("email");
let errorEmail = document.getElementById("error_email");
let passwordInput = document.getElementById("password");
let password2Input = document.getElementById("password2");
let errorPassword = document.getElementById("error_password");
let errorPassword2 = document.getElementById("error_password2");
let selectFavorito = document.getElementById("favorito");
let errorFavorito = document.getElementById("error_favorito");

const maxIntentos = 3;

function getCookie(nomCookie){
    let cookies = document.cookie.split(";");

    for(let i=0; i<cookies.length; i++){
        let n = cookies[i].split("=");
        let nombre = n[0].trim();
        let valor = n[1];
        if(nombre == nomCookie){
            return valor;
        }
    }
    return null;
}

function setCookie(nombre, valor, caduca){
    let hoy = new Date();
    hoy.setTime(hoy.getTime() + parseInt(caduca));
    let expiracion = "expires=" + hoy.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}
let contador = getCookie("contador");
if ( contador === null) {
    setCookie("contador", 0, 86400000); //1 día (86400000 ms)
} else {
    contador = parseInt(contador);
}

function validarNombre(nombre) {
    return /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre);
}

function validarEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarContraseña(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}

function contraseñasCoinciden(password1, password2) {
    return password1 === password2;
}

nombreInput.addEventListener("input", function () {
    if (!validarNombre(nombreInput.value)) {
        nombreInput.setCustomValidity("Introduce un nombre válido.");
        errorNombre.textContent = "El nombre solo debe contener letras y espacios.";
        nombreInput.reportValidity();
    } else {
        nombreInput.setCustomValidity("");
        errorNombre.textContent = "";
        errorNombre.style.display = "none";
    }
});

emailInput.addEventListener("input", function(){
    if(!validarEmail(emailInput.value)){
        emailInput.setCustomValidity("Introduce una dirección de correo válida.");
        errorEmail.textContent = "El email no es válido.";
        emailInput.reportValidity();
    }else{
        emailInput.setCustomValidity("");
    }
});

passwordInput.addEventListener("input", function () {
    if (!validarContraseña(passwordInput.value)) {
        passwordInput.setCustomValidity("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.");
        errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.";
        passwordInput.reportValidity();
    } else {
        passwordInput.setCustomValidity("");
        errorPassword.textContent = "";
        errorPassword.style.display = "none";
    }
});

password2Input.addEventListener("input", function () {
    if (!contraseñasCoinciden(passwordInput.value, password2Input.value)) {
        password2Input.setCustomValidity("Las contraseñas no coinciden.");
        errorPassword2.textContent = "Las contraseñas no coinciden.";
        password2Input.reportValidity();
    } else {
        password2Input.setCustomValidity("");
        errorPassword2.textContent = "";
        errorPassword2.style.display = "none";
    }
});

enviar.addEventListener("click", function (event) {
    if (contador >= maxIntentos) {
        alert("Has superado el número máximo de intentos.");
        event.preventDefault();
        return;
    }

    if (!form.checkValidity()) {
        event.preventDefault();
        console.log("Formulario válido: ", form.checkValidity());
        if (!validarNombre(nombreInput.value)) {
            errorNombre.textContent = "El nombre solo debe contener letras y espacios.";
            errorNombre.style.display = "block";
        } else {
            errorNombre.style.display = "none";
        }

        if (!validarEmail(emailInput.value)) {
            errorEmail.textContent = "El email no es válido.";
            errorEmail.style.display = "block";
        }else{
            errorEmail.style.display = "none";
        }

        if (!validarContraseña(passwordInput.value)) {
            errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.";
            errorPassword.style.display = "block";
        } else {
            errorPassword.style.display = "none";
        }

        if (!contraseñasCoinciden(passwordInput.value, password2Input.value)) {
            errorPassword2.textContent = "Las contraseñas no coinciden.";
            errorPassword2.style.display = "block";
        } else {
            errorPassword2.style.display = "none";
        }

        if (selectFavorito.value === "") {
            errorFavorito.textContent = "Por favor, selecciona una opción en 'Producto favorito'.";
            errorFavorito.style.display = "block";
        }else{
            errorFavorito.style.display = "none";
        }
        contador++;
        setCookie("contador", contador, 86400000);
        console.log(contador);
    }else{
        console.log("Enviando formulario...");
        form.submit();
    }
});