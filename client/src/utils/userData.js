export const transformUser = (user) => {
    // Extract franchisee names
    const franchisees = user.franchisees.map(f => f.name);

    // Build permissions object (keyed by path for O(1) lookup)
    const permissions = {};
    user.permissions.forEach(p => {
        const { path, name } = p.page;
        permissions[path] = {
            id: p.id,
            name,
            canView: p.canView
        };
    });

    // Build sidebar array directly from permissions
    const sidebar = user.permissions.map(p => ({
        name: p.page.name,
        path: p.page.path
    }));

    // Return optimized userAuth object
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role.name,
        isActive: user.isActive,
        franchisees,
        permissions,
        sidebar
    };
}
