import { memoize } from './memoize';

export const fibonacci = memoize((n: number): number => {
  if (n <= 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
});
