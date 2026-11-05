const prompt = require("prompt-sync")();

function vila(heroi) {
  console.log("\n========================================");
  console.log("              MAGANO LANDIA");
  console.log("========================================");
  console.log("       /\\          /\\        /\\");
  console.log("      /  \\   __   /  \\  __  /  \\");
  console.log("     /____\\ |  | /____\\|  |/____\\");
  console.log("       ||   |__|   ||  |__|  ||");
  console.log("   ____||____________||________||____");
  console.log("  |  _   _     VILA DE MAGANO     _  |");
  console.log("  | |_| |_|  [casa]   [casa]   |_| |");
  console.log("  |_________________________________|");
  console.log("\n[VILA] As casas estão destruídas. A Aura Magana ainda paira sobre o lugar.");
  console.log("Um morador grita: 'Guerreiro, a Aranha Magana está escondida entre os escombros!'");



  console.log("\nA vila precisa de você, mas a origem da corrupção está além das montanhas.");
  console.log("1 - Seguir para a Floresta");
  console.log("2 - Examinar a vila novamente");
  const escolha = prompt("> ");
  if (escolha === "1") return "floresta";
  return "vila";
}

module.exports = vila;
