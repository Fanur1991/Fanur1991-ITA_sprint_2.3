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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchFibonacci = void 0;
const fibService_1 = require("../services/fibService");
const fetchFibonacci = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inputValue = req.body.value;
        if (!Number.isInteger(inputValue) || inputValue < 0) {
            return res.status(400).json({
                error: 'Invalid input value. Please provide a non-negative integer.',
            });
        }
        const startTime = res.locals.startTime;
        const generatedNumber = (0, fibService_1.generateFibonacci)(inputValue);
        const endTime = process.hrtime(startTime);
        const executionTimeInMs = endTime[0] * 1000 + endTime[1] / 1000000;
        return res.json({
            result: generatedNumber,
            executionTime: executionTimeInMs,
        });
    }
    catch (error) {
        console.log('Error in controller' + error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.fetchFibonacci = fetchFibonacci;
//# sourceMappingURL=fibControllers.js.map