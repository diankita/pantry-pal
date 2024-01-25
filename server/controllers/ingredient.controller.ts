import db from '../models';
import { Request, Response } from 'express';
import { Op } from 'sequelize';

export const autocomplete = async (req: Request, res: Response) => {
  try {
    console.log(db.Ingredient);
    const query = req.query.query;
    const ingredients = await db.Ingredient.findAll({
      where: {
        name: {
          [Op.like]: `%${query}%`,
        },
      },
      attributes: [
        'name',
        'image',
        [db.Sequelize.fn('MIN', db.Sequelize.col('id')), 'id'],
      ],
      group: ['name', 'image'],
      limit: 10,
    });

    return res.status(200).json(ingredients);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: 'Error fetching data from the external API' });
  }
};
