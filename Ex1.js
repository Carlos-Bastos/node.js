const prompt = require("prompt-sync")()

let limite = 50
let multa = 4


let peso = Number(prompt("Digite o peso total dos tomates: "))

console.log(`Peso total: ${peso}Kg`)

if (peso > 50) {
    let sub = (peso - limite)
    let valor = (multa * sub)
    console.log(`Peso excedente: ${sub}Kg`)
    console.log(`Valor da multa: R$${valor}`)

}
else if (peso < 0) {
    console.log("Valor inválido")
} else {
    console.log("Dentro do peso limite estabelecido")
}