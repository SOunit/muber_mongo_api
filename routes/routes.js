const driverController = require('../controllers/driver_controller');

module.exports = (app) => {
  // http://localhost:3050/api
  app.get('/api', driverController.greeting);

  // http://localhost:3050/
  // app.get('/', (req, res, next) => {
  //   res.send({ hi: 'there' });
  // });

  app.post('/api/drivers', driverController.create);
};
