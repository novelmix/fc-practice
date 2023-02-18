const { Hero, Image, Power } = require('../models');

class HeroController {
  async createHero(req, res, next) {
    try {
      const { body } = req;
      const createHero = await Hero.create(body);
      return res.status(201).send({ data: createHero });
    } catch (error) {
      next(error);
    }
  }

  async updateHero(req, res, next) {
    try {
      const { body } = req;
      const { heroInstance } = req;
      const updateHero = await heroInstance.update(body);
      return res.status(200).send({ data: updateHero });
    } catch (error) {
      next(error);
    }
  }

  async deleteHero(req, res, next) {
    try {
      const { heroInstance } = req;
      await heroInstance.destroy();
      return res.status(200).send({ message: `Hero successfully deleted!` });
    } catch (error) {
      next(error);
    }
  }

  async getHero(req, res, next) {
    try {
      const { heroInstance } = req;
      const images = await heroInstance.getImages();
      const powers = await heroInstance.getPowers();
      return res.status(200).send({ data: {heroInstance, images, powers} });
    } catch (error) {
      next(error);
    }
  }

  async getAllHeroes(req, res, next) {
    try {
      const { pagination } = req;
      const heroes = await Hero.findAll({
        include: [
          {
            model: Image,
            as: 'images',
          },
          {
            model: Power,
            as: 'powers',
          },
        ],
        ...pagination,
      });
      return res.status(200).send({ data: heroes });
    } catch (error) {
      next(error);
    }
  }

  async addImagesToHero(req, res, next) {
    try {
      const { id } = req.heroInstance;
      if (req.files) {
        req.files.forEach(({ filename }) => Image.create({ imagePath: filename, heroId: id }));
      }
      return res.status(200).send({ message: `Image successfully added to hero!` });
    } catch (error) {
      next(error);
    }
  }

  async addPowerToHero(req, res, next) {
    try {
      const { heroInstance, powerInstance } = req;
      await heroInstance.addPower(powerInstance);
      return res.status(200).send({ message: `Power successfully added to hero!` });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new HeroController();
