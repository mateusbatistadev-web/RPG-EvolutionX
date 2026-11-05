const heroi = {
  nome: "",
  vida: 50,
  vidaMaxima: 50,
  veneno: 0,
  defesa: 0,
  ataque: [5, 10, 15][Math.floor(Math.random() * 3)],
  inventario: []
};

module.exports = heroi;
