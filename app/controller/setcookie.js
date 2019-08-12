'use strict';

const Controller = require('egg').Controller;

class SetcookieController extends Controller {
  async setCookie() {
    this.ctx.cookies.set('name', "guozhenghong", {
      // maxAge: 1000*3,
      signed: true,
      encrypt: true
    });
    // 不encrypt的cookie不可以设置中文value
    this.ctx.body = "set cookie ok";
  }

  async deleteCookie() {
    this.ctx.cookies.set('name', null);
    this.ctx.body = "delete cookie ok";
  }

  async getCookie() {
    let cookie = this.ctx.cookies.get('name', {
      encrypt: true
    }) || '<h1>cookie is null!</h1>';
    this.ctx.body = cookie;
  }
}

module.exports = SetcookieController;
