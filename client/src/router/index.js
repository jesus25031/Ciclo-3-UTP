import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [

    //Routes Inicio
    {
        path: "/",
        name: "Inicio",
        component: () => import("../components/Inicio/inicio.vue"),
    },
    {
        path: "/servicios",
        name: "Servicios",
        component: () => import("../components/Inicio/servicios.vue"),
    },
    // {
    //     path: "/login",
    //     name: "Noticias",
    //     component: () => import("../components/login"),
    // },
    // {
    //     path: "/login",
    //     name: "Grupo",
    //     component: () => import("../components/login"),
    // },
    // {
    //     path: "/login",
    //     name: "Contacto",
    //     component: () => import("../components/login"),
    // },

    // //Routes Login
    // {
    //     path: "/login",
    //     name: "login",
    //     component: () => import("../components/login"),
    // },
    // {
    //     path: "/login/recuperarContrasena",
    //     name: "login-recuperarContraseña",
    //     component: () => import("../components/login-recuperarContr.vue"),
    // },
    // {
    //     path: "/login_crearCuenta",
    //     name: "login",
    //     component: () => import("../components/login"),
    // },

    // //Routes Admin
    // {
    //     path: "/",
    //     name: "Admin-inventario",
    //     component: () => import("../components/administrador-inventario"),
    // },
    // {
    //     path: "/admin-compartir",
    //     name: "admin-compartir",
    //     component: () => import("../components/administrador-compartir"),
    // },

    // //Routes Operario
    // {
    //     path: "/operario-consultar",
    //     name: "operario-consultar",
    //     component: () => import("../components/operario-consultar"),
    // },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;