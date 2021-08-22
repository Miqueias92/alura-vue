import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import vueRouter from 'vue-router';
import { routes } from './routes';

Vue.use(VueResource);
Vue.use(vueRouter);

const router = new vueRouter({ 
  routes,
  mode: "history", // remove a # da barra de navegação 
}) 

// localhot:8080/#/  | localhot:8080/#/cadastro

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})