const prompt = require("prompt-sync")()

let contP = 0
let contI = 0

for (let i = 1; i>0 && i<=10; i++) {

    if (i % 2 == 0) {
        contP++
    } else {
        contI++
    }
}
console.log(`Quantidade de números pares: ${contP}`)
console.log(`Quantidade de números ímpares: ${contI}`)