const prompt = require("prompt-sync")();
const heroi = require("./heroi");
const vila = require("./regioes/vila");
const floresta = require("./regioes/floresta");
const deserto = require("./regioes/deserto");
const castelo = require("./regioes/castelo");
const poco = require("./regioes/poco");
const combate = require("./sistemas/combate");

let local = "vila";
let jogando = true;

console.log("==============================================");
console.log("          RPG-EVOLUTION X: MAGANO LANDIA");
console.log("==============================================");
heroi.nome = prompt("Qual é o nome do seu guerreiro? ");
console.log("\n" + heroi.nome + ", o mundo está sendo corroído pela Aura Magana.");
console.log("Sua missão é encontrar o Rei Dragão e libertá-lo da maldição.");

while (jogando) {
  if (heroi.vida <= 0) {
    local = "fim";
  }

  if (local === "vila") {
    local = vila(heroi);
  } else if (local === "floresta") {
    local = floresta(heroi);
  } else if (local === "deserto") {
    local = deserto(heroi);
  } else if (local === "castelo") {
    local = castelo(heroi);
  } else if (local === "poco") {
    local = poco(heroi);
  } else if (local === "chefe") {
    console.log("\nO salão se ilumina em roxo. O Rei Dragão espera por você.");
    console.log("'Você não pode apagar aquilo que já consumiu este mundo!'");
    console.log("A Aura Magana explode e envenena seu corpo!");
    heroi.veneno = 3;

    const venceu = combate(heroi, {
      nome: "Rei Dragão Magano",
      descricao: "O antigo rei está corrompido. Sua aura envolve todo o salão.",
      vida: 38,
      ataque: 7,
      aura: true,
      envenena: true
    });

    if (venceu) {
      console.log("\nA armadura do Rei Dragão se parte. A consciência dele retorna.");
      console.log("Você absorve a Aura Magana para impedir que ela volte a corromper o mundo.");
      heroi.inventario.push("Aura Magana");
      console.log("\nUm portal se abre. Do outro lado, Magano Landia está restaurada.");
      console.log("As casas se reerguem, a floresta volta a florescer e o céu clareia.");
      console.log("Mas a Aura Magana agora vive dentro de você...");
      console.log("\nFINAL: O PESO DA AURA MAGANA");
      console.log("Herói: " + heroi.nome + " | Vida restante: " + heroi.vida);
    }
    jogando = false;
  } else if (local === "fim") {
    console.log("\nFIM DE JOGO. Magano Landia ainda aguarda um salvador.");
    jogando = false;
  }
}
