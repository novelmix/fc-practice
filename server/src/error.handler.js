const { MulterError } = require('multer')
const { ValidationError } = require('yup')
const ApiError = require('./errors/ApiError')
MulterError
module.exports.errorHandler = async (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(400).send(err.message);
  }

  // if (err instanceof MulterError) {
  //   return res.status(400).send(err.message);
  // }

  if (err instanceof ApiError) {
    return res.status(err.status).send(err.message);
  }

  return res.status(500).send(err.stack); // development
};