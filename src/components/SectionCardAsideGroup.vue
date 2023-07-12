<template>
    <ul class="aside__list">
        <SectionCardAside class="" v-for="product in products" :key="product.id" :product ="product"></SectionCardAside>
    </ul>
</template>

<script>
import SectionCardAside from './SectionCardAside.vue';


  export default {
      props: ['products'],
      components: { SectionCardAside },
      
  }
</script>