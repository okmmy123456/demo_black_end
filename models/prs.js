'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PRS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PRS.init({
    site: DataTypes.STRING,
    section: DataTypes.STRING,
    prnonumber: DataTypes.STRING,
    description: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    unit: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    requieddate: DataTypes.DATE,
    supplier: DataTypes.STRING,
    assetno: DataTypes.INTEGER,
    over1y: DataTypes.BOOLEAN,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PRS',
    freezeTableName:true,
    underscoredAll:true,
    underscored: true,
    createdAt:"created_at",
    updatedAt:"updated_at"

  });
  return PRS;
};