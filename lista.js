const { profileEnd } = require('console');
const fs = require('fs');
const object = require('./object');
const constructor = require('./object');
let lista= {
    bd : 'productos.json',
    leerJSON : function() {
        return JSON.parse(fs.readFileSync(this.bd))
        
    },
    lista : function(json) {
        
        json.forEach(function(recurso) {
            console.log("producto numero " + recurso.id + " nombre: " + recurso.name + " precio: " + recurso.price)    
        });
        
    },
    agregar : function(id, name, price) {
        let producto = new object(id, name, price)

        let listaP = lista.leerJSON()
        
        listaP.push(producto)
        
        
        fs.writeFileSync(this.bd, JSON.stringify(listaP), function(err){
            if (err) throw err;
            console.log('replaced!')
        })
        

    },
    filtro : function() {
        let productos = this.leerJSON().filter(producto => producto.price > 20 && producto.price < 100)
        
        return lista.lista(productos)
    },
    newPrice : function(id,price) {
        let productos = this.leerJSON()
        productos.map(function(producto){
            if(producto.id == id){
                producto.price = price;
        
            }
        
            
        
        })

        fs.writeFileSync(this.bd, JSON.stringify(productos), function(err){
            if (err) throw err;
            console.log('replaced!')
        })
        

    }


}

module.exports = lista;

