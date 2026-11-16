
class Producto {
    static id = 0
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

const carritos = []
let comprar = false;

while(!comprar){
    let opcionProductos = parseInt(prompt("Que productos deseas comprar\n" +
        "1. celular\n" +
        "2. tablet\n" +
        "3. notebook\n" +
        "4. playstation"
    ));

    switch(opcionProductos){
        case 1:
            carritos.push(celular1);
            break;
        case 2:
            carritos.push(tablet1);
            break;
        case 3:
            carritos.push(notebook1);
            break;
        case 4:
            carritos.push(playstation1);
            break;
        default:
            alert("Opcion Incorrecta");
            break;
    }

    let seguirComprando = prompt("Deseas comprar otro producto ? Si/No").toLowerCase();
    if(seguirComprando == "si"){
       comprar = false;
    }else{
        comprar = true;
    }
}

console.log(carritos)
