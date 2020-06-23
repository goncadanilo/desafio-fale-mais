import express from 'express';
import cors from 'cors';

import routes from './routes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes() {
    this.app.use('/api/v1', routes);
  }
}

export default new App().app;
