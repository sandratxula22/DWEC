const person = { name: 'Paco', age: 30 };
const student = { course: 'A' };

Object.setPrototypeOf(student, person);

//itera por las propiedades del objeto incluyendo los prototipos
console.log("----for in----");
for(const k in student){
    console.log(`${k}: ${student[k]}`);
}

//itera por las propiedades del objeto sin incluir las de los prototipos
console.log("----for of----");
for(const k of Object.keys(student)){
    console.log(`${k}: ${student[k]}`);
}

//itera por las propiedades del objeto sin incluir las de los prototipos
console.log("----forEach----");
Object.entries(student).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//Object.create();
const customer = Object.create(person);
customer.sales = 1234;
console.log("--console.log(customer)--");
console.log(customer);
console.log("----for in----");
for(const k in customer){
    console.log(`${k}: ${customer[k]}`);
}

const data = { height: 160 };
const student2 = Object.assign({}, person, data);
console.log("---------------");
console.log(person);
console.log(student2);
//iteramos por student2 y si es su propiedad la sacamos por pantalla
for(const key in student2){
    if(student2.hasOwnProperty(key)){
        console.log(key, student2[key]);
    }
}

//Función constructora
console.log("---creamos p1 a partir de un constructor Persona---");
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}
const p1 = new Persona("Juan", 25);
console.log(p1);