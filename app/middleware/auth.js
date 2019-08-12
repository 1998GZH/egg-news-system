// middleware需要在config.default.js中进行配置
module.exports = function(options, app) {
  return async (ctx, next) => {

    ctx.state.csrf = ctx.csrf;

    await next();
  }
}