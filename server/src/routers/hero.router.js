const express = require('express');
const multer = require('multer');
const { upload } = require('../config/multer.config')
const HeroController = require('../controllers/HeroController');
const { validateHero, getHeroInstance } = require('../middlewares/hero.middleware');
const { pagination } = require('../middlewares/pagination.middleware')

const heroRouter = express.Router();

heroRouter.post('/',validateHero, HeroController.createHero);
heroRouter.post('/:heroId/image',getHeroInstance, upload, HeroController.addImagesHero);
heroRouter.post('/:heroId/power',getHeroInstance, HeroController.addPowersHero);
heroRouter.put('/:heroId', validateHero, getHeroInstance, HeroController.updateHero);
heroRouter.delete('/:heroId', getHeroInstance, HeroController.deleteHero);
heroRouter.get('/:heroId', getHeroInstance, HeroController.getHero);
heroRouter.get('/',pagination, HeroController.getAllHeroes);

module.exports = heroRouter;
