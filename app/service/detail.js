'use strict';

const Service = require('egg').Service;

class DetailService extends Service {
  async getNewsDetail({id}) {
    const {ctx, config} = this;
    
    let url = config.newsDetail + id;
    let response = await ctx.curl(url);
    return JSON.parse(response.data);
  }
}

module.exports = DetailService;
