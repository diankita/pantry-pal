import express from 'express';
import { autocomplete } from '../controllers/ingredient.controller';

const router = express.Router();

router.get('/autocomplete', autocomplete);

export default router;
