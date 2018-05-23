'use strict';
module.exports = (sequelize, DataTypes) => {
  var Dancing = sequelize.define('Dancing', {
    title: DataTypes.STRING,
    origin: DataTypes.STRING
  }, {});
  Dancing.associate = function(models) {
    // associations can be defined here
  };
  return Dancing;
};