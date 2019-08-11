'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    
    let newsList = await this.service.news.getNewsLatest();
    await ctx.render('index.ejs', {
      newsList
    });
  }

  async detail() {
    const {ctx} = this;
    let query = ctx.query;

    let detail = await this.service.detail.getNewsDetail(query);
    await ctx.render('detail.ejs', {
      detail
    });
  }

  async test() {
    // 测试application拓展
    console.log(this.app.foo("application"));

    // 测试context拓展
    console.log(this.ctx.foo("context"));

    // 测试request拓展
    console.log(this.ctx.request.foox);

    // 测试response拓展
    console.log(this.ctx.response.foo = "response");

    this.ctx.body = "<h1>test page</h1>";
  }
}

module.exports = HomeController;
