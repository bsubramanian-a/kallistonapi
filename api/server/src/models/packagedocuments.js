'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PackageDocuments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PackageDocuments.init({
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PackageDocuments',
  });
  return PackageDocuments;
};