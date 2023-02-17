const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  "development": {
    dialect: process.env.DB_DRIVER,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    migrationStorageTableName: "migrations",
  },
  "test": {},
  "production": {}
}