import { Request, Response } from 'express';
import { generateFibonacci } from '../services/fibService';

export const fetchFibonacci = async (req: Request, res: Response) => {
  try {
    const inputValue: number = req.body.value;

    if (!Number.isInteger(inputValue) || inputValue < 0) {
      return res.status(400).json({
        error: 'Invalid input value. Please provide a non-negative integer.',
      });
    }

    const startTime = res.locals.startTime;

    const generatedNumber = generateFibonacci(inputValue);

    const endTime = process.hrtime(startTime);

    const executionTimeInMs = endTime[0] * 1000 + endTime[1] / 1000000;

    return res.json({
      result: generatedNumber,
      executionTime: executionTimeInMs,
    });
  } catch (error) {
    console.log('Error in controller' + error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
