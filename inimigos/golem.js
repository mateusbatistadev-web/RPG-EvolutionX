const prompt = require("prompt-sync")();
const heroi = require("./heroi2.0");


const golem = {
  nome: "Golem de Areia Magano",
  vida: 60,
  vidaMaxima: 60,
  golpes: [5, 10, 15],
  inventario: ["Tocha"],
};

function combate(heroi, golem) {
  let defendendo = false;
  let primeiroTurno = true;

  // Abertura da luta: só os nomes
  console.log(`\n${heroi.nome} VS ${golem.nome}`);

  while (heroi.vida > 0 && golem.vida > 0) {
    if (!primeiroTurno) {
      console.log(`\nVida do herói: ${heroi.vida} | Vida do golem: ${golem.vida}`);
    }
    console.log("1 - Atacar");
    console.log("2 - Defender");
    const escolha = prompt("Escolha: ");

    defendendo = false;

    // Turno do herói
    if (escolha === "1") {
      golem.vida = Math.max(0, golem.vida - heroi.dano);
      console.log(`${heroi.nome} causou ${heroi.dano} de dano. Vida do golem: ${golem.vida}`);

      if (golem.vida === 0) {
        console.log(`${golem.nome} foi derrotado!`);
        // Loot: passa os itens do golem para o herói
        golem.inventario.forEach((item) => heroi.inventario.push(item));
        golem.inventario = []; // evita entregar o loot duas vezes
        console.log(`${heroi.nome} recebeu: ${heroi.inventario.join(", ")}`);
        break;
      }
    } else if (escolha === "2") {
      defendendo = true;
      console.log(`${heroi.nome} se prepara para defender!`);
    } else {
      console.log("Opção inválida! Digite 1 ou 2.");
      continue; // volta ao menu sem o golem atacar
    }

    // Turno do golem
    // O especial só pode ativar depois que ele perdeu metade da vida
    const perdeuMetade = golem.vida <= golem.vidaMaxima / 2;
    const especial = perdeuMetade && Math.random() < 0.4; // 40% de chance
    let dano;

    if (especial) {
      // Especial: dobro do maior dano e ignora a defesa
      dano = Math.max(...golem.golpes) * 2;
      console.log(`${golem.nome} usou o ESPECIAL!`);
      if (defendendo) {
        console.log("A defesa foi quebrada!");
      }
    } else {
      // Ataque normal: dano aleatório entre 8, 12 e 16
      const indice = Math.floor(Math.random() * golem.golpes.length);
      dano = golem.golpes[indice];

      if (defendendo) {
        dano = Math.floor(dano / 2); // defesa reduz o dano pela metade
        console.log("A defesa reduziu o dano pela metade!");
      }
    }

    heroi.vida = Math.max(0, heroi.vida - dano);
    console.log(`${golem.nome} causou ${dano} de dano. Vida do herói: ${heroi.vida}`);

    primeiroTurno = false;
  }

  if (heroi.vida === 0) {
    console.log(`\n${heroi.nome} foi derrotado...`);
  }
}

combate(heroi, golem);

console.log("Inventário do herói:", heroi.inventario);

module.exports = golem;