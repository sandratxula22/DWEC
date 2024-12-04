let edificio1 = new Edificio("Calle Júpiter", 7, 47000);
edificio1.agregarPlantasYPuertas(3, 6);
let propietario1 = new Propietario("Juan Pérez", "Masculino", 3);
let propietario2 = new Propietario("Javier Álvarez", "Masculino", 1);
let propietario3 = new Propietario("Elena Gutiérrez", "Femenino", 2);
edificio1.agregarPropietario(propietario1, 0, 0);
edificio1.agregarPropietario(propietario2, 2, 2);
edificio1.agregarPropietario(propietario3, 1, 5);

let inmobiliaria = new Inmobiliaria();
inmobiliaria.addEdificio(edificio1);
console.log(inmobiliaria.getEdificio("Calle Júpiter", 7));
console.log(inmobiliaria.getEdificio("Calle fake", 7));
inmobiliaria.mostrarEdificios();

console.log(edificio1.getNumeroPlantas());