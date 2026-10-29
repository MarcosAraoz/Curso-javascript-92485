
function mostrarProducto(codigo) {
    switch(codigo){
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
            alert("Opcion incorrecta")
    }
}

const evaluarContinuacion = (respuesta) => {
    if (respuesta == "si"){
        return false;
    }
    else if (respuesta == "no"){
        return true ;
    }
    else {
        alert ("Respuesta incorrecta");
        return false;
    }
}

const iniciarTienda = () =>{
    let comprar = false;
    while (!comprar){
        let opcionProducto = parseInt(prompt("Que producto deseas comprar\n" +
          "1.Celular\n" +
          "2.Notebook\n" +
          "3.Tablet"
        ));
      mostrarProducto(opcionProducto);
      let respuestaUsuario = prompt("Deseas seguir comprando? si o no");
      comprar = evaluarContinuacion(respuestaUsuario);
    }
}

iniciarTienda();