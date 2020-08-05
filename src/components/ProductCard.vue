<template>
  <div>
    <router-link
      :to="{ name: 'productDetails', params: { product_id: product.id } }"
    >
      <img
        :src="`http://localhost:1337${product.image.formats.medium.url}`"
        class="mb-2"
        alt=""
      />
    </router-link>
    <div class="flex justify-between items-center px-4 pt-2 pb-4">
      <router-link
        :to="{ name: 'productDetails', params: { product_id: product.id } }"
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

      // // Getting cart from localstorage
      // this.cart = JSON.parse(localStorage.getItem("cart"));
      
      // // Adding item to cart, or adding quantity if it already exists
      // let exists = false;
      // if (this.cart == null) {
      //   // Add empty cart and add current product if cart doesn't exist
      //   const parsed = JSON.stringify(this.cart = []);
      //   localStorage.setItem("cart", parsed);
      //   this.product.quantity++
      //   this.cart.push(this.product);
      // } else {
      //   // Loop trough products in cart and add quantity if it's already there
      //   this.cart.map((product) => {
      //     if (product.id === this.product.id) {
      //       exists = true;
      //       product.quantity++;
      //     }
      //   });
      //   // If it doesn't exist yet, just add to cart
      //   if (!exists) {
      //     this.product.quantity++;
      //     this.cart.push(this.product);
      //   }
      // }

      // Saving local object to localstorage
      this.saveCart();
    },
    increment() {
      this.$store.dispatch('increment', this.product.id)
    },
    saveCart() {
      const parsed = JSON.stringify(this.cart);
      localStorage.setItem("cart", parsed);
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
