import {Request,Response} from 'express';
import knex from '../database/connection';

class PointsController
{
    
    async create(req: Request,res: Response)
    {
        const {
            name,
            image,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = req.body;
    
        // const trx = await knex.transaction();
        const point = { name,
            image: 'image-fake',
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf 
        };

        const insertedIds = await knex('points').insert(point);

        const point_id = insertedIds[0];
    
        const pointItems = items.map((item_id: number) => {
            return{
                item_id,
                point_id
            }
        });
    
        await knex('point_items').insert(pointItems);

        return res.json({
            id:point_id,
            ...point
        });
    }
}

export default PointsController;