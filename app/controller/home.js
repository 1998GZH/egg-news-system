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
}

module.exports = HomeController;
