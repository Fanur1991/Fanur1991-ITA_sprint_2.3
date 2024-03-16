// opcion 1
// export function memoize<T, R>(func: (arg: T) => R): (arg: T) => R {
//   const cache: Record<string, R> = {};
//   return (arg: T): R => {
//     const cacheKey = JSON.stringify(arg);
//     if (cache.hasOwnProperty(cacheKey)) {
//       return cache[cacheKey];
//     }

//     const result = func(arg);
//     cache[cacheKey] = result;
//     return result;
//   };
// }

// opcion 2
// type Func<T> = (arg: T) => any;

// export const memoize = <T = any>(fn: Func<T>) => {
//   const cache = new Map();
//   const cached = function (this: any, val: T) {
//     return cache.has(val)
//       ? cache.get(val)
//       : (cache.set(val, fn.call(this, val)), cache.get(val));
//   };
//   cached.cache = cache;
//   return cached;
// };

//opcion 3
// export const createCacheKeyFromArgs = (args: any[]) =>
//   args.reduce(
//     (cacheKey, arg) =>
//       (cacheKey += `_${
//         typeof arg === 'object' ? JSON.stringify(args) : `${arg}`
//       }_`),
//     ''
//   );

// export const memoize = <ARGS extends unknown[], RET>(fn: (...args: ARGS) => RET) => {
//   let count: number = 0;
//   const cache: Record<string, RET> = {};

//   return (...args: ARGS) => {
//     const cacheKey = createCacheKeyFromArgs(args);

//     if (cache[cacheKey]) {
//       console.log('There is this number in object', ++count);
//       return cache[cacheKey];
//     }

//     const asyncFn = fn.call(undefined, ...args);
//     cache[cacheKey] = asyncFn;
//     return asyncFn;
//   };
// };

// opcion 4
export function memoize(fn: (n: number) => number): (n: number) => number {
  const cache: { [key: number]: number } = {};
  return function (n: number): number {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}
