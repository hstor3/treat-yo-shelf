const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class List extends Model { }

List.init(
  {
    list_name: {
      type: DataTypes.STRING,
    },
    user: {
      type: DataTypes.STRING,
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