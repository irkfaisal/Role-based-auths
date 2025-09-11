import express from 'express';
import {
    getUserPermissions,
    updateUserPermissions,
    getAllPages,
} from '../controller/permissionController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/user/:id', verifyToken, getUserPermissions);
router.post('/user/:id', verifyToken, updateUserPermissions);
router.get('/pages', verifyToken, getAllPages);

export default router;
