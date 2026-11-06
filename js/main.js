
const carritos = []
let comprar = false;
while(!comprar){
let opcionProductos = parseInt(prompt("Que productos deseas comprar\n" +
    "1.celular\n" +
    "2.tablet\n" +
    "3.notebook\n" +
    "4.playstation"
))
switch(opcionProductos){
    case 1:
        carritos.push("celular")
        break;
    case 2:
        carritos.push("tablet")
        break;
    case 3:
        carritos.push("notebook")
        break;
    case 4:
        carritos.push("playstation")
        break;
    default:
        alert("Opcion Incorrecta");
}

let seguirComprando = prompt("Deseas comprar otro producto ? Si/No").toLowerCase()
if(seguirComprando == "si"){
   comprar = false;
}else{
    comprar = true;
}
}

if (carritos.length === 0) {
    alert("No agregaste ningún producto al carrito.");
} else {
    let seguirBorrando = true;

    while (seguirBorrando && carritos.length > 0) {
        
        let respuestaEliminar = prompt("Tus productos son:\n" + carritos.join(" - ") + "\n\n¿Deseas borrar alguno? (Si / No)").toLowerCase();
        
       
        if (respuestaEliminar !== "si") {
            seguirBorrando = false;
        } else {
           
            let productoABorrar = prompt("Ingresa el nombre exacto a borrar:\n" + carritos.join(" - "));

            if (!carritos.includes(productoABorrar)) {
                alert("Ese producto no se encuentra en el carrito.");
            } else {
                let indice = carritos.indexOf(productoABorrar);
                carritos.splice(indice, 1);
                alert("¡Producto eliminado con éxito!");
            }
        }
    }
    if (carritos.length === 0) {
        alert("Te quedaste sin productos en el carrito.");
    } else {
        alert("¡Compra finalizada con éxito! Tu carrito final es:\n" + carritos.join(" - "));
    }
}