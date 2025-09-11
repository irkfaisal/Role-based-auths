import express from 'express';
import { createPage, getAllPages } from '../controller/pageController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, createPage);
router.get('/', verifyToken, getAllPages);

export default router;
