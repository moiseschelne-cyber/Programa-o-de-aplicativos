/*Crie uma calculadora utilizando for.

O programa deverá:

Perguntar quantos cálculos o usuário deseja realizar.
Solicitar dois números para cada cálculo.
Realizar as quatro operações básicas.
Apresentar os resultados.
Repetir a quantidade de vezes informada pelo usuário.
Apresentar o número de cada cálculo realizado.*/

const readline = require('node:readline/promises');
const {stdin: input, stdout: output } = require("node:process");

async function main() {
    const rl = readline.createInterface({ input, output });

    const quantidadeCalculos = parseInt(await rl.question("Quantos cálculos você deseja realizar? "));

    for (let i = 1; i <= quantidadeCalculos; i++) {
        console.log(`\nCálculo ${i}:`);
        const num1 = parseFloat(await rl.question("Digite o primeiro número: "));
        const num2 = parseFloat(await rl.question("Digite o segundo número: "));

        const soma = num1 + num2;
        const subtracao = num1 - num2;
        const multiplicacao = num1 * num2;

        console.log(`\nSoma: ${soma}`);
        console.log(`Subtração: ${subtracao}`);
        console.log(`Multiplicação: ${multiplicacao}`);

        if (num2 !== 0) {
            const divisao = num1 / num2;
            console.log(`Divisão: ${divisao}`);
        } else {
            console.log("Divisão: Não é possível dividir por zero.");
        }
    }

    rl.close();
}

main();