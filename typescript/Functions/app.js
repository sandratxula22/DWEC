//funciones
function add(a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
}
var result = add(1, 2);
//tipo Function
//let combinedValues: (a: number, b: number) => number;
var combinedValues;
function sayHello() {
    console.log('Hola');
}
var user = 'Bob';
if (user == 'Pep') {
    combinedValues = add;
}
else {
    combinedValues = sayHello;
}
combinedValues(1, 2);
//never
function generateError(message) {
    if (message == 'hola') {
        return true;
    }
    throw new Error(message);
}
var error = generateError('Ops! Ha ocurrido un error');
console.log(error);
