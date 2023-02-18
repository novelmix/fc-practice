const ApiError = require('../errors/ApiError');
const { Op } = require('sequelize');
const { Hero } = require('../models');
const { HERO_SCHEMA } = require('../schemas/hero.schema');

module.exports.validateHero = async (req, res, next) => {
  try {
    const { body } = req;
    const validateBody = await HERO_SCHEMA.validate(body);
    if (validateBody) {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports.getHeroInstance = async (req, res, next) => {
  try {
    const {
      params: { heroId },
    } = req;
    const hero = await Hero.findByPk(heroId);
    if (!hero) {
      next(ApiError.NotFound('Hero not Found!'));
    }
    req.heroInstance = hero;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports.getHeroForUniqueCreate = async (req, res, next) => {
  try {
    const {
      body: { nickname, fullName },
    } = req;
    const hero = await Hero.findOne({
      where: { [Op.or]: [{ nickname: nickname }, { fullName: fullName }] },
    });
    if (hero) {
      next(ApiError.Conflict(`Hero with this nickname:${nickname} or fullName:${fullName} already exists!`));
    }
    next();
  } catch (error) {
    next(error);
  }
};
