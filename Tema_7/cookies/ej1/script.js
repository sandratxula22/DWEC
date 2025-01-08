//botones
let ver = document.getElementById("verTodas");
let crear = document.getElementById("crearCookie");
let modificar = document.getElementById("modificarCookie");
let leer = document.getElementById("leerCookie");
let borrar = document.getElementById("borrarCookie");

function getCookie(nomCookie){
    let cookies = document.cookie.split(";");

    for(let i=0;i<cookies.length;i++){
        let n = cookies[i].split("=");
        let nombre = n[0];
        let valor = n[1];
        if(nombre.trim() == nomCookie.trim()){
            return valor;
        }
    }
    return null;
}

function setCookie(nombre, valor, caduca){
    let hoy = new Date();
    hoy.setTime(hoy.getTime() + parseInt(caduca));
    let expiracion = "expires="+ hoy.toUTCString();
    console.log(`Cookie ${nombre} caduca en: ${expiracion}`); // Verifica la fecha de expiración
    document.cookie = nombre+"="+valor+";"+expiracion+";path=/";
}

function verTodas(){
    let cookies = document.cookie.split(";");
    let caja = document.getElementById("caja");
    caja.innerHTML = "";
    for(let i=0;i<cookies.length;i++){
        let n = cookies[i].split("=");
        let key = n[0];
        let value = n[1];
        let h3 = document.createElement("h3");
        h3.innerHTML = key +" => "+value;
        caja.appendChild(h3);
    }
}

function crearCookie(){
    let key = prompt("Introduce el nombre de la cookie:");
    let value = prompt("Introduce el valor de la cookie:");
    let caducidad = prompt("Introduce el tiempo de caducidad (ms):");
    setCookie(key, value, caducidad = "100000");
    verTodas();
}

function modificarCookie(){
    let key = prompt("Escribe el nombre de la cookie que quieres modificar:");
    if(getCookie(key)){
        let value = prompt("Escribe el nuevo valor de la cookie:");
        let caducidad = prompt("Escibe la nueva caducidad para tu cookie:");
        setCookie(key, value, caducidad = "100000");
    }else{
        alert("Esa cookie no existe, tienes que crearla primero.");
    }
    verTodas();
}

function leerCookie(){
    let key = prompt("Escribe el nombre de la cookie que quieres leer:");
    if(getCookie(key)){
        alert("El valor de la cookie es: "+key+" => "+getCookie(key));
    }else{
        alert("Esa cookie no existe.");
    }
}

function borrarCookie(){
    let key = prompt("Escribe el nombre de la cookie que quieres borrar:");
    if(getCookie(key)){
        document.cookie = key+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
        verTodas();
    }else{
        alert("Esa cookie no existe.");
    }
}

ver.addEventListener("click", verTodas);
crear.addEventListener("click", crearCookie);
modificar.addEventListener("click", modificarCookie);
leer.addEventListener("click", leerCookie);
borrar.addEventListener("click", borrarCookie);

console.log(document.cookie);