<template>
    <li class="section__card">
        <router-link :to="{name:'product', params: {id: product.id}}">
          <img :src="product.image" :alt="product.title">
        </router-link>
        <div class="section__card-content">
          <a class="section__card-links" href="#">{{ product.category }}</a>
          <a class="section__card-links" href="#">{{ product.category2 }}</a>
          <a class="section__card-links" href="#">{{ product.category3 }}</a>
          <h2 class="section__card-head">
            {{ product.headTitle }}
          </h2>
          <span class="section__card-date">{{ product.data }}</span>
          <span class="section__card-autor">{{ product.autor }}</span>
          <p class="section__card-text">{{ product.title }}</p>
        </div>
           
    </li>
</template>
<script>
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';
    export default {
    data() {
        return {};
    },
    methods: {
        gotoPage
    },
    props: ["product"],
    filters: {
        numberFormat
    },
}
</script>
