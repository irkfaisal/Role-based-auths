import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // const users = [
    //     { name: 'Alice', email: 'alice@example.com', password: 'alice123', role: 'employee' },
    //     { name: 'Bob', email: 'bob@example.com', password: 'bob123', role: 'manager' },
    //     { name: 'Charlie', email: 'charlie@example.com', password: 'charlie123', role: 'director' },
    //     { name: 'Dave', email: 'dave@example.com', password: 'dave123', role: 'employee' },
    //     { name: 'Eve', email: 'eve@example.com', password: 'eve123', role: 'superadmin' }
    // ];

    // const pages = [
    //     { name: 'Dashboard', path: '/dashboard' },
    //     { name: 'Projects', path: '/projects' },
    //     { name: 'Reports', path: '/reports' },
    //     { name: 'Management', path: '/management' },
    //     { name: 'Billing', path: '/billing' },
    //     { name: 'admin', path: '/admin' }
    // ];

    const franchisees = [
        'Traffic NZ',
        'Refresh NZ',
        'Refresh International',
        'Refresh AU',
        'Refresh UK',
        'Refresh US',
        'Zones NZ',
        'Zones AU',
        'Zones International',
        'Oncore NZ',
        'Oncore International',
        'Techverse Origin',
        'We Sort It'
    ];

    for (const name of franchisees) {
        const existing = await prisma.franchisee.findUnique({ where: { name } }); // ✅ This now works
        if (!existing) {
            await prisma.franchisee.create({ data: { name } });
        }
    }

    console.log('✅ Franchisees seeded successfully.');

    // const roles = [
    //     { name: 'director' },
    //     { name: 'admin' },
    //     { name: 'superAdmin' },
    //     { name: 'employee' },
    //     { name: 'manager' },
    // ];

    // for (const role of roles) {
    //     const existing = await prisma.role.findUnique({ where: { name: role.name } });
    //     if (!existing) {
    //         await prisma.role.create({ data: role });
    //     }
    // }


    // for (const user of users) {
    //     const existing = await prisma.user.findUnique({ where: { email: user.email } });
    //     if (!existing) {
    //         await prisma.user.create({ data: user });
    //     }
    // }


    // for (const page of pages) {
    //     const existing = await prisma.page.findUnique({ where: { name: page.name } });
    //     if (!existing) {
    //         await prisma.page.create({ data: { ...page, isActive: true } });
    //     }
    // }

    console.log('Seeding complete');
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
