import { Animais } from "./animais";

export class Cavalo implements Animais {

    nome: string;
    idade: number;

    constructor(
        nome: string,
        idade: number
    ){
        this.nome = nome
        this.idade = idade
    }

    som() {
        console.log("Está Relinchando")
    }

    move() {
        console.log("Está Trotando")
    }

}