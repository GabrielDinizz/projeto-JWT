import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize('fitadmin_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export { sequelize, DataTypes };
