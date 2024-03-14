export function memoize<T, R>(func: (arg: T) => R): (arg: T) => R {
  const cache: Record<string, R> = {};

  return (arg: T): R => {
    const cacheKey = JSON.stringify(arg);
    if (cache.hasOwnProperty(cacheKey)) {
      return cache[cacheKey];
    }

    const result = func(arg);
    cache[cacheKey] = result;
    return result;
  };
}
