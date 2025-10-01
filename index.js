const args = process.argv.slice(2);

async function obtenerProductos(param) {
    await fetch(`https://fakestoreapi.com/${param}`)
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
        obtenerProductos(args[1]);
        break
    case "post":
        añadirProducto(args[2], args[3], args[4]);
        break
    case "delete":
        borrarProducto(args[1]);
        break
    }   
} catch (e) {
    console.log(e)
}