// heroi.js

const heroi = {
  nome: "",               
  vidaMaxima: 100,        
  vida: 100,              
  defesa: 15,             
  veneno: 0,              
  inventario: [],         
  

  mostrarStatus: function() {
    console.log(`\n=== STATUS DE ${this.nome.toUpperCase()} ===`);
    console.log(`Vida: ${this.vida} / ${this.vidaMaxima}`);
    console.log(`Defesa: ${this.defesa}`);
    console.log(`Veneno no corpo: ${this.veneno > 0 ? this.veneno : "Nenhum"}`);
    
    if (this.inventario.length > 0) {
      console.log(`Inventário: ${this.inventario.join(", ")}`);
    } else {
      console.log(`Inventário: Vazio`);
    }
    console.log(`=====================\n`);
  }
};

module.exports = heroi;