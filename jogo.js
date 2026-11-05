// A trilha do farol · jogo de demonstração do Jovem Tech (E15)
// Tudo aqui usa o que vocês já viram: variáveis, prompt, if / else, while e vetor.
// Só uma coisa é nova: Math.random(), que sorteia um número entre 0 e 1.
const prompt = require("prompt-sync")();
const heroi = require("./heroi");
const vila = require("./regioes/vila");
const floresta =require ("./regioes/floresta");
const poco = require("./regioes/poco");
const ponte = require("./regioes/ponte");
const farol = require("./regioes/farol");
// ===== CONTROLE DO JOGO =====
let local = "vila";    // onde o herói está agora

// ===== HERÓI =====
heroi.nome = prompt("Qual é o nome do seu herói? ");

console.log("");
console.log(heroi.nome + ", o farol da costa apagou. Alguém precisa chegar lá antes do anoitecer.");

while (local !== "fim") {
  // a cada passo, o veneno tira 1 de vida
  if (heroi.veneno > 0) {
    heroi.vida = heroi.vida - 1;
    heroi.veneno = heroi.veneno - 1;
    console.log("O veneno arde. Vida: " + heroi.vida);
  }
  if (heroi.vida <= 0) {
    console.log("Você caiu no caminho. Fim de jogo.");
    local = "fim"
  } 
   if (local === "vila") {
    local = vila(heroi)

  } else if (local === "floresta") {
    local = floresta(heroi)

  } else if (local === "poco") {
    local = poco(heroi)

  } else if (local === "ponte") {
    local = ponte(heroi)

  } else if (local === "farol") {
    local = farol(heroi)
    local = "fim"
  }
}