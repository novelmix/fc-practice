const multer = require('multer');
const { STATIC_PATH } = require('./path.config')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, STATIC_PATH);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}.${file.originalname}`);
  },
});

module.exports.upload = multer({ storage: storage }).array('hero_image');