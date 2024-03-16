"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacci = void 0;
const memoize_1 = require("./memoize");
exports.fibonacci = (0, memoize_1.memoize)((n) => {
    if (n <= 1) {
        return n;
    }
    else {
        return (0, exports.fibonacci)(n - 1) + (0, exports.fibonacci)(n - 2);
    }
});
// export const fibonacci: (n: number) => number = memoize((n: number) => {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// });
//# sourceMappingURL=fibonacci.js.map