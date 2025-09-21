import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const register = async (req, res) => {
    const { name, email, password, roleId, permissions, franchisees, isActive } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name, email,
                password: hashedPassword,
                // roleId,
                role: { connect: { id: roleId } },
                permissions: {
                    create: permissions.map(p => ({
                        page: { connect: { name: p } },
                        canView: true
                    }))
                },
                franchisees: {
                    connect: franchisees?.map(f => ({ name: f }))
                },
            },
            include: {
                role: true,
                franchisees: true,
                permissions: { include: { page: true } } // include related page for each permission
            }
        });

        const token = jwt.sign({ id: user.id, email: user.email, role: user.role, isActive: user.isActive }, 'secret_key');
        res.status(201).json({ token, user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { email },
            include: {
                role: true,
                franchisees: true,
                permissions: {
                    include: { page: true }
                }
            }

        });
        if (!user) return res.status(404).json({ message: 'user not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });

        // remove password before sending
        const { password: _, ...userData } = user;

        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role, isActive: user.isActive },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.json({ token, userData });
    } catch (err) {
        res.status(500).json({ message: 'Login failed', error: err.message });
    }
};
