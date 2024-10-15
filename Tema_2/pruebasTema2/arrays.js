//inicializar arrays
let lista1 = new Array(0, 1, 2, 3, 4, 5);
let lista2 = Array('hola', 'hello', 'bonjour', 'halo');
let lista3 = [];

lista3[0] = 'a';
lista3[1] = 'b';
lista3[2] = 'c';
lista3[3] = 'd';

//para saber el tamaño del array
console.log('Tamaño del array: ' + lista1.length);

//concatenar arrays
console.log('Concatenamos lista2 y lista3: ' + lista2.concat(lista3));
console.log('Concatenamos lista1 y lista3: ' +lista1.concat(lista3));

//concatenamos array y string y vemos su tipo
let b = "sssss"
let a = b.concat(lista3);
console.log(a);
console.log(typeof(a));

//unir elementos de array y almacenar en string
console.log('Unir elementos del array ' +lista1.join());

//extrae el último elemento del array
lista2.pop()
console.log('Hemos extraído el último elemento: ');
console.log(lista2);

//añade un elemento al final del array
lista3.push('e');
console.log('Hemos añadido un elemento al final: ');
console.log(lista3);

//extrae el primer elemento del array
lista3.shift();
console.log('Hemos extraído el primer elemento: ');
console.log(lista3);

//añade un elemento al principio del array
lista3.unshift('1');
console.log('Hemos añadido el primer elemento: ');
console.log(lista3);

//invertir la posición de los elementos del array
lista1.reverse();
console.log('Hemos invertido el array: ');
console.log(lista1);

//ordena el array
let ord = [1, 20, 10, 2, 1];
ord.sort();
lista2.sort();
console.log('No ordena bien arrays de números:')
console.log(ord);
console.log('Si ordena bien palabras: ')
console.log(lista2);

//devuelve la posición de un elemento
let ind = ['a', 'b', 'a'];
console.log('Buscamos primera posición de un elemento');
console.log(ind.indexOf('c')); // -1 si no encuentra
console.log(ind.indexOf('a'));
console.log(ind.indexOf('a', 1)); //empezando en la posición 1

//devuelve la última posición de un elemento
console.log('Buscamos la última posición de un elemento ');
console.log(ind.lastIndexOf('a'));

//devuelve un nuevo array con parte de los elementos
let z = ['azul', 'verde', 'rojo', 'amarillo', 'morado'];
console.log(z);
console.log('Empieza en la posición 1 hasta la 3 sin incluir ');
console.log(z.slice(1, 3));

//añadir, reemplazar o borrar elementos
let meses = ['enero', 'febrero', 'abril'];
let m = 'marzo';
meses.splice(2, 0, m);
console.log('En la posición 2 añado m')
console.log(meses);
console.log(meses.splice(1, 3));

//foreach array
let arr = [1, 2, 5, 6];
console.log("forEach: ");
arr.forEach(function(elemento, index){
    console.log(index+ " -> "+elemento+"\n");
});

//forEach matriz
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 10],
    ['A', 'B', 'C']
];

matriz.forEach(function(i, index_i){
    matriz[index_i].forEach(function(j, index_j){
        document.write(matriz[index_i][index_j]);
        document.write(' ');
    });
    document.write('<br>');
});

//rellenar un array
let matriz2 = new Array(100);
matriz2.fill(['A', 'B', 'C']);