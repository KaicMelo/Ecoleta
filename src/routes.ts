import express, { response } from 'express'; 

import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

const routes = express.Router();
const pointsController = new PointsController(); 
const itemsController = new ItemsController();

routes.get('/items',itemsController.index);

routes.post('/point',pointsController.create);
routes.get('/points',pointsController.index);
routes.get('/point/:id',pointsController.show);

export default routes;