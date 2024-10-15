let array = [100, 23, 23, 23, 23, 67, 67, 45];
let outputArray = [];

//con bucles
for (let n of array) {
    if (outputArray.indexOf(n) == -1) {
        outputArray.push(n);
    }
}
console.log("Con bucles: ");
console.log(outputArray);

//con Array.from y Set
let set = new Set(array);
console.log("Contenido del set: ");
console.log(set);
console.log(set.constructor.name);
console.log("Con Array.from y Set: ");
outputArray = Array.from(set);
console.log(outputArray);
console.log(outputArray.constructor.name);