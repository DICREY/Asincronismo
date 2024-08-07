import fetch from "node-fetch"
const API = "https://api.escuelajs.co/api/v1"

function deleteData(urlApi){
    const response = fetch(urlApi,{
        method: "DELETE",
        mode: "cors",
        credentials: "same-origins",
        headers: {
            "Content-Type": "application/json"
        }
    })
    return response
}

const deleteId = 135

deleteData(`${API}/products/${deleteId}`)
    .then(() => console.log("Delete sucessful"))
    .catch(err => console.log(err))
    .finally(() => console.log("Finally"))