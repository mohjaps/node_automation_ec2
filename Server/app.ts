import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import routes from '../Router'
import environment from "../Configurations/environment"
const {nodeEnv, port} = environment;

class App {
    app: any;
  constructor(router : any) {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes(router);
  }

  initializeMiddlewares() {
    this.app.use(morgan('dev'));
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.set('port', port);
    if(nodeEnv != "development"){
      this.app.disabled('x-powered-by');
    }
    this.app.use(express.urlencoded({ extended: false }));
  }

  initializeRoutes(routes : any[]) {
    routes.forEach((route) => {
        this.app.use('/api', route);
    });
  }
}

const { app } = new App([routes]);

export default app;


