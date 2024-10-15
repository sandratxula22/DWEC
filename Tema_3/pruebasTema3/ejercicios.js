//Funcion flecha esVocal, que le pase una letra y devuelva true o false
let esVocal = (e) => {
    if(e === "a"|e === "e"|e === "i"|e === "o"|e === "u"){
        return true;
    }else{
        return false;
    }
}

if(esVocal("a") === true){
    console.log("Es una vocal")
}else{
    console.log("No es una vocal")
}

//Comprobar si función va por valor o referencia
function trueOrFalse(boolean){
    if(boolean === true){
        console.log("verdadero")
    }else{
        console.log("falso")
    }
}

console.log("---FUERA---");
trueOrFalse(true);

function cambiarFuncion(funcion){ //hacemos una function que cambia otra funcion
    function funcion(boolean){
        if(boolean === true){
            console.log("falso")
        }else{
            console.log("verdadero")
        }
    }
    console.log("---DENTRO  ---");
    funcion(true);
    console.log(typeof funcion);
    console.log(funcion.constructor.name);
}

cambiarFuncion(trueOrFalse);
console.log("---FUERA---");
trueOrFalse(true); 