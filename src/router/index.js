import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import ArticlePage from '@/pages/ArticlePage.vue';
import ContactPage from '@/pages/ContactPage.vue';
import PostPage from '@/pages/PostPage.vue';
import TagPage from '@/pages/TagPage.vue';
import ThemePage from '@/pages/ThemePage.vue';


Vue.use(VueRouter);

const routes = [
    { name: 'MainPage', component: MainPage, path: '/' },
    { name: 'ArticlePage', component: ArticlePage, path: '/article' },
    { name: 'ContactPage', component: ContactPage, path: '/contact' },
    { name: 'PostPage', component: PostPage, path: '/post' },
    { name: 'TagPage', component: TagPage, path: '/tags' },
    { name: 'ThemePage', component: ThemePage, path: '/theme' },
];

const router = new VueRouter({
  routes,
});

export default router;
