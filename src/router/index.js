
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Miauh from '../views/Miauh.vue'
import Contatos from '../views/Contatos.vue'
import Certificados from '../views/Certificados.vue'
import Blog from '../views/Blog.vue'
import Aly from '../views/Aly.vue'
import Fluxo from '../views/Fluxo.vue'
import Guardiao from '../views/Guardiao.vue'
import Neon from '../views/Neon.vue'
import Costura from '../views/Costura.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contatos', name: 'Contatos', component: Contatos },
  { path: '/certificados', name: 'Certificados', component: Certificados },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/miauh', name: 'Miauh', component: Miauh },
  { path: '/aly', name: 'Aly', component: Aly },
  { path: '/fluxo', name: 'Fluxo', component: Fluxo },
  { path: '/guardiao', name: 'Guardiao', component: Guardiao },
  { path: '/neon', name: 'Neon', component: Neon },
  { path: '/costura', name: 'Costura', component: Costura },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
