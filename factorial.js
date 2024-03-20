function factorial(numero) {
    if (numero === 0) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 1; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

let numero = 5;
let resultado = factorial(numero);
console.log("El factorial de", numero, "es:", resultado);