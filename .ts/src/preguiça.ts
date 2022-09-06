import { Animais } from "./animais";

export class Preguiça implements Animais{

    nome: string;
    idade: number;

    constructor(
        nome: string,
        idade: number
    ){
        this.nome = nome
        this.idade = idade
    }

    som(){
        console.log("Emitindo Sons de alta-frequência pelas narinas")
    }

    move() {
        console.log("Está Subindo Árvore")
    }

}