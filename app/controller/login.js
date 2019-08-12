'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const {ctx} = this;
    await ctx.render("login.ejs", {
      csrf: ctx.csrf
    })
  }

  async handleLogin() {
    const {ctx} = this;

    let {username, password} = ctx.request.body;
    if (username === 'admin' && password === 'admin') {
      ctx.redirect('/');
    } else {
      ctx.body = "<h1>login failed!</h1>"
    }
  }
}

module.exports = LoginController;
