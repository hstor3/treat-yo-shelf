/* eslint-disable require-atomic-updates */

// Bookshelf
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Content extends Model { }

Content.init(
  {
    list_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shelf_position: {
      type: DataTypes.INTEGER,
      allowNull: false,

      FOREIGN KEY(list_id) REFERENCES list(id),
      FOREIGN KEY(book_id) REFERENCES book(id)
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    // underscored: true,
    modelName: "Content",
  }
);

module.exports = Content;
