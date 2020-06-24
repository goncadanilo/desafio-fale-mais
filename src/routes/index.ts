import { Router, Request, Response } from 'express';
import TariffsRepository from '@repositories/TariffsRepository';
import CalculateCallCostService from '@services/CalculateCallCostService';

const routes = Router();
const tariffsRepository = new TariffsRepository();
const calculateCallCostService = new CalculateCallCostService(
  tariffsRepository,
);

routes.get('/calculate', async (request: Request, response: Response) => {
  const { origin, destiny, time, plan } = request.query;
  const [withPlan, withoutPlan] = await calculateCallCostService.execute({
    origin: Number(origin),
    destiny: Number(destiny),
    time: Number(time),
    plan: Number(plan),
  });

  return response.status(200).json({ withPlan, withoutPlan });
});

export default routes;
