import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Default from './layout/Default';
import PostLayout from './layout/PostLayout'
import Tabs from 'vue-tabs-component';

Vue.use(Tabs);
Vue.component("default-layout", Default);
Vue.component("post-layout" , PostLayout)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
