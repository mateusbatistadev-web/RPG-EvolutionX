const prompt = require("prompt-sync")();

function castelo(heroi) {
  console.log("\n============== CASTELO DO REI DRAGÃO ==============");
  console.log("                 |\\             /|");
  console.log("                 | \\___________/ |");
  console.log("                /                 \\");
  console.log("               /  _   _   _   _    \\");
  console.log("              |  |_| |_| |_| |_|    |");
  console.log("              |       ______        |");
  console.log("          ____|______|      |________|____");
  console.log("         /________________________________\\");
  console.log("\n[CASTELO] A Tocha Magana ilumina as muralhas. O castelo parece respirar.");
  console.log("Ao lado da entrada, um poço antigo guarda água cristalina.");
  console.log("1 - Aproximar-se do poço");
  console.log("2 - Entrar diretamente no castelo");
  const escolha = prompt("> ");
  if (escolha === "1") return "poco";
  return "chefe";
}

module.exports = castelo;
