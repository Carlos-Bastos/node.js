const prompt = require("prompt-sync")()

console.log("Olá!")

let nome = prompt("Digite seu nome: ")

let idade = Number(prompt("Digite sua idade: "))

let altura = Number(prompt("Digite sua altura: "))

console.log("Bem vinde " + nome + "." + "\nSua idade: " + idade + "\nSua altura: " + altura)

console.log(`Bem vinde  ${nome} \nSua idade: ${idade} \nSua altura: ${altura}`)