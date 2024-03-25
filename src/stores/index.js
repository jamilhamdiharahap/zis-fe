import { defineStore } from 'pinia';
import { loginAuthService, getMenuService } from '../service/authService.js';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loading: false,
        message: "",
        alert: false,
        menuActive: [],
        isLoggin: $cookies.get("isAuth"),
    }),

    actions: {
        async menu(paramId) {
            const response = await getMenuService(paramId);
            if (response.status == 2000) {
                this.menuActive = response.data
            }
        },

        setAlert(status) {
            this.alert = status;
        },

        async login({ router, payload }) {
            this.loading = true;
            const response = await loginAuthService(payload);
            if (response.status == 2000) {

                setTimeout(() => {
                    this.loading = false;
                    this.message = response.message;
                }, 1000);

                setTimeout(() => {
                    this.message = "";
                }, 500);

                let auth = {
                    token: response.token,
                    isLoggin: true,
                    user: response.data
                }

                localStorage.setItem("token", auth.token);
                localStorage.setItem("name", auth.user.name);
                localStorage.setItem("role", auth.user.roleName);
                localStorage.setItem("roleId", auth.user.roleId);

                if (response.data?.roleName == "Admin") {
                    router.push("/zis/dashboard");
                }
                if (response.data?.roleName == "User") {
                    router.push({ path: "/zis" });
                }
            } else {
                setTimeout(() => {
                    this.loading = false;
                    this.setAlert(true);
                    this.message = response.message;
                }, 1000);

                this.setAlert(false);
                this.message = "";
                router.push({ path: "/login" });
            }
        },

        async logout(router) {
            localStorage.clear();
            router.push("/login");
        }
    },

    getters: {
        getLoading: (state) => state.loading,
        getMessage: (state) => state.message,
        getMenu: (state) => state.menuActive,
        getAlert: (state) => state.alert,
    },
});
