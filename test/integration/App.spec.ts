import request from 'supertest';
import mongoose from 'mongoose';

import app from '../../src/app';

describe('App', () => {
  afterAll(() => {
    mongoose.disconnect();
  });

  it('should be able to calculate the call cost', async () => {
    const response = await request(app).get('/api/v1/calculate').query({
      origin: '011',
      destiny: '016',
      time: '20',
      plan: '30',
    });

    expect(response.status).toBe(200);
    expect(response.body.withPlan).toBe(0);
    expect(response.body.withoutPlan).toBe(38);
  });

  it('should return 400 if tariff value is not found', async () => {
    const response = await request(app).get('/api/v1/calculate').query({
      origin: '0',
      destiny: '0',
      time: '0',
      plan: '0',
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Tariff value is not found');
  });
});
