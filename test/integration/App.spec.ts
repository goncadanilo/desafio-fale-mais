import request from 'supertest';
import mongoose from 'mongoose';

import app from '../../src/app';

describe('App', () => {
  afterAll(() => {
    mongoose.disconnect();
  });

  it('should be able to calculate the call cost', async () => {
    const response = await request(app).get('/v1/calculate').query({
      origin: '011',
      destiny: '016',
      time: '20',
      plan: '30',
    });

    expect(response.status).toBe(200);
    expect(response.body.withPlan).toBe(0);
    expect(response.body.withoutPlan).toBe(38);
  });
});
