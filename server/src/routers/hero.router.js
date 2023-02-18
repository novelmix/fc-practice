const express = require('express');
const { heroImage } = require('../config/multer.config');
const HeroController = require('../controllers/HeroController');
const { validateHero, getHeroInstance, getHeroForUniqueCreate } = require('../middlewares/hero.middleware');
const { pagination } = require('../middlewares/pagination.middleware');
const { getPowerInstanceByName } = require('../middlewares/power.middleware');

const heroRouter = express.Router();

// CREATE HERO
heroRouter.post('/', validateHero, getHeroForUniqueCreate, HeroController.createHero);
// UPDATE HERO
heroRouter.put('/:heroId', validateHero, getHeroInstance, HeroController.updateHero);
// DELETE HERO
heroRouter.delete('/:heroId', getHeroInstance, HeroController.deleteHero);
// ADD POWER TO HERO (зробив по своєму, знаю можна і по-іншому)
heroRouter.post('/:heroId/:powerName', getHeroInstance, getPowerInstanceByName, HeroController.addPowerToHero);
// ADD IMAGE TO HERO
heroRouter.post('/:heroId/', getHeroInstance, heroImage, HeroController.addImagesToHero);
// GET ONE HERO WITH IMAGES AND POWER
heroRouter.get('/:heroId', getHeroInstance, HeroController.getHero);
// GET ALL HERO WITH IMAGES AND POWER + PAGINATION
heroRouter.get('/', pagination, HeroController.getAllHeroes);

module.exports = heroRouter;
