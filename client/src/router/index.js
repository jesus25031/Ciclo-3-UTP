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
    {
        path: "/noticias",
        name: "Noticias",
        component: () => import("../components/Inicio/noticias.vue"),
    },
    {
        path: "/grupo",
        name: "Grupo",
        component: () => import("../components/Inicio/grupo.vue"),
    },
    {
        path: "/contacto",
        name: "Contacto",
        component: () => import("../components/Inicio/contacto.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../components/Login/login.vue"),
    },
    {
        path: "/admin",
        name: "Administrador",
        component: () => import("../components/Administrador/administrador-inventario.vue"),
    },
    {
        path: "/admin/compartir",
        name: "Admin Compartir",
        component: () => import("../components/Administrador/administrador-compartir.vue"),
    },
    {
        path: "/admin/actividad",
        name: "Admin Actividad",
        component: () => import("../components/Administrador/administrador-actividad.vue"),
    },

    {
        path: "/operario",
        name: "Operario inicio",
        component: () => import("../components/Operario/operario-ventas.vue"),
    },
    {
        path: "/operario/consultar",
        name: "Operario consultar",
        component: () => import("../components/Operario/operario-consultar.vue"),
    },
    
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;