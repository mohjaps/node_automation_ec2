import express, { Response } from 'express';
import v1 from './V1'
const Router = express.Router();

Router.use('/v1', v1)

export default Router;