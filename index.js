const args = process.argv.slice(2);

async function getProduct(param) {
    await fetch(`https://fakestoreapi.com/${param}`)
        .then( response => {
            return response.json()
        }) 
        .then( data => console.log(data))
        .catch(e => console.log(e))
}

async function addProduct(t, p, c) {
    await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: 
        {
            "title": t,
            "price": p,
            "category": c
        }
    }).then(() => console.log("POST Request successful"))
      .catch(e => console.log(e))
        
}

async function deleteProduct(param) {
    await fetch(`https://fakestoreapi.com/${param}`, {method: "DELETE"})
        .then(() => console.log("DELETE Request successful"))
        .catch(e => console.log(e))
}

try {
    switch(args[0].toLowerCase()){
    case "get":
        getProduct(args[1]);
        break
    case "post":
        addProduct(args[2], args[3], args[4]);
        break
    case "delete":
        deleteProduct(args[1]);
        break
    }   
} catch (e) {
    console.log(e)
}