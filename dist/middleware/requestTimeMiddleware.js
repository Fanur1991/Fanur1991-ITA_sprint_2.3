"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestTimeMiddleware = void 0;
const requestTimeMiddleware = (req, res, next) => {
    const startTime = process.hrtime();
    res.on('finish', () => {
        const elapsed = process.hrtime(startTime);
        const elapsedTimeInMilliseconds = elapsed[0] * 1000 + elapsed[1] / 1000000;
        res.locals.requestTime = elapsedTimeInMilliseconds;
    });
    next();
};
exports.requestTimeMiddleware = requestTimeMiddleware;
//# sourceMappingURL=requestTimeMiddleware.js.map