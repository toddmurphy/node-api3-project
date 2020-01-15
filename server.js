const express = require('express');
const expressRouter = require('./posts/postRouter');
const server = express();

server.use(express.json());

server.use('/api/posts', expressRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {}

module.exports = server;
