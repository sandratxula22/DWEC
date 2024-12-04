var inquilinosImportar = [
  {
    piso: 3,
    puerta: 1,
    nombre: "Gustavo Ramírez",
    genero: "hombre",
    miembros: 5,
  },
  { piso: 2, puerta: 1, nombre: "María Pérez", genero: "mujer", miembros: 1 },
  {
    piso: 2,
    puerta: 2,
    nombre: "Manuel González",
    genero: "hombre",
    miembros: 1,
  },
  {
    piso: 2,
    puerta: 3,
    nombre: "Pepa Fernández",
    genero: "mujer",
    miembros: 3,
  },
  {
    piso: 1,
    puerta: 1,
    nombre: "Asterio Gómez",
    genero: "hombre",
    miembros: 2,
  },
  {
    piso: 3,
    puerta: 1,
    nombre: "Eleuterio Gómez",
    genero: "hombre",
    miembros: 6,
  },
];

TIPO_FAMILIA = {
  HOMBRE: "hombre",
  MUJER: "mujer",
  PAREJA: "pareja",
  FAMILIA: "familia",
};

//=== Instanciar VARIABLES GLOBALES ============================================
var miEdificio = new Edificio("Uría", 2, "33012");

window.addEventListener("load", cargaPagina);

function cargaPagina() {
  cargaInquilinos();
  creaEdificio();
  cargaManejadores();
}

function cargaInquilinos() {
 
}

function creaEdificio() {

}


function cargaManejadores() {
}

