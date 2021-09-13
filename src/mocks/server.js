import { setupServer } from 'msw/node';
import userhandler from './userhandler';
import teamHandler from './teamHandler';

export const server = setupServer(...userhandler, ...teamHandler);
