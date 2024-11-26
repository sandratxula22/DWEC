window.addEventListener("load", function(e){
    let parking1 = new Parking(6, 0.05);
    parking1.actualizarImporte();

    let fecha = document.querySelector("#horaActual");
    const opc = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    let actualizarFecha = setInterval(function(){
        let fechaActual = new Date();
        fecha.innerHTML = fechaActual.toLocaleDateString('es-ES', opc)+", "+ fechaActual.getHours()+":"+ fechaActual.getMinutes() +":"+ fechaActual.getSeconds();
    },1000);
    
    let guardar = document.querySelector("#guardar");
    let modificar = document.querySelector("#modificar");

    //añadir coches
    let divCoches = document.querySelector("#listado");
    guardar.addEventListener("click", function(e){
        let fo = document.forms[0];
        let modelo = document.querySelector("#modelo");
        let marca = fo['marca'];
        let matricula = document.querySelector("#matricula");
        let color = document.querySelector("#color");
        let coche = new Coche(modelo.value, marca.value, matricula.value, color.value);
        if(parking1.addCoche(coche) == true){
            let parrafo = document.querySelector("#listado p");
            if(parrafo){
                parrafo.remove();
            }
            let divNuevo = document.createElement("div");
            divNuevo.innerHTML = coche.toString();
            divNuevo.setAttribute("class", "coche");
            divNuevo.setAttribute("id", matricula.value);
            divNuevo.setAttribute("draggable", "true");
            parking1._accesos.set(matricula.value, new Date());
            switch(color.value){
                case "rojo":
                    divNuevo.style.backgroundColor = "red";
                    break;
                case "amarillo":
                    divNuevo.style.backgroundColor = "yellow";
                    break;
                case "verde":
                    divNuevo.style.backgroundColor = "green";
                    break;
                case "blanco":
                    divNuevo.style.backgroundColor = "white";
                    break;
                case "gris":
                    divNuevo.style.backgroundColor = "grey";
                    break;
                case "default":
                    break;
            }
            divCoches.append(divNuevo);
        }
    });


    //eliminar coches
    divCoches.addEventListener("dragstart", function(e){
        e.dataTransfer.setData("text", e.target.id);
    })

    divCoches.addEventListener("dragover", function(e){
        e.preventDefault();
    })

    let zonaSalida = document.querySelector("#zonaSalida");
    
    zonaSalida.addEventListener("drop", function(e){
        let idOrigen = e.dataTransfer.getData("text");
        let divBorrar = document.getElementById(idOrigen);
        divBorrar.remove();
        if(parking1.getaccesos.has(idOrigen) == true){
            parking1.getaccesos.delete(idOrigen);
        }

        for(i=0;i<parking1.cochesAparcados.length;i++){
            if(parking1.cochesAparcados[i]._matricula == idOrigen){
                parking1.cochesAparcados.splice(i, 1);
            }
        }
        console.log(parking1.getaccesos);
        console.log(parking1);        
    })

    zonaSalida.addEventListener("dragover", function(e){
        e.preventDefault();
    })
});