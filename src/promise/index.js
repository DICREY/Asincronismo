const promise = new Promise(function (resolve, reject) {
    resolve('hey!')
})

const cows = 99

const countCows = new Promise((resolve, reject) =>{
    if (cows > 10) {
        resolve(`we have ${cows} cows on the farm`)
    } else {
        reject('There is not cows on the farm')
    }
})

countCows.then((result) => {
    console.log(result)
}).catch((error) => {r
    console.log(error)
}).finally(() => {
    console.log('Finally')
})
