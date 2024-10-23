let a = 3;
let b = 6;
[a, b] = [b, a]
console.log("a: "+ a);
console.log("b: "+ b);
console.log("--------");

//con array va por posición
const array = ['José', '25', 'Valladolid'];
const [nombre, edad, ciudad] = array;
console.log(nombre);
console.log(edad);
console.log(ciudad);
console.log("--------");

//en objetos va por valor, si cambiamos el nombre no sabe qué es
const persona = {
    nombre2: 'Sarah',
    pais: 'Nigeria',
    trabajo: 'Desarrollador'
};
const {nombre2, uno, trabajo} = persona
console.log(nombre2);
console.log(uno);
console.log(trabajo);
console.log("--------");

//desestructuración anidada
const persona2 = {
    nombre: 'Sandra',
    lugar: {
        pais: 'Nigeria',
        ciudad2: 'Lagos'
    },
    amigas: ['Annie', 'Becky']
};
const {nombre: foo, lugar: {pais: bar, ciudad2: x}} = persona2
console.log(foo, bar, x);
const {lugar: {ciudad2}} = persona2
console.log(ciudad2);
const {amigas: [primera]} = persona2
console.log(primera);
console.log("--------");

//desestructuración y funciones
const persona3 = {
    nombre: 'Pedro',
    domicilio: 'C/Mayor, 1',
    pais: 'España'
};
function visualizarDatos1(object){
    console.log(object);
}
function visualizarDatos2({nombre, domicilio}){
    console.log(nombre+ ' --- '+domicilio);
}
visualizarDatos1(persona3);
visualizarDatos2(persona3);