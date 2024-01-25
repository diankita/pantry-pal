import express from 'express';
import {
  getAllInventory,
  addToInventory,
  removeFromInventory,
} from '../controllers/inventory.controller';

const router = express.Router();

router.get('/', getAllInventory);

router.post('/', addToInventory);

router.delete('/', removeFromInventory);

export default router;
