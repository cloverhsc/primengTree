import { rest } from 'msw';
import { treeMockData } from './tree-mock-data';

export const handler = [
  rest.get('/api/tree', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(treeMockData));
  }),
];
