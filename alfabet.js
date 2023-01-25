const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function separador(objeto) {
    const clave = Object.keys(objeto).sort();
    const values = claves.map(clave => objeto[clave]);
    return { claves, values };
}

const keyjr = {};

let: clave;
let: values;

function meter() {
    rl.question("Ingresa una Key (o escribe 's' para salir) ", function(res) {
        clave = res;
        if (clave !== 's') {
            rl.question("Ingresa un valor  ", function(res) {
                valor = res;
                keyjr[clave] = valor;
                meter();
            });
        } else {
            const respuesta = separador(keyjr);
            console.log(respuesta);
            rl.close();
        }
    });
}


meter();