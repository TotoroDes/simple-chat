const express = require('express');
const http = require('http');
const logger = require('./src/utils/logger');

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => {
  res.send({
    message: 'it works',
  });
});

server.listen(3000, () => {
  logger.info('Started listening on port 3000');
});