const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

const Driver = mongoose.model('driver');

describe('Drivers controller', () => {
  it('Post to /api/drivers create a new driver', (done) => {
    // count is 0
    Driver.countDocuments().then((count) => {
      request(app)
        .post('/api/drivers')
        .send({ email: 'test@test.com' })
        .end(() => {
          // count is 1
          Driver.countDocuments().then((newCount) => {
            assert(count + 1 === newCount);
            done();
          });
        });
    });
  });
});
