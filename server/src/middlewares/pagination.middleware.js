const MAX_LIMIT = 10;

module.exports.pagination = async (req, res, next) => {
  try {
    const {limit, offset} = req.query;
    if(!limit && !offset) {
      req.pagination = {
        limit: 5,
        offset: 0
      }
    } else {
      req.pagination = {
        limit: limit > MAX_LIMIT || limit <= 0 ? MAX_LIMIT : limit,
        offset: offset < 0 ? 0 : offset
      }
    }
    next()
  } catch (error) {
    next(error);
  }
};