'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/detail', controller.home.detail);

  router.get('/test', controller.home.test);

  router.get('/login', controller.login.login);
  router.post('/login', controller.login.handleLogin);

  // 设置cookie测试页面
  router.get('/setcookie', controller.setcookie.setCookie);
  router.get('/getcookie', controller.setcookie.getCookie);
  router.get('/deletecookie', controller.setcookie.deleteCookie);
};
