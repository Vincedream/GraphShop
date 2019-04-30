'use strict';

const minimatch = require('minimatch');

module.exports = (options, app) => {
  return async function auth(ctx, next) {
    const operationName = ctx.request.body.operationName;
    // 进入调试页面时，operationName则为空
    if (!operationName) {
      await next();
      return;
    }
    const whiteList = app.config.auth.whiteList;
    const matchs = whiteList.filter(w => minimatch(operationName, w));
    if (matchs.length !== 0) {
      await next();
    } else if (ctx.session.user) {
      await next();
    } else {
      ctx.status = 401;
      ctx.body = {
        c: -1,
        m: '未登录!',
      };
    }
  };
};
