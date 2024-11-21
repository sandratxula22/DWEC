window.addEventListener("load", function () {
    //array con animales
    let arrayAnimales = ['cerdo', 'gato', 'perro', 'vaca', 'zorro', 'burro', 'rana', 'leon'];
    //div id animales
    let animales = document.createElement("div");
    animales.setAttribute("id", "animales");
    document.body.append(animales);
    //animales añadidos dinámicamente
    for (let i = 0; i < arrayAnimales.length; i++) {
        let animal = document.createElement("div");
        animal.setAttribute("class", "animal");
        animal.setAttribute("id", arrayAnimales[i]);
        animal.setAttribute("style", "background-image: url('images/" + arrayAnimales[i] + ".png')");
        animales.append(animal);
    }

    for (let i = 0; i < animales.childElementCount; i++) {
        console.log(animales.children[i]);
        animales.children[i].addEventListener('click', function (e) {
            const efectos = ['rota', 'grande', 'pequenio', 'baja', 'def'];
            let index = Math.floor(Math.random() * efectos.length);
            
            animales.children[i].setAttribute("class", "animal "+efectos[index]);
        });
    }
});