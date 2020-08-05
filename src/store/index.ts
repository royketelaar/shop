import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [] as any
  },
  mutations: {
    addToCart (state, product) {
      state.cart[product.id] = product
    },
    increment (state, productId) {
      state.cart[productId].quantity++
    },
    decrement (state, productId) {
      state.cart[productId].quantity--
    }
  },
  actions: {
    addToCart (context, product) {
      context.commit('addToCart', product)
    },
    increment (context, productId) {
      if (this.state.cart[productId]) {
        context.commit('increment', productId)
      }
    },
    decrement (context, productId) {
      if (this.state.cart[productId]) {
        context.commit('decrement', productId)
      }
    }
  },
  modules: {
  }
})
