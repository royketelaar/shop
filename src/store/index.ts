import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [] as any
  },
  getters: {
    getCartFromLocalStorage (state) {
      state.cart = JSON.parse(localStorage.getItem("cart") || '{}');
    }
  },
  mutations: {
    addToCart (state, product) {
      product.quantity++
      state.cart.push(product)
    },
    removeFromCart (state, productId) {
      const i = state.cart.map((product: { id: any }) => product.id).indexOf(productId.id);
      state.cart.splice(i, 1);
    },
    increment (state, productId) {
      state.cart[productId].quantity++
    },
    decrement (state, productId) {
      state.cart[productId].quantity--
    },
    saveCartToLocalStorage (state) {
      const parsed = JSON.stringify(state.cart);
      localStorage.setItem("cart", parsed);
    }
  },
  actions: {
    addToCart (context, product) {
      const key = Object.keys(this.state.cart).find(key => this.state.cart[key].id === product.id);
      if (!key) {
        context.commit('addToCart', product)
      } else {
        context.commit('increment', key)
      }
      context.commit('saveCartToLocalStorage')
    },
    removeFromCart (context, productId) {
      const key = Object.keys(this.state.cart).find(key => this.state.cart[key].id === productId)
      context.commit('removeFromCart', key)
      context.commit('saveCartToLocalStorage')
    },
    increment (context, productId) {
      const key = Object.keys(this.state.cart).find(key => this.state.cart[key].id === productId);
      context.commit('increment', key)
      context.commit('saveCartToLocalStorage')
    },
    decrement (context, productId) {
      const key: any = Object.keys(this.state.cart).find(key => this.state.cart[key].id === productId);
      if (this.state.cart[key].quantity > 1) {
        context.commit('decrement', key)
      } else {
        context.commit('removeFromCart' , key)
      }
      context.commit('saveCartToLocalStorage')
    },
    saveCartToLocalStorage (context) {
      context.commit('saveCartToLocalStorage')
    }
  },
  modules: {
  }
})
