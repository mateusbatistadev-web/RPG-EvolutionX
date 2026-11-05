const prompt = require("prompt-sync")();
const sorte = require("./sorte");

function combate(heroi, inimigo) {
  console.log("\n" + inimigo.nome + " apareceu!");
  console.log(inimigo.descricao);

  while (heroi.vida > 0 && inimigo.vida > 0) {
    console.log("\n------------------------------");
    console.log(heroi.nome + " | Vida: " + heroi.vida + "/" + heroi.vidaMaxima);
    console.log(inimigo.nome + " | Vida: " + inimigo.vida);
    console.log("1 - Atacar   2 - Defender");
    const escolha = prompt("> ");

    if (escolha === "1") {
      let dano = heroi.ataque;
      if (sorte(inimigo.aura ? 0.15 : 0.10)) {
        dano = dano * 2;
        console.log("Ataque crítico!");
      }
      inimigo.vida -= dano;
      console.log("Você causou " + dano + " de dano.");
    } else if (escolha === "2") {
      heroi.defesa = 3;
      console.log("Você se preparou para defender o próximo golpe.");
    } else {
      console.log("Escolha inválida. Você perdeu a oportunidade de agir.");
    }

    if (inimigo.vida > 0) {
      let danoInimigo = inimigo.ataque;
      if (sorte(inimigo.aura ? 0.30 : 0.15)) {
        danoInimigo *= 2;
        console.log("O inimigo acertou um golpe crítico!");
      }
      danoInimigo -= heroi.defesa;
      if (danoInimigo < 0) danoInimigo = 0;
      heroi.defesa = 0;
      heroi.vida -= danoInimigo;
      console.log(inimigo.nome + " causou " + danoInimigo + " de dano.");

      if (inimigo.envenena && sorte(0.35)) {
        heroi.veneno = 3;
        console.log("A Aura Magana contaminou você! O veneno durará 3 turnos.");
      }
      if (heroi.veneno > 0) {
        heroi.vida -= 1;
        heroi.veneno--;
        console.log("O veneno tira 1 ponto de vida. Restam " + heroi.veneno + " turnos.");
      }
    }
  }

  if (heroi.vida <= 0) {
    console.log("\nVocê caiu diante de " + inimigo.nome + ". Sua jornada terminou.");
    return false;
  }

  console.log("\nVocê derrotou " + inimigo.nome + "!");
  return true;
}

module.exports = combate;
