import express from 'express';
import {
    createRole,
    getRoles,
    updateRole,
    deleteRole
} from '../controller/roleController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', verifyToken, createRole);
router.get('/', verifyToken, getRoles);
router.put('/:id', verifyToken, updateRole);
router.delete('/:id', verifyToken, deleteRole);

export default router;
