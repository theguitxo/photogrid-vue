import Vue from 'vue';
import App from './App.vue';
import store from './plugins/store';
import vuetify from './plugins/vuetify';
import './plugins/lazyload';

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
