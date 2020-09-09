<template>
  <div class="cart-modal absolute top-0 right-0 mr-6 pb-3 mt-16 shadow bg-white rounded">
    <div class="products mb-4" v-if="cart.length">
      <div class="product flex justify-between items-center" v-for="product in cart" :key="product.id">
        <img
          :src="require('../assets/images/' + product.image.formats.small.url)"
          class="mr-4 p-2"
          alt=""
        />
        <span class="name font-bold">{{ product.name }}</span>
        <button class="text-3xl mr-5" @click="decrement(product)">-</button>
        <button class="text-3xl mr-1" @click="increment(product)">+</button>
        <span class="mr-4">{{ product.quantity }}</span>
      </div>
    </div>
    <div class="mb-4 p-4 text-lg" v-if="!cart.length">There are no products, please add some first.</div>
    <router-link to="/cart" class="px-4 py-2 bg-teal-700 text-white rounded float-right mr-3">Go to cart</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    increment(product) {
      this.$store.dispatch("increment", product.id);
    },
    decrement(product) {
      this.$store.dispatch("decrement", product.id);
    },
    removeFromCart(product) {
      this.$store.dispatch("removeFromCart", product.id);
    },
    close() {
      console.log('hoi')
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    subTotal() {
      return this.cart.reduce(
        (sum, { price, quantity }) => sum + price * quantity,
        0
      );
    },
    taxes() {
      return this.subTotal * 0.21;
    },
    total() {
      return this.subTotal + this.taxes;
    },
  },
};
</script>

<style scoped lang="scss">
.name {
  width: 250px;
}
img {
  width: 80px;
  height: 80px;
}
</style>
