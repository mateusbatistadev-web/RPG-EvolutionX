// const combate = require("./sistemas/combate");
const combate = require("./combate");
console.log("Com aura:", combate(true));
console.log("Sem aura:", combate(false));

let comAura = 0;
let semAura = 0;

for (let i = 0; i < 1000; i++) {
    if (combate(true)) comAura++;
    if (combate(false)) semAura++;
}

console.log("Críticos com aura:", comAura);
console.log("Críticos sem aura:", semAura);