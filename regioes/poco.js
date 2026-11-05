const prompt = require("prompt-sync")();

function poco(heroi) {
  console.log("\n================ POÇO ANTIGO ================");
  console.log("             ___________");
  console.log("            /_________/|");
  console.log("            |  POÇO   | |");
  console.log("            |~~~~~~~~~|/");
  console.log("             \\_______/");
  console.log("\n[POÇO] A água parece limpa, mas uma energia estranha vem de seu fundo.");
  console.log("1 - Beber a água (recupera até 8 pontos de vida)");
  console.log("2 - Não beber e seguir para o castelo");
  const escolha = prompt("> ");

  if (escolha === "1") {
    heroi.vida += 8;
    if (heroi.vida > heroi.vidaMaxima) heroi.vida = heroi.vidaMaxima;
    console.log("A água restaura suas forças. Vida: " + heroi.vida + "/" + heroi.vidaMaxima);
  } else {
    console.log("Você decide não arriscar e segue em frente.");
  }
  return "chefe";
}

module.exports = poco;
