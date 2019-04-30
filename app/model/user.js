'use strict';

module.exports = app => {
  const { STRING, DATE, INTEGER, TEXT } = app.Sequelize;

  const User = app.model.define('user', {
    name: {
      type: STRING(32),
      allowNull: false,
    },
    password: {
      type: STRING(32),
      allowNull: false,
    },
    type: { // 1 买家 2 店家 3管理员
      type: INTEGER(),
      allowNull: false,
    },
    phone: {
      type: STRING(32),
      allowNull: false,
    },
    email: {
      type: STRING(32),
      allowNull: false,
    },
    created_at: {
      type: DATE(),
      allowNull: false,
    },
    updated_at: {
      type: DATE(),
      allowNull: false,
    },
  });

  User.associate = function() {
    // app.model.User.hasMany(app.model.Achievement, { as: 'achievements', foreignKey: 'user_id' });
    // app.model.User.hasMany(app.model.Group, { as: 'groups', foreignKey: 'admin_id' });
    // app.model.User.hasMany(app.model.Exchange, { as: 'exchange', foreignKey: 'user_id' });
  };

  return User;
};
