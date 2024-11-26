let texto = "JavaScript";
console.log(texto.length);//10

let parte1 = "Hola";
let parte2 = "Mundo";
console.log(parte1.concat(", ", parte2, "!"));//"Hola, Mundo!"
console.log(parte1.concat(parte2));//HolaMundo

let mensaje = "JavaScript";
console.log(mensaje.charAt(4));//"S"
console.log(mensaje.charAt(10));//" "

let letra = "A";
console.log(letra.charCodeAt(0));//65
console.log("0".charCodeAt());//48

let frase = "Estoy aprendiendo JavaScript";
console.log(frase.indexOf("aprendiendo")); //6
console.log(frase.indexOf("Python"));//-1

let textoRepetido = "Hola Mundo. Hola Universo.";
console.log(textoRepetido.lastIndexOf("Hola"));//12
console.log(textoRepetido.lastIndexOf("hola"));//-1

let cadena = "JavaScript es genial";
console.log(cadena.substr(0, 10));//"JavaScript"
console.log(cadena.substr(11, 2));//"es"
console.log(cadena.substr(12, 4));//"s ge"

console.log(cadena.slice(0, 10));//"JavaScript"
console.log(cadena.slice(-6));//"genial"

let grito = "¡ESTO ES UN GRITO!";
console.log(grito.toLowerCase());//"¡esto es un grito!"

let susurro = "esto es un susurro...";
console.log(susurro.toUpperCase());//"ESTO ES UN SUSURRO..."

let lista = "manzana,pera,plátano";
console.log(lista.split(",")); //["manzana", "pera", "plátano"]

let ejemplo = "Programar en JavaScript es divertido.";
console.log("----------------------------------");
console.log("Longitud:", ejemplo.length); // Longitud: 36
console.log("Concatenar:", ejemplo.concat(" ¿No crees?")); // Concatenar: Programar en JavaScript es divertido. ¿No crees?
console.log("Carácter en la posición 10:", ejemplo.charAt(10)); // Carácter en la posición 10: e
console.log("Código ASCII de 'P':", ejemplo.charCodeAt(0)); // Código ASCII de 'P': 80
console.log("Primera aparición de 'JavaScript':", ejemplo.indexOf("JavaScript")); // 13
console.log("Última aparición de 'es':", ejemplo.lastIndexOf("es")); //Última aparición de 'es': 24
console.log("Subcadena desde la posición 0, 9 caracteres:", ejemplo.substr(0, 9)); // Programar
console.log("En minúsculas:", ejemplo.toLowerCase()); // programar en javascript es divertido.
console.log("En mayúsculas:", ejemplo.toUpperCase()); // PROGRAMAR EN JAVASCRIPT ES DIVERTIDO.
console.log("Dividir por espacios:", ejemplo.split(" ")); // ["Programar", "en", "JavaScript", "es", "divertido."]
console.log("----------------------------------");

let texto2 = "Hola, mundo.";
console.log(texto2.endsWith("mundo."));//true
console.log(texto2.endsWith("Hola"));//false
console.log(texto2.endsWith("mundo"));//false

console.log(texto2.startsWith("Hola"));//true
console.log(texto2.startsWith("mundo"));//false
console.log(texto2.startsWith("hola"));//false

let texto3 = "Estoy aprendiendo JavaScript.";
console.log(texto3.includes("aprendiendo"));//true
console.log(texto3.includes("Python"));//false

let texto4 = "El número es 12345.";
console.log(texto4.match(/\d+/)); //["12345"] (primera coincidencia de dígitos)
console.log(texto4.match(/[aeiou]/g)); // Resultado: ["e", "u", "e", "o"] (todas las vocales)

let saludo = "¡Hola!";
console.log(saludo.repeat(3));//"¡Hola!¡Hola!¡Hola!"

let texto5 = "Hola, mundo.";
console.log(texto5.replace("mundo", "universo"));//"Hola, universo."

// Usando expresiones regulares
let texto6 = "El precio es 50 euros.";
console.log(texto6.replace(/\d+/, "60"));//"El precio es 60 euros."

let texto7 = "   Hola, mundo.   ";
console.log(texto7.trim());//"Hola, mundo."

let numero = "5";
console.log(numero.padStart(3, "0"));//"005"
console.log(numero.padEnd(3, "0"));//"500"


console.log("--------------------------------");
let ejemplo2 = " Aprende JavaScript!  ";
// startsWith y endsWith
console.log("Comienza con 'Aprende':", ejemplo2.trim().startsWith("Aprende"));//true
console.log("Termina con '!':", ejemplo2.trim().endsWith("!"));//true
// includes
console.log("Incluye 'JavaScript':", ejemplo2.includes("JavaScript"));//true
// match
console.log("Vocales encontradas:", ejemplo2.match(/[aeiou]/g));//["e", "e", "a", "a", "i"]
// repeat
console.log("Repetir:", "*".repeat(5));//*****
// replace
console.log("Reemplazar 'JavaScript' por 'Python':", ejemplo2.replace("JavaScript", "Python"));
// trim
console.log("Eliminar espacios:", ejemplo2.trim());//"Aprende JavaScript!"
// padStart y padEnd
let numero2 = "123";
console.log("Relleno al inicio:", numero2.padStart(5, "0"));//"00123"
console.log("Relleno al final:", numero2.padEnd(5, "0"));//"12300"

console.log("----------------------------");
let texto8 = "Hola, mundo.";
// Acceso por índice
console.log(texto8[0]);  //"H" (el primer carácter)
console.log(texto8[6]);  //"m" (el séptimo carácter)
console.log(texto8[texto8.length - 1]); // Resultado: "." (último carácter)

// Iteración como si fuera un array
for (let i = 0; i < texto8.length; i++) {
    console.log(`Carácter en la posición ${i}: ${texto8[i]}`);
}

for (let char of texto8) {
    console.log(char);
}

console.log(Array.from(texto8)); //["H", "o", "l", "a", ",", " ", "m", "u", "n", "d", "o", "."]
console.log([...texto8]);//Igual que arriba, usa el operador spread

let texto9 = "Hola";
// Intentar cambiar el primer carácter
texto9[0] = "h"; // No tiene efecto
console.log(texto9); // Resultado: "Hola"
let nuevoTexto = "h" + texto9.slice(1);
console.log(nuevoTexto); // Resultado: "hola"