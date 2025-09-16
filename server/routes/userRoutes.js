import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { deleteUser, getAllUsers, toggleUserStatus } from '../controller/userController.js';
import { authorizeRole } from '../middleware/checkRole.js';

const router = express.Router();

router.get('/', verifyToken, authorizeRole('superAdmin'), getAllUsers);
router.delete('/delete/:id', verifyToken, authorizeRole('superAdmin'), deleteUser);
router.patch('/status/:id', verifyToken, authorizeRole('superAdmin'), toggleUserStatus);


export default router;