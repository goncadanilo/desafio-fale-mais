import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import CalculatorController from '@controllers/CalculatorController';

const routes = Router();
const calculatorController = new CalculatorController();

routes.get(
  '/calculate',
  celebrate({
    [Segments.QUERY]: {
      origin: Joi.string().length(3).required(),
      destiny: Joi.string().length(3).required(),
      time: Joi.string().required(),
      plan: Joi.string().required(),
    },
  }),
  calculatorController.calculate,
);

export default routes;
