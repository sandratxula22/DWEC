//tupla
var array: [number, number] = [1, 2];
//type
type Person = {
    name: string;
    age?: number;
};
const person: Person = {
    name: "Jane",
};
const person2: Person = {
    name: "Sandra",
};
//interface
interface Persona {
    name: string;
    age: number;
};
const persona: Persona = {
    name: "Sandru",
    age: 3,
};
//records <key, valor>
const myObject: Record<string, any> = {};
myObject.name = 'Pep';
myObject.age = 24;
//union
type PersonName = {
    name: string;
};
type PersonAge = {
    age: number;
};
type PersonMayorEdad = {
    mayorEdad: boolean;
};
type Person2 = PersonName & PersonAge & PersonMayorEdad;
const person3: Person2 = {
    name: "Sandra",
    age: 25,
    mayorEdad: true,
};
//OR es como el anterior pero con "|"