window.addEventListener("load", function(){
    //crear tabla
    let zonaDibujo = document.getElementById("zonadibujo");

    let tabla = document.createElement("table");
    tabla.setAttribute("border", "1");
    tabla.setAttribute("class", "tablerodibujo");
    
    for(let i=0;i<30;i++){
        let tr = document.createElement("tr");
        for(let j=0;j<30;j++){
            let td = document.createElement("td");
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    zonaDibujo.appendChild(tabla);

    let paleta = document.querySelector("#paleta tr");
    let pincel = document.querySelector("#pincel");

    //sacar el actual seleccionado y su color
    let seleccionado = document.querySelector(".seleccionado");
    let color = getComputedStyle(seleccionado).backgroundColor;

    let pintando = false;
    
    paleta.addEventListener("click", function(e){
        if(e.target.tagName === "TD"){
            //borrar seleccionado anterior
            let clase = seleccionado.getAttribute("class").replace("seleccionado", "").trim();;
            seleccionado.setAttribute("class", clase);

            //actualizar el nuevo seleccionado
            let claseNew = e.target.getAttribute("class") + " seleccionado";
            e.target.setAttribute("class", claseNew.trim());
            seleccionado = e.target;
            color = getComputedStyle(seleccionado).backgroundColor;
        }
    });

    tabla.addEventListener("click", function(){
        pintando = !pintando;
        if(pintando){
            pincel.innerHTML = "PINCEL ACTIVADO";
        }else{
            pincel.innerHTML = "PINCEL DESACTIVADO";
        }
    })

    tabla.addEventListener("mousemove", function(e){
        if(pintando && e.target.tagName === "TD"){
            e.target.style.backgroundColor = color;
        }
    });
});

