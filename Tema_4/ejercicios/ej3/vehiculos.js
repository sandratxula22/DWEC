class Vehiculo{
    constructor(pasajeros){
        this.pasajeros = pasajeros;
    }

    set pasajeros(value){
        this._pasajeros = value;
    }

    get pasajeros(){
        return this._pasajeros;
    }

    get tipo(){
        return 'Vehiculo';
    }
}

class Turismo extends Vehiculo {
    constructor(pasajeros, color){
        super(pasajeros);
        this.color = color;
    }

    set color(value){
        this._color = value;
    }

    get color(){
        return this._color;
    }

    get tipo(){
        return "Turismo";
    }
}

class Camion extends Vehiculo {
    constructor(pasajeros, tara){
        super(pasajeros);
        this.tara = tara;
    }

    set tara(value){
        this._tara = value;
    }

    get tara(){
        return this._tara;
    }

    get tipo(){
        return 'Camion';
    }
}

function capturaReloj(){
    let ms = new Date();
    return (ms.getHours() +":"+ ms.getMinutes() +":"+ ms.getSeconds());
}

console.log(capturaReloj());

function generaVehiculos(){
    let vehiculos = [];
    

    for(i=0;i<=Math.floor(Math.random() * 4);i++){    
        let pasajeros = Math.floor((Math.random() * 7) + 1);
        let color = Math.floor(Math.random() * 3);
        if(color === 0){
            color = "red";
        }else if(color === 1){
            color = "green";
        }else{
            color = "blue";
        }
        vehiculos.push(new Turismo(pasajeros, color));
    }

    for(i=0;i<=Math.floor(Math.random() * 4);i++){
        let pasajeros = Math.floor((Math.random() * 7) + 1);
        let tara = Math.floor(Math.random() * 10000);
        vehiculos.push(new Camion(pasajeros, tara));
    }
    return vehiculos;
}

let vehiculosGen = generaVehiculos();

vehiculosGen.forEach(vehiculo => {
    if(vehiculo.tipo === 'Camion'){
        console.log(vehiculo.pasajeros+ " " + vehiculo.tara );
    }else{
        console.log(vehiculo.pasajeros+" "+vehiculo.color);
    }
});

