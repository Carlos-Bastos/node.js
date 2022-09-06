const prompt = require("prompt-sync")()

let cont = 0
let num = 0
do {
    num = Number(prompt("Digite qualquer número: "))
    cont = cont + num
} while (num !== 0)
console.log(`A soma de todos os números digitados é: ${cont}`)