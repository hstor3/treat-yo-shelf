/* eslint-disable require-atomic-updates */

// Bookshelf
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class List extends Model { }

List.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    list_name: {
      type: DataTypes.STRING
    },
    user: {
      type: DataTypes.STRING

            FOREIGN KEY(user) REFERENCES user(user_id)
    }
  },
  {
    sequelize,
    //timestamps: false,
    freezeTableName: true,
    // underscored: true,
    modelName: "List",
  }
);

module.exports = List;
