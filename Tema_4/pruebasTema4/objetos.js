//Notación
let persona1 =  {nombre: "Ana", edad: 20};
//Equivalente
let persona2 = new Object();
persona2.nombre = "Sandra";
persona2.edad = 23;

let empleado = {
    nombre: "Laura",
    edad: 25,
    "Trabajador temporal": true,
    domicilio: {
        calle: "Dársena",
        ciudad: "Valladolid",
    }
}

empleado.sexo = "Masc";
console.log(empleado.sexo);
empleado["Trabajador temporal"] = false;
console.log(empleado["Trabajador temporal"]);
console.log(empleado.domicilio.calle);
delete empleado.edad;
console.log(empleado.edad);

const pr1 = "edad";
const valor = 20;
const pr2 = "trabajador";
const persona = {
    nombre: "Pepe",
    [pr1]: valor,
    [pr2]: true,
}
console.log(persona);