class ApiError extends Error {
  constructor(status, message) {
    super(message), (this.status = status);
  }

  static NotFound(message) {
    return new this(404, message);
  }

  static Conflict(message) {
    return new this(409, message);
  }
}

module.exports = ApiError;
