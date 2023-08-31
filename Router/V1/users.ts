import express from 'express';
import {UserController} from '../../Controllers'
const Router = express.Router();
const {GetUsers} = UserController;

Router.get('/', GetUsers);

 export default Router;