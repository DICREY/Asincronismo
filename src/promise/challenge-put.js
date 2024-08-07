import fetch from "node-fetch"
const API = "https://api.escuelajs.co/api/v1"

function putData(urlApi, update){
    const response = fetch(urlApi,{
        method: "PUT",
        mode: "cors",
        credentials: "same-origins",
        headers:{ 
            "Content-Type":"application/json"
        },
        body: JSON.stringify(update)
    })
    return response
}

const updateData = {
    "title": "Cristian",
    "price": 7777
}

putData(`${API}/products/136`,updateData)
    .then(response => response.json())
    .then(updateData => console.log(updateData))
    .catch(err => console.log(err))
    .finally(() => console.log("Finally"))