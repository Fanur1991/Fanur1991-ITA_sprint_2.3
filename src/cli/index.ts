import readline from 'readline';
import colors from 'colors';
import { factorial } from '../utils/factorial';

function measureTime(fn: () => void): number {
  const startTime = process.hrtime.bigint();
  fn();
  const endTime = process.hrtime.bigint();
  return Number(endTime - startTime) / 1e6;
}

function askForNumber(): Promise<number> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rl.question(
      'Ingrese un número para calcular el factorial (o "CTRL + C" para salir): ',
      (answer) => {
        rl.close();
        if (answer.toLowerCase() === 'exit') {
          console.log(colors.yellow('Cerrando el programa.'));
          process.exit(0);
        } else {
          const num = parseInt(answer);
          if (isNaN(num)) {
            console.log(colors.red('Error: Número incorrecto ingresado.'));
            reject(new Error('Número incorrecto ingresado'));
          } else {
            resolve(num);
          }
        }
      }
    );
  });
}

async function run() {
  try {
    const num = await askForNumber();

    console.log(colors.yellow(`Calculando el factorial de ${num}...`));
    const result = factorial(num);
    console.log(colors.green(`El factorial de ${num} es: ${result}`));

    const timeTaken = measureTime(() => {});

    console.log(colors.blue(`Tiempo de ejecución: ${timeTaken.toFixed(4)} ms`));
  } catch (error) {
    console.error(
      colors.red(`Se produjo un error: ${(error as Error).message}`)
    );
  } finally {
    run();
  }
}

run();
