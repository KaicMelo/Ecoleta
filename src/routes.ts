import express, { response } from 'express';
import knex from './database/connection'

import PointsController from './controllers/pointsController';

const routes = express.Router();
const pointsController = new PointsController();

routes.get('/items', async function(req,res){
    const items = await knex('items').select('*');
    return res.json(items);
});

routes.post('/point',pointsController.create); 

export default routes;