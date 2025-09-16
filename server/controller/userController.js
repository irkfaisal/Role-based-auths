import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// controller/user.controller.ts
export const getAllUsers = async (req, res) => {
    const currentUser = req.user;

    if (currentUser.role.name !== 'superAdmin') {
        return res.status(403).json({ message: 'Access denied' });
    }

    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            isActive: true,
            role: true,
            franchisees: true,
            permissions: {
                select: {
                    page: true, // ✅ this pulls in name, path, isActive, etc from page schema.
                    canView: true,
                    id: true,
                },
            },
        },
    });

    return res.json(users);
};

// delete user
export const deleteUser = async (req, res) => {
    const currentUser = req.user;

    if (currentUser.role.name !== 'superAdmin') {
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

    if (currentUser.role.name !== 'superAdmin') {
        return res.status(403).json({ message: 'Access denied' });
    }

    const userId = Number(req.params.id);
    const { isActive } = req.body;

    try {
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { isActive: !isActive },
        });

        return res.json({ message: `User ${isActive ? 'activated' : 'deactivated'} successfully`, user: updatedUser });
    } catch (err) {
        return res.status(404).json({ message: 'User not found' });
    }
};


