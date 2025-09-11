import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a new page
export const createPage = async (req, res) => {
    const { name, isActive, path } = req.body;

    try {
        const page = await prisma.page.create({
            data: {
                name,
                path,
                isActive: isActive ?? true, // default true
            },
        });

        res.status(201).json(page);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all pages (optionally filter by isActive)
export const getAllPages = async (req, res) => {
    try {
        const { activeOnly } = req.query;

        const pages = await prisma.page.findMany({
            where: activeOnly === 'true' ? { isActive: true } : {},
        });

        res.json(pages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
