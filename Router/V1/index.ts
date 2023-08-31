import express, { Response } from 'express';
import userRouter from './users'
const Router = express.Router();

Router.get('/', (_, response: Response) => {
    response.send("Server is running!");
})
Router.use('/user', userRouter)

export default Router;