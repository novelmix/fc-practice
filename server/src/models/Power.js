'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Power extends Model {
    static associate({ Hero }) {
      this.belongsToMany(Hero, {
        through: 'powers_to_heroes',
        foreignKey: 'powerId',
      });
    }
  }
  Power.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
    },
    {
      sequelize,
      underscored: true,
      timestamps: true,
      modelName: 'Power',
      tableName: 'powers',
    }
  );
  return Power;
};
