const express = require('express');
const http = require('http');
const logger = require('./src/utils/logger');

const app = express();
const server = http.createServer(app);

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

server.listen(3000, () => {
  logger.info('Started listening on port 3000');
});