import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Pokemon',
    component: () => import(/* webpackChunkName: "Pokemon" */ '../views/Pokemon.vue')
  },
  {
    path: '/favoritos',
    name: 'PokemonFavoritos',
    component: () => import(/* webpackChunkName: "PokemonFavorito" */ '../views/PokemonFavoritos.vue')
  },
  {
    path: '/detalles/:id_or_name',
    name: 'DetallePokemon',
    component: () => import (/* webpackChunkName: "DetallePokemon" */ '../views/DetallePokemon.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
