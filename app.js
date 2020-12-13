const express = require('express');
const app = express();

// http://localhost:3050/api
app.get('/api', (req, res, next) => {
  console.log('/api');
  res.send({ hi: 'there' });
});

// http://localhost:3050/
app.get('/', (req, res, next) => {
  console.log('/');
  res.send({ hi: 'there' });
});

module.exports = app;
