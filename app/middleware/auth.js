module.exports = function(options, app) {
  return async (ctx, next) => {

    ctx.state.csrf = ctx.csrf;

    await next();
  }
}