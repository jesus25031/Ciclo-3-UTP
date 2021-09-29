import Vue from 'vue'
import Router from 'vue-router'
import CrearCuenta from '@/components/CrearCuenta.vue'
import OperarioPerfil from '@/components/OperarioPerfil.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: CrearCuenta,
  },
  {
    path: '/Perfil',
    name: 'Perfil',
    component: OperarioPerfil,
  }
]

const router = new router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

