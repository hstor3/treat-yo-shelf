/* eslint-disable require-atomic-updates */

// Bookshelf
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class List extends Model {}

List.init(
  {
    list_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    list_name: {
      type: DataTypes.STRING,
    },
    user: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "List",
  }
);

module.exports = List;
