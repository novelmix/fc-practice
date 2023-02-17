const http = require('http');
const dotenv = require('dotenv');
const app = require('./src/app')
dotenv.config();

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`YES, SERVER RUN http://localhost:${PORT}`);
});