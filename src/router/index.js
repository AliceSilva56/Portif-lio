
import { createRouter, createWebHistory } from 'vue-router'

import Miauh from '../views/projetos/Miauh.vue'
import Aly from '../views/projetos/Aly.vue'
import Fluxo from '../views/projetos/Fluxo.vue'
import Guardiao from '../views/projetos/Guardiao.vue'
import Neon from '../views/projetos/Neon.vue'
import Costura from '../views/projetos/Costura.vue'

import Home from '../views/Home.vue'
import Contatos from '../views/Contatos.vue'
import Certificados from '../views/Certificados.vue'
import Blog from '../views/Blog.vue'

import FlutterBasico from '../views/posts/FlutterBasico.vue'
import FlutterDarkTech from '../views/posts/FlutterDarkTech.vue'
import InicioDev from '@/views/posts/InicioDev.vue'
import VueDicas from '@/views/posts/VueDicas.vue'

import CurriculoView from '@/views/CurriculoView.vue'

import '../components/Card.vue'

const routes = [
  // Páginas principais
  { path: '/', name: 'Home', component: Home },
  { path: '/contatos', name: 'Contatos', component: Contatos },
  { path: '/certificados', name: 'Certificados', component: Certificados },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/card', name: 'Card', component: () => import('../components/Card.vue') },

  // Projetos
  { path: '/miauh', name: 'Miauh', component: Miauh },
  { path: '/aly', name: 'Aly', component: Aly },
  { path: '/fluxo', name: 'Fluxo', component: Fluxo },
  { path: '/guardiao', name: 'Guardiao', component: Guardiao },
  { path: '/neon', name: 'Neon', component: Neon },
  { path: '/costura', name: 'Costura', component: Costura },

// Posts
  { path: '/flutter-basico', name: 'FlutterBasico', component: FlutterBasico },
  { path: '/flutter-dark-tech', name: 'FlutterDarkTech', component: FlutterDarkTech },
  { path: '/inicio-dev', name: 'InicioDev', component: InicioDev },
  { path: '/vue-dicas', name: 'VueDicas', component: VueDicas },
  { path: '/curriculo-view', name: 'CurriculoView', component: CurriculoView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
