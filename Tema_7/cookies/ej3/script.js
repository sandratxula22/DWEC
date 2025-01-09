//comprobar compatibilidad
function compruebaCompatibilidad(){
    if(typeof(Storage) !== undefined){
        console.info("Tu navegador acepta almacenamiento local.")
    }else{
        console.info("Tu navegador NO acepta almacenamiento local.")
    }
}
compruebaCompatibilidad();

//Session
function recuperarDatosSession(clave){
    return sessionStorage.getItem(clave);
}
function guardarDatosSession(clave, valor){
    return sessionStorage.setItem(clave, valor);
}
//Local
function recuperarDatosLocal(clave){
    return localStorage.getItem(clave);
}
function guardarDatosLocal(clave, valor){
    return localStorage.setItem(clave, valor);
}

//botones
let incrementar = document.getElementById("incrementar");
let decrementar = document.getElementById("decrementar");
let logout = document.getElementById("logout");

//crear contador
let contador = document.getElementById("contador");
if (!recuperarDatosSession("contador")) {
    guardarDatosSession("contador", 1);
}
contador.innerHTML = "Contador: "+ recuperarDatosSession("contador");

incrementar.addEventListener("click", function(){
    let valor = recuperarDatosSession("contador");
    valor++;
    guardarDatosSession("contador", valor);
    contador.innerHTML = "Contador: "+ recuperarDatosSession("contador");
});

decrementar.addEventListener("click", function(){
    let valor = recuperarDatosSession("contador");
    valor--;
    guardarDatosSession("contador", valor);
    contador.innerHTML = "Contador: "+ recuperarDatosSession("contador");
});

//nombre
let visita = document.getElementById("visita");
if(!recuperarDatosLocal("nombre")){
    let nombre = prompt("¿Cómo te llamas?");
    guardarDatosLocal("nombre", nombre);
    visita.innerHTML = "¡Tu primera visita, "+recuperarDatosLocal("nombre")+ "!";
}else{
    visita.innerHTML = "¡Bienvenido de nuevo, "+recuperarDatosLocal("nombre")+ "!";
}

logout.addEventListener("click", function(){
    localStorage.clear();
    sessionStorage.clear();
    visita.innerHTML = "Sesión cerrada. Recarga la página.";
});