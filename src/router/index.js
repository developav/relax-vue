/* eslint-disable import/order */
import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import SectionCard from '@/components/SectionCard.vue';

Vue.use(VueRouter);

const routes = [
  { name: 'MainPage', component: MainPage, path: '/' },
  { path: '/about', name: 'card', component: SectionCard },
];

const router = new VueRouter({
  routes,
});

export default router;
