//botones
let nueva = document.querySelector("#nueva");
let solucion = document.querySelector("#solucion");
let finalizar = document.querySelector("#finalizar");
//los 2 inputs
let letras = document.getElementById("letras");
let palabraInput = document.getElementById("palabra");
//div resultado
let resultado = document.getElementById("resultado");

const palabras = ["sandra", "desarrollo", "valladolid", "julian", "interfaz", "diseño", "boligrafo", "empresa", "aprobar", "television"]
let palabraActual;

let intentos = 0;
let aciertos = 0;

function desordenarLetras(palabra){
    let letras  = palabra.split("");
    for(i=letras.length -1;i>=0;i--){
        let j = Math.floor(Math.random() * (i+1));
        let temp = letras[i];
        letras[i] = letras[j];
        letras[j] = temp;
    }
    let desordenada = letras.join("");
    return desordenada;
}

function nuevaPalabra(){
    let i = Math.floor(Math.random() * palabras.length);
    palabraActual = palabras[i];
    let desordenadas = desordenarLetras(palabraActual);

    letras.value = desordenadas;
    nueva.disabled = true;
    palabraInput.value = "";
    resultado.innerHTML = "";
    resultado.removeAttribute("class");
    solucion.disabled = false;
}

function verSolucion(){
    resultado.textContent = "La palabra correcta es "+palabraActual.toUpperCase();
    resultado.setAttribute("class", "info");
    nueva.disabled = false;
    solucion.disabled = true;
}

function comprobarInput(){
    resultado.removeAttribute("class");
    palabraInput.value = palabraInput.value.toUpperCase();
    intentos++;
    if(palabraInput.value.toLowerCase() == palabraActual){
        resultado.textContent = "¡CORRECTO! Has acertado la palabra "+ palabraActual.toUpperCase();
        nueva.disabled = false;
        solucion.disabled = true;
        resultado.setAttribute("class", "intentos");
        aciertos++;
    }else{
        resultado.textContent = "";
        nueva.disabled = true;
        solucion.disabled = false;
    }
}

function finalizarJuego(){
    let porcentaje = (aciertos/intentos) * 100;
    resultado.textContent = "PORCENTAJE DE ACIERTOS: "+porcentaje+"%";
    resultado.setAttribute("class", "error");
}

//generar palabra la primera vez
nuevaPalabra();
//botones
nueva.addEventListener("click", nuevaPalabra);
solucion.addEventListener("click", verSolucion);
finalizar.addEventListener("click", finalizarJuego);
//inputs
letras.addEventListener("keydown", function(e){
    e.preventDefault();
});
palabraInput.addEventListener("input", comprobarInput);

