import express from 'express';
import { createFranchisee, getFranchisees } from '../controller/franchisee.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, createFranchisee);
router.get('/', verifyToken, getFranchisees);

export default router;