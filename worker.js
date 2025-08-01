import { serveStatic } from 'wrangler';

export default {
  async fetch(request, env, ctx) {
    return serveStatic(request);
  },
};
