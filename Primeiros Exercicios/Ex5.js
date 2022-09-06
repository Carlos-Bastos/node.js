const prompt = require("prompt-sync")()

let menor = 0
let maior = 0
let idade = 0
while (idade < 100) {
    console.log(prompt("Digite sua idade: "))
    if (idade <= 21) {
        menor++
    }
    else if (idade >= 50) {
        maior++
    }
}
console.log(`Total de pessoas com menos de 21 anos: ${menor}`)
console.log(`Total de pessoas com mais de 50 anos: ${maior}`)