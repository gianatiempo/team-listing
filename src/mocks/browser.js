import { setupWorker } from 'msw';
import userhandler from './userhandler';
import teamHandler from './teamHandler';

export const worker = setupWorker(...userhandler, ...teamHandler);
