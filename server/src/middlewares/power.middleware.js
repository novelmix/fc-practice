const { Power } = require('../models');

module.exports.getPowerInstanceByName = async (req, res, next) => {
  try {
    const {
      params: { powerName },
    } = req;
    let power = await Power.findOne({where: {name: powerName}});
    if (!power) {
      power = await Power.create({name: powerName});
    }
    req.powerInstance = power;
    next();
  } catch (error) {
    next(error);
  }
};

