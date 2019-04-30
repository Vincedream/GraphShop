'use strict';

module.exports = {
  Query: {
    user(root, _, ctx) {
      return ctx.connector.user.getUserInfo();
    },
    userLogin(root, { name, password }, ctx) {
      console.log(name, password);
      return ctx.connector.user.login({ name, password });
    },
  },
  Mutation: {
    userRegister(root, { name, password, type, phone, email }, ctx) {
      return ctx.connector.user.register({ name, password, type, phone, email });
    },
  },
};
