// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import Home from './paginas/Home.vue'
const Contato = {template: '<p>Página de Contato</p>'}
const SemPagina = {template: '<p>Página não encontrada</p>'}

Vue.config.productionTip = false

const routes = [
  {path: '/', component:Home},
  {path: '/contato', component:Contato}
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
