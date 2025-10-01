const args = process.argv.slice(2);

async function obtenerProductos(param) {
    await fetch(`https://fakestoreapi.com/${param}`)
        .then( response => {
            return response.json()
        }) 
        .then( data => console.log(data))
        .catch(e => console.log(e))
}

async function obtenerProducto() {
    await fetch(`https://fakestoreapi.com/products`)
        .then( response => {
            return response.json()
        }) 
        .then( data => console.log(data))
        .catch(e => console.log(e))
}

async function añadirProducto(t, p, c) {
    await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            "title": t,
            "price": p,
            "category": c
        })
    }).then((response) => {
        console.log(response); 
        return response.json()})
      .then( data => console.log(data))
      .catch(e => console.log(e))
        
}

async function borrarProducto(param) {
    await fetch(`https://fakestoreapi.com/${param}`, {method: "DELETE"})
        .then((response) => {console.log(response)})
        // .then(data => console.log(data))
        .catch(e => console.log(e))
}

try {
    switch(args[0].toLowerCase()){
    case "get":
        if (args[1] == "products") obtenerProductos()
            else if (args[1].includes("products/")) obtenerProducto(args[1])
        break
    case "post":
        if (args.length == 4) añadirProducto(args[1], args[2], args[3]);
            else console.log("Faltan argumentos")
        break
    case "delete":
        borrarProducto(args[1]);
        break
    default: console.log("Metodo no reconocido")
    }
} catch (e) {
    console.log(e)
}