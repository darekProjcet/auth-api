/* eslint-disable func-names */
import bcrypt from 'bcrypt-nodejs';
import Sequelize from 'sequelize';
import sequelize from '../config/config-db';

const Users = sequelize.define('users', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  token: {
    type: Sequelize.JSON,
    defaultValue: {}
  }
});

Users.generateHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
Users.prototype.vaildPassword = function (password) {
  bcrypt.compareSync(password, this.password);
};

export default Users;
