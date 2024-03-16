import { fibonacci } from '../utils/fibonacci';
import { performance } from 'perf_hooks';
import { memoize } from '../utils/memoize';

describe('Función Memoize', () => {
  test('La función Fibonacci memoizada almacena los resultados correctamente', () => {
    const memoizedFibonacci = fibonacci;

    // Llamamos a la función para cada argumento y guardamos los resultados esperados
    const result5 = memoizedFibonacci(5);
    const result7 = memoizedFibonacci(7);
    const result10 = memoizedFibonacci(10);

    // Llamamos a la función nuevamente con los mismos argumentos y nos aseguramos de que los resultados coincidan
    expect(memoizedFibonacci(5)).toBe(result5);
    expect(memoizedFibonacci(7)).toBe(result7);
    expect(memoizedFibonacci(10)).toBe(result10);
  });

  test('La función Fibonacci memoizada es más eficiente con el almacenamiento en caché', () => {
    const memoizedFibonacci = fibonacci;

    // Medimos el tiempo de ejecución sin caché
    const startWithoutMemoization = performance.now();
    memoizedFibonacci(1000);
    const endWithoutMemoization = performance.now();
    const timeWithoutMemoization =
      endWithoutMemoization - startWithoutMemoization;
    console.log('Tiempo sin memoización:', timeWithoutMemoization, 'ms');

    // Medimos el tiempo de ejecución con caché
    const startWithMemoization = performance.now();
    memoizedFibonacci(1000);
    const endWithMemoization = performance.now();
    const timeWithMemoization = endWithMemoization - startWithMemoization;
    console.log('Tiempo con memoización:', timeWithMemoization, 'ms');

    // Nos aseguramos de que el tiempo de ejecución con caché sea menor que sin caché
    expect(timeWithMemoization).toBeLessThan(timeWithoutMemoization);
  });

  test('La función memoizada devuelve el mismo resultado para los mismos argumentos', () => {
    const pureFunction = jest.fn((n: number) => n * 2);
    const memoizedFunction = memoize(pureFunction);

    // Llamamos a la función varias veces con los mismos argumentos
    const result1 = memoizedFunction(5);
    const result2 = memoizedFunction(5);
    const result3 = memoizedFunction(5);

    // Nos aseguramos de que los resultados de las llamadas sean iguales
    expect(result1).toBe(result2);
    expect(result2).toBe(result3);

    // Nos aseguramos de que la función se haya llamado solo una vez
    expect(pureFunction).toHaveBeenCalledTimes(1);
  });

  test('La función Fibonacci memoizada maneja las excepciones correctamente', () => {
    const throwingFn = jest.fn(() => {
      throw new Error('Error de prueba');
    });
    const memoizedThrowingFn = memoize(throwingFn);

    // Llamamos a la función que arroja una excepción
    expect(() => memoizedThrowingFn(5)).toThrow('Error de prueba');

    // Nos aseguramos de que la excepción se maneje y el resultado no se almacene en caché
    expect(() => memoizedThrowingFn(5)).toThrow('Error de prueba');
    expect(throwingFn).toHaveBeenCalledTimes(2); // Nos aseguramos de que la función se haya llamado dos veces
  });

  test('La función Fibonacci memoizada maneja correctamente los casos límite', () => {
    const memoizedFibonacci = fibonacci;

    // Comprobamos los valores límite para n
    expect(memoizedFibonacci(0)).toBe(0);
    expect(memoizedFibonacci(1)).toBe(1);
  });
});
