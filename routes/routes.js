module.exports = (app) => {
  // http://localhost:3050/api
  app.get('/api', (req, res, next) => {
    res.send({ hi: 'there' });
  });

  // http://localhost:3050/
  // app.get('/', (req, res, next) => {
  //   res.send({ hi: 'there' });
  // });
};
