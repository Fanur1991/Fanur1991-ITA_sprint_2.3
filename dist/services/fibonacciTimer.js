"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacciTimer = void 0;
const fibonacciTimer = (_req, res, next) => {
    const startTime = process.hrtime();
    res.locals.startTime = startTime;
    next();
};
exports.fibonacciTimer = fibonacciTimer;
//# sourceMappingURL=fibonacciTimer.js.map