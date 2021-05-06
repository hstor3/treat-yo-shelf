const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Book extends Model {}

Book.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
    },
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'users',
    //     key: 'id'
    //   }
    // }
  },
  {
    sequelize,
  }
);

module.exports = Book;
