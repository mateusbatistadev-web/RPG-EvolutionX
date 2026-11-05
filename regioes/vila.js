// const prompt = require("prompt-sync")();

// function vila(heroi) {
//   console.log("\n========================================");
//   console.log("              MAGANO LANDIA");
//   console.log("========================================");
//   console.log("       /\\          /\\        /\\");
//   console.log("      /  \\   __   /  \\  __  /  \\");
//   console.log("     /____\\ |  | /____\\|  |/____\\");
//   console.log("       ||   |__|   ||  |__|  ||");
//   console.log("   ____||____________||________||____");
//   console.log("  |  _   _     VILA DE MAGANO     _  |");
//   console.log("  | |_| |_|  [casa]   [casa]   |_| |");
//   console.log("  |_________________________________|");
//   console.log("\n[VILA] As casas estão destruídas. A Aura Magana ainda paira sobre o lugar.");
//   console.log("Um morador grita: 'Guerreiro, a Aranha Magana está escondida entre os escombros!'");



//   console.log("\nA vila precisa de você, mas a origem da corrupção está além das montanhas.");
//   console.log("1 - Seguir para a Floresta");
//   console.log("2 - Examinar a vila novamente");
// //   const escolha = prompt("> ");
// //   if (escolha === "1") return "floresta";
// //   return "vila";
// // }
// const escolha = prompt("> ");

// if (escolha === "1") {
//     return "floresta";
// }

// if (escolha === "2") {
//     console.log("\nVocê examina os escombros da vila.");
//     console.log("Há marcas de uma batalha e sinais da Aranha Magana.");
//     return "vila";
// }

// // console.log("Opção inválida. Tente novamente.");
// // return "vila";
// // }
// console.log("Opção inválida. Tente novamente.");
// return "vila";
// }

// module.exports = vila;

const prompt = require("prompt-sync")();

function vila(heroi) {
    console.log("\n====================================");
    console.log("          MAGANO LANDIA");
    console.log("====================================");

    console.log(String.raw`
          /\         /\         /\
         /  \       /  \       /  \
        /____\     /____\     /____\
        | [] |     | [] |     | [] |
        |____|     |____|     |____|

              VILA DE MAGANO
    `);

    console.log("[VILA] As casas estão destruídas.");
    console.log("A Aura Magana ainda paira sobre o lugar.");
    console.log("Um morador grita:");
    console.log("'Guerreiro, a Aranha Magana está escondida entre os escombros!'");

    console.log("\nA vila precisa de você.");
    console.log("Mas a origem da corrupção está além das montanhas.");

    if (!Array.isArray(heroi.inventario)) {
        heroi.inventario = [];
    }

    console.log("\n1 - Seguir para a floresta");
    console.log("2 - Examinar a vila novamente");

    const escolha = prompt("> ");

    if (escolha === "1") {
        console.log("\nVocê segue em direção à floresta.");
        return "floresta";
    }

    if (escolha === "2") {
        console.log("\nVocê examina os escombros da vila.");
        console.log("Há marcas de uma batalha e sinais da Aranha Magana.");

        if (!heroi.inventario.includes("corda")) {
            heroi.inventario.push("corda");
            console.log("\nVocê encontrou uma CORDA!");
            console.log("A corda foi adicionada ao inventário.");
        } else {
            console.log("\nVocê já encontrou a corda neste local.");
        }

        console.log("\nAgora você pode seguir para a floresta.");
        return "vila";
    }

    console.log("\nOpção inválida. Tente novamente.");
    return "vila";
}

module.exports = vila;

