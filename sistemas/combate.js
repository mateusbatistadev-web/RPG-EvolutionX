const sorte = require("./sorte");

function verificarCritico(temAuraMagana) {
    let chanceCritico;

        if (temAuraMagana) {
                chanceCritico = 0.30;
                    } else {
                            chanceCritico = 0.15;
                                }

                                    return sorte(chanceCritico);
                                    }

                                    module.exports = verificarCritico; 