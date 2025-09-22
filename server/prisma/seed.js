// seed.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // 1️⃣ Create Franchisees
    // const franchiseeNames = [
    //     'Traffic NZ', 'Refresh NZ', 'Refresh International', 'Refresh AU',
    //     'Refresh UK', 'Refresh US', 'Zones NZ', 'Zones AU',
    //     'Zones International', 'Oncore NZ', 'Oncore International',
    //     'Techverse Origin', 'We Sort It', 'PlanFirst'
    // ];

    // for (const name of franchiseeNames) {
    //     const existing = await prisma.franchisee.findUnique({ where: { name } });
    //     if (!existing) {
    //         await prisma.franchisee.create({ data: { name } });
    //     }
    // }
    // console.log('✅ Franchisees seeded.');

    // 2️⃣ Create Roles
    const roles = ['Director', 'Admin', 'Super Admin', 'Employee', 'Manager'];
    for (const roleName of roles) {
        const existing = await prisma.role.findUnique({ where: { name: roleName } });
        if (!existing) {
            await prisma.role.create({ data: { name: roleName } });
        }
    }
    console.log('✅ Roles seeded.');

    // 3️⃣ Create Pages
    // const pages = [
    //     { name: 'Dashboard', path: '/dashboard' },
    //     { name: 'Projects', path: '/projects' },
    //     { name: 'Reports', path: '/reports' },
    //     { name: 'Management', path: '/management' },
    //     { name: 'Billing', path: '/billing' },
    //     { name: 'Admin', path: '/admin' }
    // ];

    // for (const page of pages) {
    //     const existing = await prisma.page.findUnique({ where: { name: page.name } });
    //     if (!existing) {
    //         await prisma.page.create({ data: { ...page, isActive: true } });
    //     }
    // }
    // console.log('✅ Pages seeded.');

    // 4️⃣ Create Users
    // const users = [
    //     { name: 'Faisal', email: 'irkfaisal@gmail.com', password: 'irkfaisal', role: 'superAdmin' }
    // ];

    // for (const user of users) {
    //     const existingUser = await prisma.user.findUnique({ where: { email: user.email } });
    //     if (!existingUser) {
    //         // Get Role
    //         const roleRecord = await prisma.role.findUnique({ where: { name: user.role } });
    //         if (!roleRecord) throw new Error(`Role ${user.role} not found`);

    //         // Create user
    //         const userRecord = await prisma.user.create({
    //             data: {
    //                 name: user.name,
    //                 email: user.email,
    //                 password: user.password,
    //                 roleId: roleRecord.id
    //             }
    //         });

    //         // If Super Admin, assign all page permissions
    //         if (user.role === 'superAdmin') {
    //             const allPages = await prisma.page.findMany();
    //             for (const page of allPages) {
    //                 await prisma.permission.create({
    //                     data: {
    //                         userId: userRecord.id,
    //                         pageId: page.id,
    //                         access: true
    //                     }
    //                 });
    //             }

    //             // Assign access to all franchisees
    //             const allFranchisees = await prisma.franchisee.findMany();
    //             for (const f of allFranchisees) {
    //                 await prisma.franchisee.create({
    //                     data: {
    //                         userId: userRecord.id,
    //                         franchiseeId: f.id,
    //                         canView: true
    //                     }
    //                 });
    //             }
    //         }
    //     }
    // }

    // console.log('✅ Users, permissions, and franchisee access seeded.');
}

main()
    .catch(e => console.error(e))
    .finally(() => prisma.$disconnect());
