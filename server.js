const koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new koa();
  const router = new Router();

  server.use(async (ctx, next) => {
    // const {path, method} = ctx;
    // next 调用下个中间件
    // ctx.body = `<span>Koa Render ${method} ${path}</span>`;
    await next()
  });

  server.use(router.routes());

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
  server.listen(3000, () => {
    console.log('koa server listening on 3000');
  });
});
