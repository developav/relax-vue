<template>
    <main>
        <div class="container">
        <section class="section">
            <SectionGroup :products ="products" @gotoPage="(pageName, pageParams)"/>
            <aside class="aside">
                <h3 class="aside__heading">Новые посты</h3>
                <span class="aside__heading-underline"></span>
            <SectionCardAsideGroup :products ="products" @gotoPage="(pageName, pageParams)"/>
            <form class="aside__form" action="">
                <input class="aside__input search" type="text" placeholder="Найти">
                <button class="aside__button" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="19px" viewBox="0 0 512 512">
                        <g clip-path="url(#clip0)">
                            <path fill="#fff" stroke="#B59F5B" d="M373.403 339.292l-.29.344.312.324 121.857 126.737c10.117 10.524 9.782 27.302-.733 37.42l.347.36-.347-.36c-4.948 4.763-11.466 7.383-18.338 7.383-7.261 0-14.034-2.884-19.072-8.116L334.357 375.686l-.297-.309-.351.246c-34.78 24.442-75.457 37.317-118.145 37.317-113.708 0-206.22-92.513-206.22-206.22C9.344 93.012 101.856.5 215.564.5c113.707 0 206.22 92.512 206.22 206.22 0 48.668-17.125 95.416-48.381 132.572zm-4.546-132.572c0-84.528-68.765-153.293-153.293-153.293S62.271 122.192 62.271 206.72s68.765 153.293 153.293 153.293 153.293-68.765 153.293-153.293z"/>
                        </g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h512v512H0z"/></clipPath></defs></svg>
                </button>
            </form>
            <h3 class="aside__heading aside__heading-send">Рассылка</h3>
            <form class="aside__form-adress" action="">
                <input class="aside__input adress" type="text" placeholder="Ваш email-адрес">
                <button class="aside__button-adress" type="submit">Подписаться</button>
            </form>
            <h3 class="aside__heading aside__heading-tag">Теги</h3>
            <ul class="aside__list-tag">
                <li class="aside__list-tag-item">
                    <a class="aside__list-link" href="">fashion</a>
                </li>
                <li class="aside__list-tag-item">
                    <a class="aside__list-link" href="">music</a>
                </li>
                <li class="aside__list-tag-item">
                    <a class="aside__list-link" href="">lifestyle</a>
                </li>
                <li class="aside__list-tag-item">
                    <a class="aside__list-link" href="">art</a>
                </li>
                <li class="aside__list-tag-item">
                    <a class="aside__list-link" href="">interior</a>
                </li>
                <li class="aside__list-tag-item">
                    <a class="aside__list-link" href="">travel</a>
                </li>
                <li class="aside__list-tag-item">
                    <a class="aside__list-link" href="">food</a>
                </li>
                <li class="aside__list-tag-item">
                    <a class="aside__list-link" href="">health</a>
                </li>
            </ul>

            <h3 class="aside__heading aside__heading-theme">Темы</h3>
            <ul class="aside__list-theme">
                <li class="aside__list-theme-item">
                    <a class="aside__list-theme-link" href="">Красота</a>
                  <span class="aside__list-count">12</span>
                </li>
                <li class="aside__list-theme-item">
                    <a class="aside__list-theme-link" href="">Здоровье</a>
                  <span class="aside__list-count">4</span>
                </li>
                <li class="aside__list-theme-item">
                    <a class="aside__list-theme-link" href="">Образ жизни</a>
                  <span class="aside__list-count">145</span>
                </li>
                <li class="aside__list-theme-item">
                    <a class="aside__list-theme-link" href="">Музыка</a>
                  <span class="aside__list-count">28</span>
                </li>
                <li class="aside__list-theme-item">
                    <a class="aside__list-theme-link" href="">Спорт</a>
                  <span class="aside__list-count">62</span>
                </li>
                <li class="aside__list-theme-item">
                    <a class="aside__list-theme-link" href="">Йога</a>
                  <span class="aside__list-count">8</span>
                </li>
            </ul>
            </aside>
        </section>
        </div>
      </main>
</template>

<script>
import products from '@/data/products';
import SectionGroup from '@/components/SectionGroup.vue';
import SectionCardAsideGroup from '@/components/SectionCardAsideGroup.vue';
export default {
  components: {SectionGroup, SectionCardAsideGroup},
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