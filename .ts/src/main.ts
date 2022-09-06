import { Animais } from "./animais";
import { Cachorro } from "./cachorro";
import { Cavalo } from "./cavalo";
import { Preguiça } from "./preguiça";

let dog = new Cachorro("Jemeremias", 11)
console.log(`Cachorro\nNome: ${dog.nome}\nIdade: ${dog.idade} anos`)
dog.som()
dog.move()

let horse = new Cavalo("Pé de Pano", 5)
console.log(`\nCavalo\nNome: ${horse.nome}\nIdade: ${horse.idade} anos`)
horse.som()
horse.move()

let preguiça = new Preguiça("Cid", 35)
console.log(`\nPreguiça\nNome: ${preguiça.nome}\nIdade: ${preguiça.idade} anos`)
preguiça.som()
preguiça.move()