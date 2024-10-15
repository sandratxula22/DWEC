// calcular("*", 3, 4, 5, 6);
function calcular(signo,...numeros){
    if(numeros.length >= 2){
        let res = "";
        for(i=0;i<numeros.length;i++){
            res += numeros[i];
            if(i<numeros.length - 1){
                res += signo;
            }
        }
        return eval(res);
    }else{
        return "Debes introducir más de un número para hacer un cálculo.";
    }
}

console.log("-------SUMA-------");
console.log("10 + 5 + 3 + 20 = " + calcular("+", 10, 5, 3, 20));

console.log("-------RESTA------");
console.log("33 - 5 - 19 - 1 - 8 = " + calcular("-", 33, 5, 19, 1, 8));

console.log("--MULTIPLICACIÓN--");
console.log("2 * 4 * 3 = " + calcular("*", 2, 4, 3));

console.log("-----DIVISIÓN-----");
console.log("1000 / 5 / 2 / 25  = " + calcular("/", 1000, 5, 2, 25));

console.log("--Prueba con un sólo número--");
console.log(calcular("*", 5));