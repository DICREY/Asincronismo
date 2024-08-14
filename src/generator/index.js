function* gen() {
    yield 1
    yield 2
    yield 3
}
const g = gen()

// console.log(g.next().value)
// console.log(g.next().value)
// console.log(g.next().value)

function* itareble(array){
    for (let i of array){
        yield i
    }
}

const it = itareble(["Oscar","Cristian","David","Dicrey","Daniela","Vanessa","Danna"])

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)