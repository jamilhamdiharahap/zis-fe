export const roleGuard = (to, from, next) => {

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
        next("/login");
        return;
    }

    const adminRoutes = ["/zis/dashboard", "/zis/dashboard/category"]
    const userRoutes = ["/zis", "/zis/testimoni"]

    const allowedRoles = to.meta.allowedRoles || [];

    if (allowedRoles.includes(role)) {
        next();
    } else {
        if (userRoutes.includes(to.path) && !role?.includes('User')) {
            return next('/error');
        }

        if (adminRoutes.includes(to.path) && !role?.includes('Admin')) {
            return next('/error');
        }
        next("/login")
    }
};