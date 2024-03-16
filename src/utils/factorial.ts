import { memoize } from './memoize';

export const factorial = memoize((n: number): number => {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
});

// export const factorial: (n: number) => number = memoize((n: number) => {
//   if (n === 0 || n === 1) return 1;
//   return n * factorial(n - 1);
// });
