import { Router } from 'express';
import { fetchFibonacci } from '../controllers/fibControllers';
import { fibonacciTimer } from '../services/fibonacciTimer';

const router = Router();

router.post('/', fibonacciTimer, fetchFibonacci);

export default router;
