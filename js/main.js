
class Producto {
    static id = 0;
    constructor(categoria, marca, modelo, almacenamiento, precio) {
        this.id = ++Producto.id;
        this.categoria = categoria;
        this.marca = marca;
        this.modelo = modelo;
        this.almacenamiento = almacenamiento;
        this.precio = precio;
    }
}

const celular1 = new Producto("Celular", "Iphone", "18 Pro Max", "256gb", 1800);
const tablet1 = new Producto("Tablet", "Samsung", "Tab s12 Ultra", "256gb", 2000);
const notebook1 = new Producto("Notebook", "Apple", "Macbook Pro 14", "1TB", 2500);
const playstation1 = new Producto("Playstation", "Sony", "Playstation 4 Pro", "1TB", 300);

const carritos = [];
let comprar = false;

while (!comprar) {
    let opcionProductos = parseInt(prompt(
        "¿Qué productos deseas comprar?\n" +
        "1. " + celular1.marca + " " + celular1.modelo + " ($" + celular1.precio + ")\n" +
        "2. " + tablet1.marca + " " + tablet1.modelo + " ($" + tablet1.precio + ")\n" +
        "3. " + notebook1.marca + " " + notebook1.modelo + " ($" + notebook1.precio + ")\n" +
        "4. " + playstation1.marca + " " + playstation1.modelo + " ($" + playstation1.precio + ")"
    ));

    switch (opcionProductos) {
        case 1:
            carritos.push(celular1);
            alert("Agregaste: " + celular1.marca + " " + celular1.modelo + " ($" + celular1.precio + ")");
            break;
        case 2:
            carritos.push(tablet1);
            alert("Agregaste: " + tablet1.marca + " " + tablet1.modelo + " ($" + tablet1.precio + ")");
            break;
        case 3:
            carritos.push(notebook1);
            alert("Agregaste: " + notebook1.marca + " " + notebook1.modelo + " ($" + notebook1.precio + ")");
            break;
        case 4:
            carritos.push(playstation1);
            alert("Agregaste: " + playstation1.marca + " " + playstation1.modelo + " ($" + playstation1.precio + ")");
            break;
        default:
            alert("Opción incorrecta.");
            break;
    }

    let seguirComprando = prompt("¿Deseas comprar otro producto? (Si / No)").toLowerCase();
    if (seguirComprando === "si") {
        comprar = false;
    } else {
        comprar = true;
    }
}

if (carritos.length === 0) {
    alert("No agregaste ningún producto al carrito.");
} else {
    let quiereBorrar = prompt("¿Deseas quitar algún producto de tu carrito? (Si / No)").toLowerCase();

    while (quiereBorrar === "si" && carritos.length > 0) {
        let detalleCarrito = "";
        let totalActual = 0;

        for (let i = 0; i < carritos.length; i++) {
            detalleCarrito += (i + 1) + ". " + carritos[i].marca + " " + carritos[i].modelo + " - $" + carritos[i].precio + "\n";
            totalActual += carritos[i].precio;
        }

        let numeroAQuitar = parseInt(prompt(
            "Tu carrito actual:\n" +
            detalleCarrito + "\n" +
            "Total actual: $" + totalActual + "\n\n" +
            "Ingresa el número del producto que deseas quitar:"
        ));

        
        if (numeroAQuitar >= 1 && numeroAQuitar <= carritos.length) {
        
            let indice = numeroAQuitar - 1;
            let eliminado = carritos[indice];
            carritos.splice(indice, 1);
            alert("Quitaste: " + eliminado.marca + " " + eliminado.modelo);
        } else {
            alert("Número inválido.");
        }

        if (carritos.length > 0) {
            quiereBorrar = prompt("¿Deseas quitar otro producto? (Si / No)").toLowerCase();
        } else {
            quiereBorrar = "no";
        }
    }

    if (carritos.length === 0) {
        alert("Tu carrito quedó vacío. ¡Gracias por visitar!");
    } else {
        let resumenFinal = "";
        let totalGastado = 0;

        for (const carrito of carritos) {
            resumenFinal += "- " + carrito.marca + " " + carrito.modelo + " (" + carrito.almacenamiento + "): $" + carrito.precio + "\n";
            totalGastado += carrito.precio;
        }

        alert(
            "¡Compra finalizada!\n\n" +
            "Productos llevados:\n" +
            resumenFinal + "\n" +
            "Total a pagar: $" + totalGastado
        );
    }
}