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
  config.keys = appInfo.name + '_1556614752677_8174';

  // add your middleware config here
  config.middleware = [ 'auth', 'graphql' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    sequelize: {
      dialect: 'mysql',
      database: 'graph_shop',
      host: 'localhost',
      port: '3306',
      username: 'root',
      password: 'huajinbo',
    },
    security: {
      csrf: {
        enable: false,
      },
    },
    jwt: {
      jwtSecret: 'hello vince',
      jwtExpire: '14 days',
    },
    graphql: {
      router: '/graphql',
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
      // 开启调试
      // graphiql: true,
    },
    auth: {
      whiteList: [ 'userLogin', 'userRegister' ],
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
