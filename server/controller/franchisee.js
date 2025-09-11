import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createFranchisee = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Franchisee name is required' });
        }

        // Check for duplicate
        const existing = await prisma.franchisee.findUnique({ where: { name } });

        if (existing) {
            return res.status(409).json({ error: 'Franchisee already exists' });
        }

        const franchisee = await prisma.franchisee.create({
            data: { name },
        });

        res.status(201).json({ message: 'Franchisee created', franchisee });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};


export const getFranchisees = async (req, res) => {
    try {
        const franchisees = await prisma.franchisee.findMany();
        res.status(200).json(franchisees);
    } catch (error) {
        console.error('Error fetching franchisees:', error);
        res.status(500).json({ error: 'Failed to fetch franchisees' });
    }
};
