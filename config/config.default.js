/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1565449688328_3126';

  // add your middleware config here
  config.middleware = ['forbidIp', 'auth'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 配置模板引擎
  config.view = {
    mapping: {
      '.ejs': 'ejs'
    }
  }

  config.newsUrl = 'https://news-at.zhihu.com/api/4/news/latest';
  config.newsDetail = 'https://news-at.zhihu.com/api/4/news/'

  return {
    ...config,
    ...userConfig,
  };
};
