"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = void 0;
const memoize_1 = require("./memoize");
exports.factorial = (0, memoize_1.memoize)((n) => {
    if (n === 0 || n === 1)
        return 1;
    return n * (0, exports.factorial)(n - 1);
});
// export const factorial: (n: number) => number = memoize((n: number) => {
//   if (n === 0 || n === 1) return 1;
//   return n * factorial(n - 1);
// });
//# sourceMappingURL=factorial.js.map