import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Create a new role
export const createRole = async (req, res) => {
    try {
        const { name } = req.body;
        const role = await prisma.role.create({ data: { name } });
        res.json(role);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all roles
export const getRoles = async (req, res) => {
    try {
        const roles = await prisma.role.findMany();
        res.json(roles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a role
export const updateRole = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const updated = await prisma.role.update({
            where: { id: parseInt(id) },
            data: { name },
        });

        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a role
export const deleteRole = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.role.delete({ where: { id: parseInt(id) } });
        res.json({ message: 'Role deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
