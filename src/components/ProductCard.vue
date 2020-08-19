<template>
  <div>
    <router-link
      :to="{ name: 'productDetails', params: { productId: product.id } }"
    >
      <img
        :src="require('../assets/images/' + product.image.formats.medium.url)"
        class="mb-2"
        alt=""
      />
    </router-link>
    <div class="flex justify-between items-center px-4 pt-2 pb-4">
      <router-link
        :to="{ name: 'productDetails', params: { productId: product.id } }"
      >
        <div>
          <h2 class="text-teal-700 text-lg font-bold">
            {{ product.name }}
          </h2>
          <span class="price text-xl block"> € {{ product.price }} </span>
        </div>
      </router-link>

      <div>
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center text-sm"
          v-on:click="addToCart()"
        >
          <span class="material-icons">
            add_shopping_cart
          </span>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  props: {
    product: Object,
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', this.product)
    },
    increment() {
      this.$store.dispatch('increment', this.product.id)
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
}
</style>
