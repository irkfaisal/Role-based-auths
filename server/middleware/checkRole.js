
export const authorizeRole = (allowedRoles) => {
    return (req, res, next) => {
        const user = req.user;
        console.log(user)

        if (!user || !allowedRoles.includes(user.role.name)) {
            return res.status(403).json({ message: 'Forbidden: You do not have access' });
        }

        next();
    };
};
