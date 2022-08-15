class Juego {
    constructor(nombre, categoria, año, precio){
        this.n = nombre
        this.c = categoria
        this.a = año
        this.p =precio
    }
}

const juego1 = new Juego ("rainbow six siege", "shooter", 2016, 5000)

// Desestructuracion de objeto y Alias a sus propiedades //

const {n: nombre, c: categoria, a: año, p: precio} = juego1

console.log(nombre, categoria, año, precio)

// Clonacion de objetos con distinta reserva de memoria para cada uno //

const juego2 = structuredClone(juego1) 
const juego3 = structuredClone(juego1)
const juego4 = structuredClone(juego1)
const juego5 = structuredClone(juego1)

// Modificacion de solamente dos propiedades de los objetos sin modificar todo lo demas clonado del objeto 1 //

juego2.n = "call of dutty"
juego3.n = "socom 4"
juego4.n = "battlefield"
juego5.n = "killzone"

juego2.p = undefined
juego3.p = 4500
juego5.p = undefined

const juegos = [juego1,juego2,juego3,juego4,juego5]

// Operador Nullish utilizado en una propiedad indefinida de algunos objetos //

let contador = 0

juegos.forEach(precioJuegos =>{
    contador+= precioJuegos.p ??0
})

// Muestra del resultado mediante la consola //

console.log(contador)

console.table(juegos)

