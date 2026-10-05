/*Exercício 2, do...while
Crie novamente a calculadora, agora utilizando do...while.

O programa deverá:

Solicitar dois números.
Realizar as quatro operações básicas.
Apresentar os resultados.
Perguntar se o usuário deseja realizar outro cálculo.
Repetir enquanto a resposta for s.*/

const readline = require('node:readline/promises');
const {stdin: input, stdout: output } = require("node:process");

async function main() {
    const rl = readline.createInterface({ input, output });

    let continuar;

    do {
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

        continuar = await rl.question("\nDeseja realizar outra operação? (s/n): ");
    } while (continuar.toLowerCase() === 's');

    rl.close();
}


main();