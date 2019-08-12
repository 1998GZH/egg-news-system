'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const {ctx} = this;
    
    await ctx.render("login.ejs", {
      csrf: ctx.csrf
    });
  }

  async handleLogin() {
    const {ctx} = this;

    let {username, password} = ctx.request.body;
    if (username === 'admin' && password === 'admin') {
      // 设置过期时间,浏览器关闭清除, 也可以在config.default.js中进行配置
      // ctx.session.maxAge = 0;

      ctx.session.isLogin = true;
      ctx.session.userInfo = {
        username: 'admin',
        avatar: 'http://qn.wechat.guetweb.com/577309411e762b92.jpg'
      }
      ctx.redirect('/');
    } else { 
      ctx.body = "<h1>login failed!</h1>"
    }
  }
}

module.exports = LoginController;
