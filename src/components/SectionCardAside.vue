<template>
    <li class="aside__list-item">
        <a class="aside__item-link" href="">
            <div class="aside__item-group">
                <router-link  :to="{name:'product', params: {id: product.id}}">
                    <img class="aside__item-img" :src="product.imageSmall" :alt="product.title">
                  </router-link>
            <div class="aside__item-text">
                <span class="aside__item-date">{{ product.data }}</span>
                <h3 class="aside__item-head"><a class="aside__item-head-link" href="#">{{ product.headTitle }}</a></h3>
            </div>
            </div>
        </a>
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