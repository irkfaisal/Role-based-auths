import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// controller/user.controller.ts
export const getAllUsers = async (req, res) => {
    const currentUser = req.user;
    console.log("currentUser", currentUser)

    if (currentUser.role.name !== 'superAdmin') {
        return res.status(403).json({ message: 'Access denied' });
    }

    const users = await prisma.user.findMany({
        include: {
            role: true,
            franchisees: true,
            permissions: true,
        },
    });

    return res.json(users);
};

// delete user
export const deleteUser = async (req, res) => {
    const currentUser = req.user;

    if (currentUser.role !== 'ADMIN') {
        return res.status(403).json({ message: 'Access denied' });
    }

    const userId = Number(req.params.id);

    try {
        await prisma.user.delete({ where: { id: userId } });
        return res.json({ message: 'User deleted successfully' });
    } catch (err) {
        return res.status(404).json({ message: 'User not found' });
    }
};

// user status (active/deactive)
export const toggleUserStatus = async (req, res) => {
    const currentUser = req.user;

    if (currentUser.role !== 'ADMIN') {
        return res.status(403).json({ message: 'Access denied' });
    }

    const userId = Number(req.params.id);
    const { isActive } = req.body;

    try {
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { isActive },
        });

        return res.json({ message: `User ${isActive ? 'activated' : 'deactivated'} successfully`, user: updatedUser });
    } catch (err) {
        return res.status(404).json({ message: 'User not found' });
    }
};


