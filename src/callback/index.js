function sum(num1,num2){
    return num1 + num2
}

function res(num1,num2){
    return num1 - num2
}

function mul(num1,num2){
    return num1 * num2
}

function div(num1,num2){
    return num1 / num2
}

function calc(num1,num2,callback){
    return callback(num1,num2)
}

// console.log(calc( 12, 12, mul))

// setTimeout(() => {
//     console.log("Hello World")
// },5000)

function greting(name){
    console.log(`Hola ${name}`)
}
setTimeout(greting,2000,"cristian")