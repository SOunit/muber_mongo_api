const app = require('./app');

app.get('/', (req, res, next) => {
  res.send({ hi: 'there' });
});

app.listen(3050, () => {
  console.log('Listening 3050');
});
