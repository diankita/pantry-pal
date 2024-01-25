import { Request, Response } from 'express';
import db from '../models';

export const addToInventory = async (req: Request, res: Response) => {
  const transaction = await db.sequelize.transaction();
  try {
    const { userId, ingredientId } = req.body;
    const user = await db.User.findByPk(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const inventoryItem = await db.Inventory.create({
      IngredientId: ingredientId,
      UserId: userId,
    });

    await transaction.commit();
    res.status(201).json(inventoryItem);
  } catch (error) {
    await transaction.rollback();
    console.error(error);

    res.status(500).send('Error saving to inventory');
  }
};

export const getAllInventory = async (req: Request, res: Response) => {
  type Ingredient = {
    id: number;
    name: string;
    image: string;
    aisle: string;
  };
  type Item = {
    id: number;
    Ingredient: Ingredient[];
  };

  try {
    const userId = req.query.userId;

    const inventoryItems: Item[] = await db.Inventory.findAll({
      where: { UserId: userId },
      include: [
        {
          model: db.Ingredient,
          attributes: ['id', 'name', 'image', 'aisle'],
        },
      ],
    });

    res.status(200).json(inventoryItems.map((item) => item.Ingredient));
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving inventory');
  }
};

export const removeFromInventory = async (req: Request, res: Response) => {
  try {
    const { userId, ingredientId } = req.body;
    const user = await db.User.findByPk(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    const deleteSuccess = await db.Inventory.destroy({
      where: {
        IngredientId: ingredientId,
        UserId: userId,
      },
    });
    if (deleteSuccess) {
      res.status(200).send({ message: 'Deleted Successfully' });
    } else {
      // Added else statement
      res.status(500).send({ message: 'Error deleting from inventory' });
    }
  } catch (error) {
    // await transaction.rollback();
    res.status(500).send('Error saving to inventory');
  }
};
