// const prompt = require("prompt-sync")()
const prompt = require("prompt-sync")();
const aranha = require("../inimigos/aranha");
const sorte = require("../sistemas/sorte");

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

    if (sorte(0.4)) {
        // heroi.veneno = heroi.veneno + aranha.veneno;
        const duracao = aranha.veneno[Math.floor(Math.random() * aranha.veneno.length)];
        heroi.veneno = (heroi.veneno || 0) + duracao; 
        console.log("Uma aranha te morde! Você está envenenado por " + heroi.veneno + " passos.");
    } else {
        console.log("Era só o vento.");
    }
    console.log("1 - seguir para a ponte   2 - voltar para a vila");
    let escolha = prompt("> ");
    if (escolha === "1") {
        return "ponte";
    } else if (escolha === "2") {
        return "vila";
    }
    return "floresta"
}

module.exports = floresta;
