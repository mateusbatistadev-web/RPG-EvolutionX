const prompt = require("prompt-sync")();
// Só funções do veneno. A aranha (em outro arquivo) chama envenenar

const DANO_VENENO = 5; // vida perdida por rodada

function envenenar(alvo) { // a aranha chama esta função
  if (alvo.envenenado) return; // já está envenenado, não repete a mensagem
  alvo.envenenado = true;
  console.log("☠️ " + (alvo.nome || "Alvo") + " foi envenenado!");
}

function aplicarVeneno(heroi) { // chamar 1x por rodada; false se o herói morreu
  if (heroi.envenenado) {
    heroi.vida -= DANO_VENENO;
    console.log("O veneno arde. Vida: " + heroi.vida);
  }
  return heroi.vida > 0;
}

function curarVeneno(heroi) { // poço, poção etc
  heroi.envenenado = false;
  console.log("✨ " + (heroi.nome || "Alvo") + " foi curado do veneno.");
}

module.exports = { envenenar, aplicarVeneno, curarVeneno };