const readline = require('node:readline/promises');
const {stdin: input, stdout: output } = require("node:process");

async function main() {
    const rl = readline.createInterface({ input, output });

    let continuar = true;

    while(continuar){
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
        
        const resposta = await rl.question("\nDeseja realizar outra operação? (s/n): ");
        if (resposta.toLowerCase() !== 's') {
            continuar = false;
        }
    }
    rl.close();
}

main();