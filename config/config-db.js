import Sequelize from 'sequelize';

const sequelize = new Sequelize('postgres://oiakdkcl:gqvpUC4biRleYPjY0sayHKaCz1JuLdsi@baasu.db.elephantsql.com:5432/oiakdkcl');

sequelize
  .authenticate()
  .then(() => console.log('Success connect with DB'))
  .catch(err => console.log(err));

export default sequelize;
