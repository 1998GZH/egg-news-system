'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsLatest() {
    const {ctx} = this;
    
    let url = this.config.newsUrl;
    let response = await ctx.curl(url);
    
    return JSON.parse(response.data);
  }
}

module.exports = NewsService;
