import 'express-async-errors';

import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import AppError from '@errors/AppError';
import routes from './routes';
import env from './utils/env';

class App {
  public app: Application;

  constructor() {
    this.app = express();

    this.connectDatabase();
    this.middlewares();
    this.routes();
    this.errors();
  }

  private connectDatabase() {
    mongoose
      .connect(env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('Connected Database'))
      .catch(error => console.log(`${error}`));
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes() {
    this.app.use('/v1', routes);
  }

  private errors() {
    this.app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
      if (err instanceof AppError) {
        return res.status(err.statusCode).json(err.message);
      }

      return res.status(500).json({ message: 'Internal server error' });
    });
  }
}

export default new App().app;
