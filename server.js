const koa = require('koa');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = new next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new koa();
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
});