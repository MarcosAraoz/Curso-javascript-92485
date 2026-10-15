
let comprar = false;
while(!comprar){
    let productos = parseInt(prompt("Que producto deseas comprar 1.Celular 2.Notebook 3.Tablet"))

    switch(productos){
        case 1:
            console.log("Celular");
            break;
        case 2:
            console.log("Notebook");
            break;
        case 3:
            console.log("Tablet");
            break;
        default:
            alert("Opcion incorrecta");
    }
    let seguirComprando = prompt("Deseas seguir comprando ? si o no").toLowerCase();
    
    if (seguirComprando == "si"){
        comprar = false;
    } else if (seguirComprando == "no"){
        comprar = true;
    } else{
        alert("Respuesta incorrecta");
    }
}