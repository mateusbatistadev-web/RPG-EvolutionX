const combate = require("../sistemas/combate");

function deserto(heroi) {
  console.log("\n============== DESERTO MAGANO ==============");
  console.log("             .        .");
  console.log("       _.-''` `''-._");
  console.log("   _.-'   AREIA      `-._");
  console.log(" _/  ~~~~~~~~  ~~~~~~~~  \\_");
  console.log("/__________________________\\");
  console.log("       ||       ||");
  console.log("\n[DESERTO] A ventania quase impede você de enxergar. Um Golem se ergue da areia!");

  const venceu = combate(heroi, {
    nome: "Golem Magano de Areia",
    descricao: "Um gigante de areia endurecida. Ao perder metade da vida, sua aura desperta.",
    vida: 24,
    ataque: 5,
    aura: true,
    envenena: false
  });
  if (!venceu) return "fim";

  if (!heroi.inventario.includes("Tocha Magana")) {
    heroi.inventario.push("Tocha Magana");
    console.log("\nUma estrutura antiga surge na areia. Sobre ela há uma tocha de fogo Magano.");
    console.log("Mesmo com a ventania, a chama não se apaga. Você pegou a Tocha Magana!");
  }
  console.log("\nA chama revela um portal coberto por uma névoa espessa.");
  console.log("Você atravessa o portal e segue a luz da tocha...");
  return "castelo";
}

module.exports = deserto;
