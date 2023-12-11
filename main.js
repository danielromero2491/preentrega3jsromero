
//creamos la estructura de nuestros articulos mediante una funcion constructora

const Articulo = function(nombre,precio,stock){       
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

// creamos los articulos

let articulo1a = new Articulo( "remera lisa", 13000, 5)
let articulo1b = new Articulo( "remera negra", 28000, 5)
let articulo1c = new Articulo( "remera blanca", 23000, 5)
let articulo1d = new Articulo( "remera basica", 23000, 5)
let articulo1e = new Articulo( "remera estampada over", 48000, 3)
let articulo1f = new Articulo( "remera clasica", 35000, 5)
let articulo1g = new Articulo( "chaqueta", 28000, 1)
let articulo1h = new Articulo( "remera lisa basic", 32000, 5)
let articulo1i = new Articulo( "remera estampada", 48000, 10)
let articulo1j = new Articulo( "remera free", 15000, 8)
let articulo1k = new Articulo( "camisa corte", 38000, 5)
let articulo1l = new Articulo( "jean cargo", 28000, 5)
let articulo1m = new Articulo( "cargo negro", 28000, 15)
let articulo1n = new Articulo( "jean slim", 28000, 2)
let articulo1o = new Articulo( "jean regular", 28000, 5)
let articulo1p = new Articulo( "jean loose", 28000, 5)


//creacion de mi array con los articulos generados

let lista = [
    articulo1a,
    articulo1b,
    articulo1c,
    articulo1d,
    articulo1e,
    articulo1f,
    articulo1g,
    articulo1h,
    articulo1i,
    articulo1j,
    articulo1k,
    articulo1l,
    articulo1m,
    articulo1n,
    articulo1o,
    articulo1p
]

//localstorage
if(localStorage.getItem("articulo")){
    lista = JSON.parse(localStorage.getItem("articulo"))
}else{
    lista = lista
}


// tenemos nuestra funcion que se encarga de filtrar los articulos
function filtrarArticulo(){
    const body = document.querySelector("body")
    const input = document.getElementById("filtrarP").value
    const palabraClave = input.trim().toUpperCase()
    const resultado = lista.filter((articulo) => articulo.nombre.toUpperCase().includes(palabraClave))

    if(resultado.length > 0){

        const container = document.createElement("div")

        resultado.forEach( (Articulo) =>{
            const card = document.createElement("div")

        const nombre = document.createElement("h2")
        nombre.textContent = `articulo: ${Articulo.nombre}`
        card.appendChild(nombre)

        const precio = document.createElement("h3")
        precio.textContent =`precio: ${Articulo.precio}` 
        card.appendChild(precio)

        const stock = document.createElement("h3")
        stock.textContent = `disponibilidad: ${Articulo.stock}`
        card.appendChild(stock)

        container.appendChild(card)

        })

        body.appendChild(container)


    }else{
       alert("sin coincidencia") 
    }

}


//creacion de la funcion que permitira con un formulario cargar mas articulos
function agregarArticulo(){

    const form = document.createElement("form") 
    form.innerHTML=`
    <label for="nombre-input">Nombre:</label>
    <input id= "nombre-input" type="text" required>

    <label for="precio-input">Precio:</label>
    <input id= "precio-input" type="number" step="0.01" required>

    <label for="stock-input">Stock:</label>
    <input id= "stock-input" type="number" required>

    <button type="submit">Agregar</button>
    `

    form.addEventListener("submit", function (e){
        e.preventDefault();

        const nombreInput = document.getElementById("nombre-input").value.trim()
        const precioInput = parseFloat(document.getElementById("precio-input").value)
        const stockInput = parseInt(document.getElementById("stock-input").value)

        if(isNaN(precioInput) || isNaN(stockInput) || nombreInput === ""){
            alert("ingresa valores validos.")
            return
        }

        const articulo = new Articulo (nombreInput, precioInput, stockInput)

        if (lista.some( (elemento)=> elemento.nombre === articulo.nombre)){ 
            alert("articulo existente")
            return
        }

        lista.push(articulo)

        localStorage.setItem("articulo", JSON.stringify(lista))
        alert(`se agrego el articulo ${articulo.nombre} correctamente`)  


        const container =  document.createElement("div")
        
        lista.forEach((Articulo)=>{
            const card = document.createElement("div")

            const nombre = document.createElement("h2")
            nombre.textContent = `articulo: ${Articulo.nombre}`
            card.appendChild(nombre)
    
            const precio = document.createElement("h3")
            precio.textContent =`precio: ${Articulo.precio}` 
            card.appendChild(precio)
    
            const stock = document.createElement("h3")
            stock.textContent = `disponibilidad: ${Articulo.stock}`
            card.appendChild(stock)

        container.appendChild(card)
        })

        const body = document.querySelector("body")
        body.appendChild(container) 

        form.reset()  
    })

    const body = document.querySelector("body")
    body.appendChild(form)

}




// eventos para mis botones 
const filtrarBtn = document.getElementById("filtrar")
filtrarBtn.classList.add("button") /
filtrarBtn.addEventListener("click", filtrarArticulo)


const agregarBtn = document.getElementById("agregarArticulo")
agregarBtn.addEventListener("click",agregarArticulo)


