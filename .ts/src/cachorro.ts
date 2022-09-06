import { Animais } from "./animais";

export class Cachorro implements Animais{
    nome: string;
    idade: number;

    constructor(
        nome: string,
        idade: number
    ){
        this.nome = nome
        this.idade = idade
    }

    som(): void {
       console.log("Está Latindo")
    }

    move(): void {
        console.log("Está Correndo")
    }

}