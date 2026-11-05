const prompt = require("prompt-sync")();
const heroi = require("./heroi2.0");


const dragao = {
  nome: "Dragão Magano Sombrio",
  vida: 80,
  golpes: [10, 15, 20],
};

function combate(heroi, dragao) {
  let defendendo = false;
  let primeiroTurno = true;

  // Abertura da luta: só os nomes
  console.log(`\n${heroi.nome} VS ${dragao.nome}`);

  while (heroi.vida > 0 && dragao.vida > 0) {
    if (!primeiroTurno) {
      console.log(`\nVida do herói: ${heroi.vida} | Vida do dragão: ${dragao.vida}`);
    }
    console.log("1 - Atacar");
    console.log("2 - Defender");
    const escolha = prompt("Escolha: ");

    defendendo = false;

    // Turno do herói
    if (escolha === "1") {
      dragao.vida = Math.max(0, dragao.vida - heroi.dano);
      console.log(`${heroi.nome} causou ${heroi.dano} de dano. Vida do dragão: ${dragao.vida}`);

      if (dragao.vida === 0) {
        console.log(`${dragao.nome} foi derrotado!`);
      }
    } else if (escolha === "2") {
      defendendo = true;
      console.log(`${heroi.nome} se prepara para defender!`);
    } else {
      console.log("Opção inválida! Digite 1 ou 2.");
      continue; // volta ao menu sem o dragão atacar
    }
    // Turno do dragão
    const especial = Math.random() < 0.2; // 20% de chance de ativar o especial
    let dano;

    if (especial) {
      // Especial: dobro do maior dano e ignora a defesa
      dano = Math.max(...dragao.golpes) * 2;
      console.log(`${dragao.nome} usou o ESPECIAL!`);
      if (defendendo) {
        console.log("A defesa foi quebrada!");
      }
    } else {
      // Ataque normal: dano aleatório entre 10, 15 e 20
      const indice = Math.floor(Math.random() * dragao.golpes.length);
      dano = dragao.golpes[indice];

      if (defendendo) {
        dano = Math.floor(dano / 2); // defesa reduz o dano pela metade
        console.log("A defesa reduziu o dano pela metade!");
      }
    }

    heroi.vida = Math.max(0, heroi.vida - dano);
    console.log(`${dragao.nome} causou ${dano} de dano. Vida do herói: ${heroi.vida}`);

    primeiroTurno = false;
  }

  if (heroi.vida === 0) {
    console.log(`\n${heroi.nome} foi derrotado...`);
  }
}

combate(heroi, dragao);

console.log(`Fim de Jogo, ${heroi.nome} derrotou o ${dragao.nome}!`);

module.exports = dragao;