import express from "express";
import { router } from "./routes/router";
import cors from 'cors';

export class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private router() {
    this.server.use(router);
  }
}

if (require.main === module) {
  new App().server.listen(3001);
}