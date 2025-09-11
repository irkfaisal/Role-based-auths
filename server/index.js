import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';


import authRoutes from './routes/authRoutes.js';
import permissionRoutes from './routes/permissionRoutes.js';
import pageRoutes from './routes/pageRoutes.js';
import roleRoutes from './routes/roleRoutes.js';
import franchiseeRoute from './routes/franchisee.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

const main = async () => {
    try {
        const users = await prisma.user.findMany();
        const pages = await prisma.page.findMany();
        const roles = await prisma.role.findMany();
        const franchisees = await prisma.Franchisee.findMany();
        console.log(users, pages, roles, franchisees);
    } catch (err) {
        console.error('Error:', err);
    } finally {
        await prisma.$disconnect();
    }
};

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());

app.use('/api/auth', authRoutes);
app.use('/api/pages', pageRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/permissions', permissionRoutes);
app.use('/api/franchisees', franchiseeRoute);
app.use('/api/user', userRoutes);

app.get('/', (req, res) => res.send('API running!'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
