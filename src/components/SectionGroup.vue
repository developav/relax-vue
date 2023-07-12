<template>
    <ul class="section__group">
        <SectionCard  class="catalog__item" v-for="product in products" :key="product.id" :product ="product"></SectionCard>
    </ul>
    
</template>

<script>
import SectionCard from './SectionCard.vue';


  export default {
      props: ['products'],
      components: { SectionCard  },
      
  }
</script>