//nuevo objeto con la fecha actual del sistema
let fecha = new Date();
console.log('Fecha del sistema: ' + fecha);

//creamos una fecha desde 01/01/1970 + los ms
let fechams = new Date(1000);
console.log('Fecha más milisegunds: ' + fechams);

//creamos una fecha a partir de un string (yyyy-mm-dd)
let fecha2 = new Date("2000-11-22");
console.log('Fecha 2: ' + fecha2);

//creamos una fecha con parametros (meses empiezan en 0, los ms se suman)
let fecha3 = new Date(1970, 6, 14, 19, 25, 56, 1000);
console.log('Fecha 3: ' + fecha3);

//valor numérico de fecha actual
let fecha4 = Date.now();
console.log('Fecha 4: ' + fecha4);
console.log(new Date(fecha4)); //obtenemos la fecha de hoy a partir del valor numérico en ms

//valor numérico de una fecha string
let fecha5 = Date.parse("2000-11-22");
console.log('Fecha 5: ' + fecha5);
console.log(new Date(fecha5));//obtenemos la fecha anterior a partir del valor numérico en ms

//sacamos año de una fecha
let año = fecha3.getFullYear();
console.log('Año de fecha 3: ' + año);

//sacamos año de una fecha
let mes = fecha3.getMonth();
console.log('Mes de fecha 3: ' + mes);

//sacamos día de una fecha
let dia = fecha3.getDate();
console.log('Día de fecha 3: ' + dia);

//sacamos día de la semana de una fecha (0 es domingo, 6 es sábado)
let diasem = fecha3.getDay();
console.log('Día de la semana de fecha 3: ' + diasem);

//cambiar formato de fecha
const opc = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
fecha3 = fecha2.toLocaleDateString('es-ES', opc);
console.log(fecha3);
let fecha6 = new Date("2000-8-2");
console.log(fecha6.toDateString());

const options = {
    year: "2-digit",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    weekday: "short",
    hour12: true,
    timeZone: 'Europe/Madrid'
}
let fecha7 = new Date("2024-9-2");
console.log(fecha7.toLocaleDateString('es-ES', options));

//Opciones posibles
//const Options = {
//    dateStyle: 'full' | 'long' | 'medium' | 'short',
//    timeStyle: 'full' | 'long' | 'medium' | 'short',
//    calendar: 'buddhist' | 'chinese' | 'coptic' | 'dangi' | 'ethioaa' | 'ethiopic' | 'gregory' | 'hebrew' | 'indian' | 'islamic' | 'islamic-umalqura' | 'islamic-tbla' | 'islamic-civil' | 'islamic-rgsa' | 'iso8601' | 'japanese' | 'persian' | 'roc' | 'islamicc',
//    dayPeriod: 'narrow' | 'short' | 'long',
//    numberingSystem: 'arab' | 'arabext' | 'bali' | 'beng' | 'deva' | 'fullwide' | ' gujr' | 'guru' | 'hanidec' | 'khmr' | ' knda' | 'laoo' | 'latn' | 'limb' | 'mlym' | 'mong' | 'mymr' | 'orya' | 'tamldec' | 'telu' | 'thai' | 'tibt',
//    localeMatcher: 'lookup' | 'best fit',
//    year: "numeric" | "2-digit",
//    month: "numeric" | "2-digit" | "long" | "short" | "narrow",
//    day: "numeric" | "2-digit",
//    hour: "numeric" | "2-digit",
//    minute: "numeric" | "2-digit",
//    second: "numeric" | "2-digit",
//    era: "long" | "short" | "narrow",
//    weekday: "long" | "short" | "narrow",
//    hourCycle: 'h11'|'h12'|'h23'|'h24',
//    hour12: boolean,
//    timeZone: string,
//    formatMatcher: 'basic' |'best fit',
//    timeZoneName: 'long' | 'short' |'shortOffset'|'longOffset'|'shortGeneric'| 'longGeneric'
//}

function capturaReloj(){
    let ms = new Date();
    return (ms.getHours() +":"+ ms.getMinutes() +":"+ ms.getSeconds());
}

console.log(capturaReloj());