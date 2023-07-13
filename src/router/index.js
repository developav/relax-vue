import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import ArticlePage from '@/pages/ArticlePage.vue';
import ContactPage from '@/pages/ContactPage.vue';
import PostPage from '@/pages/PostPage.vue';
import TagPage from '@/pages/TagPage.vue';
import ThemePage from '@/pages/ThemePage.vue';
import SinglePostPage from '@/pages/SinglePostPage.vue'


Vue.use(VueRouter);

const routes = [
    { name: 'main', component: MainPage, path: '/', meta: {layout: "default-layout", transition: 'slide-left'}},
    { name: 'article', component: ArticlePage, path: '/article' },
    { name: 'contact', component: ContactPage, path: '/contact' },
    {name: 'product', component: SinglePostPage, path: '/product/:id', meta: {layout: "post-layout"}},
    { name: 'post', component: PostPage, path: '/post', meta: {layout: "post-layout"} },
    { name: 'tag', component: TagPage, path: '/tags' },
    { name: 'theme', component: ThemePage, path: '/theme' },
];

const router = new VueRouter({
  routes,
});

export default router;
