/* eslint-disable require-atomic-updates */
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Book extends Model { }

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cover: {
      type: DataTypes.STRING
    },
    genre: {
      type: DataTypes.STRING
    },
    summary: {
      type: DataTypes.TEXT
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    // underscored: true,
    modelName: "book",
  }
);

module.exports = Book;
