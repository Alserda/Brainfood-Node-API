import customDataTypes from '../utils/sequelize-mysql-timestamp';

export default (sequelize, DataTypes) => sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: DataTypes.STRING,
  body: DataTypes.TEXT,
  createdAt: customDataTypes.TIMESTAMP,
  updatedAt: customDataTypes.TIMESTAMP,
});
