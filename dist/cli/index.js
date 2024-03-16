"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const colors_1 = __importDefault(require("colors"));
const factorial_1 = require("../utils/factorial");
function measureTime(fn) {
    const startTime = process.hrtime.bigint();
    fn();
    const endTime = process.hrtime.bigint();
    return Number(endTime - startTime) / 1e6;
}
function askForNumber() {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve, reject) => {
        rl.question('Ingrese un número para calcular el factorial (o "CTRL + C" para salir): ', (answer) => {
            rl.close();
            if (answer.toLowerCase() === 'exit') {
                console.log(colors_1.default.yellow('Cerrando el programa.'));
                process.exit(0);
            }
            else {
                const num = parseInt(answer);
                if (isNaN(num)) {
                    console.log(colors_1.default.red('Error: Número incorrecto ingresado.'));
                    reject(new Error('Número incorrecto ingresado'));
                }
                else {
                    resolve(num);
                }
            }
        });
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const num = yield askForNumber();
            console.log(colors_1.default.yellow(`Calculando el factorial de ${num}...`));
            const result = (0, factorial_1.factorial)(num);
            console.log(colors_1.default.green(`El factorial de ${num} es: ${result}`));
            const timeTaken = measureTime(() => { });
            console.log(colors_1.default.blue(`Tiempo de ejecución: ${timeTaken.toFixed(4)} ms`));
        }
        catch (error) {
            console.error(colors_1.default.red(`Se produjo un error: ${error.message}`));
        }
        finally {
            run();
        }
    });
}
run();
//# sourceMappingURL=index.js.map