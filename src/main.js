import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResouce from 'vue-resource';

import App from './App.vue'
import { routes } from "./routes";
import store from './store/store'

Vue.use(VueRouter);
Vue.use(VueResouce);
Vue.config.productionTip = false

Vue.http.options.root = 'https://stocks-4e8c4.firebaseio.com/';

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
