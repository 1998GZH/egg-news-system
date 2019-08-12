module.exports = function(options, app) {
  return async (ctx, next) => {
    let host = ctx.request.header.host;
    if (host === 'localhost:7001') {
      ctx.status = 403;
      ctx.message = "your ip had forbidden!";
    } else {
      await next();
    }
  }
}