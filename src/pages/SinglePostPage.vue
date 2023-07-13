<template>
    <main class="main__single">
        <div class="container">
            <div class="content__top">
                <ul class="breadcrumbs">
                  <li class="breadcrumbs__item">
                    <router-link class="breadcrumbs__link" :to="{name:'post'}">
                      Каталог
                    </router-link>
                  </li>
                  <li class="breadcrumbs__item">
                    <router-link class="breadcrumbs__link" :to="{name:'post'}">
                      {{ category.title }}
                    </router-link>
                  </li>
                  <li class="breadcrumbs__item">
                    <a class="breadcrumbs__link">
                      {{ product.navTitle }}
                    </a>
                  </li>
                </ul>
              </div>

              <section class="item">
                <div class="item__pics pics">
                  <div class="pics__wrapper">
                    <img style="max-width: 100%;" :src="product.image"  :alt="product.title">
                  </div>
                </div>
                <div class="item__info">
                  <h2 class="item__title">
                    {{ product.title }}
                  </h2>
                  <div class="item__form">
                  </div>
                </div>
                  <div class="item__content">
                    <p> {{ product.text }}</p>
                    <p>{{ product.text }}</p>
                    <p>{{ product.text }}</p>
                  </div>
              </section>
        </div>
    </main>
</template>

<script>

import products from '@/data/products';
import categories from '@/data/categories';
import gotoPage from '@/helpers/gotoPage';
import numberFormat  from '@/helpers/numberFormat';
    export default {
    data() {
        return {
            productAmount: 1
        };
    },
    filters: {
        numberFormat
    },
    computed: {
        product() {
            return products.find(product => product.id === +this.$route.params.id);
        },
        category() {
            return categories.find(category => category.id === this.product.categoryId);
        },
       
    },
    methods: {
        gotoPage,
    },
}
</script>