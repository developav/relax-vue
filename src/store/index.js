import Vue from 'vue';
import Vuex from 'vuex';
import products from '@/data/products';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
      cartDetalProducts(state){
          return state.cartProducts.map(item =>{
              return {
                  ...item,
                  product: products.find(p => p.id === item.productId)
              }
          })
      },
      cartTotalPrice(state, getters){
          return getters.cartDetalProducts.reduce((acc, item)=>(item.product.price * item.amount) + acc, 0);
      }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
