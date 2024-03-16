import { memoize } from './memoize';

export const fibonacci = memoize((n: number): number => {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
});

// export const fibonacci: (n: number) => number = memoize((n: number) => {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// });
