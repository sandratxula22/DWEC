//función foreach
let a = ['a', 'b', 'c', 'd', 'e'];
a.forEach(function(e){
    console.log(e);
})

//función map
let b = [1, 2, 3, 4, 5];
console.log(b.map(e => e*2));

//función filter
let c = [20, 12, -70, 43, 65, 50, -1, 32, 28, 5, 30, 100, -5];
let result = c.filter((n) => (n%5 === 0));
console.log(result);
console.log(c);

//función every
let d = ['hola', 'funcion', 'sopa', 'cuaderno'];
let e = ['funciones', 'ordenador', 'chao'];
let longitud = (e) => (e.length <= 8);
console.log(d.every(longitud));
console.log(e.every(longitud));

//función some
console.log(e.some(longitud));
let f = ['aaaaaaaaaaaaaa', 'bbbbbbbbbbbbbb', 'ccccccccccccc'];
console.log(f.some(longitud));

//funcion find y findIndex
let g = [10, 80, 45, 23, 120];
console.log(g.find((e) => e > 50)); //primero que encuentra
console.log(g.find((e) => e > 1000)); //undefined porque no encuentra 
console.log(g.findIndex((e) => e > 50)); //índice del primero qeue encuentra
console.log(g.findIndex((e) => e > 1000)); //-1 porque no encuentra

//funcion reduce
let h = [10, 20, 30];
console.log("Reduce 1:");
console.log(h.reduce(pValue => pValue));
console.log("Reduce 2:");
console.log(h.reduce((pValue, n) => pValue + n));
console.log("Reduce 3:");
console.log(h.reduce((pValue, n, i) => pValue + n + i));
console.log("Reduce 4:");
h.reduce((pValue , n, index, array) => {
    console.log(pValue);
    console.log(n);
    console.log(index);
    console.log(array);
    console.log("-------");
});

//usando varias funciones juntas
let frase = "no luce la luna sin traérmela en sueños";
let res1 = frase.split(" ")
    .filter(x => x[0] === 'l')
    .map(x => x.toUpperCase());
console.log(res1);

let res2 = frase.split(' ')
    .map(x => x.length)
    .filter(x => x < 3)
    .reduce((pValue, n) => pValue + n);
console.log(res2);

//saber el tipo de dato cuando da object: .constructor.name
function funcion3(...argumentos){
    console.log(argumentos.constructor.name);
    console.log(argumentos.length);
}
funcion3(1, 2);

let mult = new Function('x', 'y', 'z', 'return x*y*z');
console.log(mult(2,3,4));