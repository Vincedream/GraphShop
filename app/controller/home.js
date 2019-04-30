'use strict';

const Controller = require('egg').Controller;
const crypto = require('crypto');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(1111222);
    const password = '132312第三方131231s';
    const md5 = crypto.createHash('md5');
    const newPas = md5.update(password).digest('hex');
    console.log(newPas);
    const user = await this.ctx.model.User.create({ name: 'vince', password: 'sdfdsfsd', type: 1, phone: '12211112222', email: 'djfisf@124.com' });
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
