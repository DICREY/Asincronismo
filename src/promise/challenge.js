import fetch from 'node-fetch'
const API = "https://api.escuelajs.co/api/v1"

function fetchData(urlApi){
    return fetch(urlApi)
}

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products)
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(products => {
        console.log(products.title)
        return fetchData(`${API}/categories/${products.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name)
    })
    .catch(error => {
        console.error(error)
    })
    .finally(() => {
        console.log("Finally")
    })