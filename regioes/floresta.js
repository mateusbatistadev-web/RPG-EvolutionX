const prompt = require("prompt-sync")();

function floresta(heroi) {
  console.log("\n============== FLORESTA MAGANA ==============");
  console.log("       &&&                 &&&");
  console.log("      &&&&&      ||       &&&&&");
  console.log("     &&&&&&&     ||      &&&&&&&");
  console.log("       ||        ||        ||");
  console.log("  _____||________||________||______");
  console.log("       //  //  CAMINHO  \\\\  \\\\");
  console.log("  ~~~~~~~~ raízes e névoa ~~~~~~~~~~");
  console.log("\n[ FLORESTA ] O vento sussurra entre as árvores. À frente está o Portal Central.");

  if (!heroi.inventario.includes("Pedra Portal")) {
    console.log("O portal está apagado. Você precisa da Pedra Portal.");
    return "vila";
  }

  console.log("A Pedra Portal começa a brilhar em sua mão.");
  console.log("1 - Usar a Pedra Portal e atravessar para o Deserto");
  console.log("2 - Voltar para a Vila");
  const escolha = prompt("> ");
  if (escolha === "1") {
    console.log("\n      .-----------------------.");
    console.log("     /   PORTAL CENTRAL       \\");
    console.log("    |       (((  )))           |");
    console.log("     \\_______________________/");
    console.log("A passagem se abre. Uma onda de calor vem do outro lado...");
    return "deserto";
  }
  return "vila";
}

module.exports = floresta;
