"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
function memoize(func) {
    const cache = {};
    return (arg) => {
        const cacheKey = JSON.stringify(arg);
        if (cache.hasOwnProperty(cacheKey)) {
            return cache[cacheKey];
        }
        const result = func(arg);
        cache[cacheKey] = result;
        return result;
    };
}
exports.memoize = memoize;
//# sourceMappingURL=memoize.js.map