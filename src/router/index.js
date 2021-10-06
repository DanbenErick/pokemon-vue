import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Pokemon',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pokemon.vue')
  },
  {
    path: '/favoritos',
    name: 'PokemonFavoritos',
    component: () => import(/* webpackChunkName: "about" */ '../views/PokemonFavoritos.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
