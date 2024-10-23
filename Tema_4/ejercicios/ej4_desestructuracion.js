//Dado el siguiente objeto
const persona = {
    nombre: 'Pepe',
    apellidos: ['García', 'Pérez'],
    edad: 23
}

//Desestructurar nombre y edad en ej1 y ej2
const {nombre: ej1, edad: ej2} = persona
console.log(ej1);
console.log(ej2);
console.log('---------');

//Dado el siguiente array
const array = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

//Desestructurar el primer y tercer elemento en las variables lu y mi
const [lu, , mi, , ] = array
console.log(lu);
console.log(mi);
console.log('---------');

//Desestructurar los apellidos de persona en las variables apellido1 y apellido2
const {apellidos: [apellido1, apellido2]} = persona;
console.log(apellido1);
console.log(apellido2);
console.log('---------');

//Crear una funcion denominada "verDatos" que admita como parámetro el objeto persona y,
//realizando desestructuración, cree y visualice las variables nombre y edad con los 
//valores por defecto "Luis" y 20 respectivamente. Probar con diferentes objetos.
function verDatos({nombre = 'Luis', edad = 20}){
    console.log(nombre+ ': ' +edad);
}
const persona2 = {
    nombre: 'Juan',
    edad: 28
}
verDatos(persona);
verDatos(persona2);
delete persona2.nombre;
delete persona2.edad;
verDatos(persona2);