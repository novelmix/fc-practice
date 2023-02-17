'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    static associate({ Image, Power }) {
      this.hasMany(Image, {
        as: 'images',
        foreignKey: 'heroId',
      });
      this.belongsToMany(Power, {
        through: 'powers_to_heroes',
        foreignKey: 'heroId',
      });
    }
  }
  Hero.init(
    {
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
        },
      },
      fullName: {
        field: 'full_name',
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
      slogan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
    },
    {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Hero',
      tableName: 'heroes',
    }
  );
  return Hero;
};
