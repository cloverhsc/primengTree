import { handler } from './handler';
import { setupWorker } from 'msw';

export const worker = setupWorker(...handler);
