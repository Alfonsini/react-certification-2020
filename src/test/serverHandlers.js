import { rest } from 'msw';
import * as search from './search';

const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    // const query = req.url.searchParams;
    // const part = query.get('part');
    // const maxResults = query.get('maxResults');
    // const order = query.get('order');
    // const q = query.get('q');
    // const key = query.get('key');

    return res(ctx.status(200), ctx.json(search.search()));
  }),
];

export { handlers };
