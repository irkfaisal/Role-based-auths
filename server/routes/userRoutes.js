import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { deleteUser, getAllUsers, toggleUserStatus } from '../controller/userController.js';
import { authorizeRole } from '../middleware/checkRole.js';

const router = express.Router();

router.get('/users', verifyToken, authorizeRole('superAdmin'), getAllUsers);
router.delete('/users/:id', verifyToken, deleteUser);
router.patch('/users/:id/status', verifyToken, toggleUserStatus);


export default router;