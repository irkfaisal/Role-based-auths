import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUserPermissions = async (req, res) => {
    const userId = parseInt(req.params.id);

    try {
        const permissions = await prisma.permission.findMany({
            where: { userId },
            include: { page: true }
        });

        res.json(permissions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateUserPermissions = async (req, res) => {
    const userId = parseInt(req.params.id);
    const updates = req.body;

    try {
        await prisma.permission.deleteMany({ where: { userId } });

        await prisma.permission.createMany({
            data: updates.map(p => ({ ...p, userId }))
        });

        await prisma.$transaction([
            prisma.permission.deleteMany({ where: { userId } }),
            prisma.permission.createMany({
                data: updates.map(p => ({ ...p, userId }))
            })
        ]);

        res.json({ message: 'Permissions updated' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getAllPages = async (req, res) => {
    try {
        const pages = await prisma.page.findMany({ where: { isActive: true } });
        res.json(pages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
