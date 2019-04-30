'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 获取当前用户的信息
  async getUserInfo() {
    const { id: user_id } = this.ctx.session.user || {};
    const user = await this.ctx.model.User.findById(user_id);
    if (!user) {
      throw new Error('用户不存在');
    }
    return user;
  }
}

module.exports = UserService;
