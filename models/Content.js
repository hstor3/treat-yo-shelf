// /* eslint-disable require-atomic-updates */

// // Bookshelf
// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Content extends Model { }

// Content.init(
//   {
//     content_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       allowNull: false,
//       autoIncrement: true,
//     },
//     book_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     shelf_position: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     }
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     // underscored: true,
//     modelName: "Content",
//   }
// );

// module.exports = Content;
