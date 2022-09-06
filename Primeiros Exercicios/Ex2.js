const prompt = require("prompt-sync")()

    let idade = Number(prompt("Digite a idade: "))
    let ano = 2022
    if (idade <= 0)
        console.log("Idade inválida")
    else
        console.log(`Ano de nascimento: ${ano - idade}`)