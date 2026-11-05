const prompt = require("prompt-sync")();
const heroi = require("../inimigos/heroi2.0");


const aranha = {
  nome: "Aranha Magana",
  vida: 40,
  veneno: [5, 10, 15],
  inventario: ["Pedra de Portal"],
};

function combate(heroi, aranha) {
  let defendendo = false;
  let primeiroTurno = true;

  // Abertura da luta: só os nomes
  console.log(`\n${heroi.nome} VS ${aranha.nome}`);

  while (heroi.vida > 0 && aranha.vida > 0) {
    if (!primeiroTurno) {
      console.log(`\nVida do herói: ${heroi.vida} | Vida da aranha: ${aranha.vida}`);
    }
    console.log("1 - Atacar");
    console.log("2 - Defender");
    const escolha = prompt("Escolha: ");

    defendendo = false;

    // Turno do herói
    if (escolha === "1") {
      aranha.vida = Math.max(0, aranha.vida - heroi.dano);
      console.log(`${heroi.nome} causou ${heroi.dano} de dano. Vida da aranha: ${aranha.vida}`);

      if (aranha.vida === 0) {
        console.log(`${aranha.nome} foi derrotada!`);
        // Loot: passa os itens da aranha para o herói
        aranha.inventario.forEach((item) => heroi.inventario.push(item));
        aranha.inventario = []; // evita entregar o loot duas vezes
        console.log(`${heroi.nome} recebeu: ${heroi.inventario.join(", ")}`);
        break;
      }
    } else if (escolha === "2") {
      defendendo = true;
      console.log(`${heroi.nome} se prepara para defender!`);
    } else {
      console.log("Opção inválida! Digite 1 ou 2.");
      continue; // volta ao menu sem a aranha atacar
    }

    // Turno da aranha
    const especial = Math.random() < 0.25; // 25% de chance de ativar o especial
    let dano;

    if (especial) {
      // Especial: dobro do maior dano e ignora a defesa
      dano = Math.max(...aranha.veneno) * 2;
      console.log(`${aranha.nome} usou o ESPECIAL!`);
      if (defendendo) {
        console.log("A defesa foi quebrada!");
      }
    } else {
      // Ataque normal: dano aleatório entre 5, 10 e 15
      const indice = Math.floor(Math.random() * aranha.veneno.length);
      dano = aranha.veneno[indice];

      if (defendendo) {
        dano = Math.floor(dano / 2); // defesa reduz o dano pela metade
        console.log("A defesa reduziu o dano pela metade!");
      }
    }

    heroi.vida = Math.max(0, heroi.vida - dano);
    console.log(`${aranha.nome} causou ${dano} de dano. Vida do herói: ${heroi.vida}`);

    primeiroTurno = false;
  }

  if (heroi.vida === 0) {
    console.log(`\n${heroi.nome} foi derrotado...`);
  }
}

combate(heroi, aranha);

console.log("Inventário do herói:", heroi.inventario);

module.exports = aranha;