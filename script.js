const productosJson = document.getElementById("productosJson")

fetch('./json/productos.json')
.then(response => response.json() )
.then(cardsDom =>{
    cardsDom.forEach((product, index) => {
        productosJson.innerHTML += `
        
        <div class="card border-primary mb-3" id= "productos${index}"  style="max-width: 20rem;">
        <img src= "./img/${product.imagen}"
        <div class="card-body">
        <h4 class="card-title"> ${product.nombre}</h4>
        <p class="card-text"> Stock: ${product.stock}</p>
        <p class="card-text"> Talle: ${product.talle}</p>
        <p class="card-text"> Precio: $${product.precio}</p>
    </div>
    </div>
        `
    })
}) 