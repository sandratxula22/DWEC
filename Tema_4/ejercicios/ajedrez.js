//Crear un array tablero de 8x8
let tablero = [
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""]
];

//Definimos el objeto figura con x e y
function Figura(x = 0, y = 0){
    this.x = x;
    this.y = y;
}

//Método moverA(x, y)
Figura.prototype.moverA = function(x, y){
    this.x = x;
    this.y = y;
}

//Crear un array con las figuras, y cada una es un objeto delegado de Figura
let tipo = ["K", "Q", "T", "T", "A", "A", "P", "P", "P", "P", "P", "P", "P", "P", "P", "P"];
let figuras = tipo.map(tipo => {
    let figura = Object.create(new Figura());
    figura.tipo = tipo;
    return figura; 
});

//Función para colocar las figuras en una posición aleatoria
function colocarPieza(figura, tablero){
    let x;
    let y;

    do{
        x = Math.floor(Math.random() * 8);
        y = Math.floor(Math.random() * 8);
    }while (tablero[x][y] != ""); //hasta que haya un espacio vacío

    //cambiamos las propiedades x e y de moverA
    figura.moverA(x, y);

    //colocamos la figura según x e y 
    tablero[x][y] = figura.tipo;
}

//colocamos todas las figuras con foreach
figuras.forEach(figura => colocarPieza(figura, tablero));

//mostramos el tablero
console.table(tablero);