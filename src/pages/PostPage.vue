<template>
    <div class="container">
        <ul class="section__post">
            <SectionGroup :products ="products" @gotoPage="(pageName, pageParams)"/>
        </ul>
    </div>
    
</template>
<script>
import products from '@/data/products';
import SectionGroup from '@/components/SectionGroup.vue';
export default {
  components: {SectionGroup},
  data() {
    return {
        page: 1,
        productsPerPage: 6
    }
  },
  computed: {
    filteredProducts(){
      let filteredProducts = products;
      return filteredProducts;
    },
    products(){
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts(){
      return this.filteredProducts.length;
    }
  }
};
</script>