import { rest } from 'msw';
import { treeMockData, treeMockLazyData } from './tree-mock-data';

export const handler = [
  rest.get('/api/tree', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(treeMockData));
  }),
  rest.get('/api/lazy/tree', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(treeMockLazyData));
  }),
];
