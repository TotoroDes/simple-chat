const express = require('express');
const http = require('http');
const UUID = require('uuid/v4');
const logger = require('./src/utils/logger');

const app = express();
const server = http.createServer(app);

const chatMessages = [];

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/chat', (req, res) => {
  res.status(200).send(chatMessages);
});

app.post('/chat', (req, res) => {
  const msg = Object.assign({
    id: UUID(),
  }, req.body.message);

  chatMessages.push(msg);

  logger.info('Created message', msg);

  res.status(201).send(msg);
});

server.listen(3000, () => {
  logger.info('Started listening on port 3000');
});