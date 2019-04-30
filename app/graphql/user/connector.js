'use strict';

const crypto = require('crypto');

class UserConnector {
  constructor(ctx) {
    this.ctx = ctx;
  }

  // 获取当前用户的信息
  getUserInfo() {
    const user = this.ctx.service.user.getUserInfo();
    return user;
  }

  // 注册
  async register({ name, password, phone, type, email }) {
    const cryptoPassword = crypto.createHash('md5').update(password).digest('hex');
    const result = await this.ctx.model.User.findAll({
      where: {
        name,
      },
    });
    if (result.length !== 0) {
      throw new Error('用户名已存在！');
    }
    const user = await this.ctx.model.User.create({ name, password: cryptoPassword, type, phone, email });
    return user;
  }

  // 登录
  async login({ name, password }) {
    const user = await this.ctx.model.User.findAll({
      where: {
        name,
      },
    });
    if (user.length !== 0) {
      const { password: originPassword } = user[0];
      const cryptoPassword = crypto.createHash('md5').update(password).digest('hex');
      if (originPassword === cryptoPassword) {
        this.ctx.session.user = { id: user[0].id };
        return user[0];
      }
      throw new Error('用户名或密码错误');
    } else {
      throw new Error('用户名或密码错误');
    }
  }
}

module.exports = UserConnector;
