import { fibonacci } from '../utils/fibonacci';

export const generateFibonacci = (inputValue: number) => {
  try {
    const generatedFib: number = fibonacci(inputValue);

    return generatedFib;
  } catch (error) {
    console.log('Error in service' + error);
    throw error;
  }
};
