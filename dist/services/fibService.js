"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFibonacci = void 0;
const fibonacci_1 = require("../utils/fibonacci");
const generateFibonacci = (inputValue) => {
    try {
        const generatedFib = (0, fibonacci_1.fibonacci)(inputValue);
        return generatedFib;
    }
    catch (error) {
        console.log('Error in service' + error);
        throw error;
    }
};
exports.generateFibonacci = generateFibonacci;
//# sourceMappingURL=fibService.js.map