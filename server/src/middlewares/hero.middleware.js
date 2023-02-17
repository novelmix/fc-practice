const ApiError = require('../errors/ApiError');
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
      next(ApiError.NotFound('Hero not Fount'));
    }
    req.heroInstance = hero;
    next();
  } catch (error) {
    next(error);
  }
};
