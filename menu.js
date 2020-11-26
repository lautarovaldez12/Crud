const lista = require('./lista.js')
const process = require('process')
let opcion = process.argv[2]

switch (true) {
    case opcion == 1:
        console.log('Lista de productos: ')
        lista.lista(lista.leerJSON())
        break;
    case opcion == 2:
        let id = process.argv[3];
        let name = process.argv[4];
        let price = process.argv[5];
        
        if(lista.agregar(id,name,price)){
            console.log('Error al agregar producto')
        } else{
            console.log('Producto agregado correctamente')
        }
        break;
    case opcion == 3:
        let idPrice = process.argv[3];
        let newPrice = process.argv[4];
        
        if(lista.newPrice(idPrice,newPrice)){
            console.log('Error al cambiar el precio')
        }else{
            console.log('Precio cambiado correctamente')
        }
        break;
    case opcion == 4:
        console.log("A continuacion se muestran los productos con un precio mayor a 20 y menos a 100")
        lista.filtro()
        break;
    default:
        console.log('Opcion no disponible')
        break;
}
