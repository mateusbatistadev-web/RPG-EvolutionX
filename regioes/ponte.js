
const prompt = require("prompt-sync")();

function ponte(heroi) {
    console.log("\n====================================");
    console.log("          PONTE DE MAGANO");
    console.log("====================================");

    console.log(String.raw`
       MONTANHA            FAROL
          /\                 |
         /  \                |
        /____\              [*]
           |                 |
    _______|                 |_______
           \               /
            \_____________/

           PONTE DESTRUIDA
    `);

    console.log("\n[PONTE] A ponte para o farol caiu.");
    console.log("Do outro lado está o farol apagado.");

    if (!Array.isArray(heroi.inventario)) {
        heroi.inventario = [];
    }

    const temCorda = heroi.inventario.includes("corda");

    if (temCorda) {
        console.log("\nVocê possui uma corda!");
        console.log("1 - Amarrar a corda e atravessar");
    } else {
        console.log("\nVocê não possui uma corda.");
        console.log("Precisa encontrar uma para atravessar.");
    }

    console.log("2 - Voltar para a floresta");

    const escolha = prompt("> ");

    if (escolha === "1") {
        if (temCorda) {
            console.log("\nVocê amarrou a corda!");
            console.log("Com cuidado, atravessou a ponte.");
            console.log("O farol está logo à frente!");

            return "farol";
        }

        console.log("\nVocê não consegue atravessar sem uma corda.");
        return "ponte";
    }

    if (escolha === "2") {
        console.log("\nVocê retorna para a floresta.");
        return "floresta";
    }

    console.log("\nOpção inválida. Tente novamente.");
    return "ponte";
}

module.exports = ponte;
