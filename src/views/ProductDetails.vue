<template>
  <div class="container mx-auto mt-20" v-if="product.name">
    <h1 class="text-4xl font-bold mb-8">{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <span class="price text-2xl block pb-4"> € {{ product.price }} </span>
    <img
      v-if="product.image"
      :src="require('../assets/images/' + product.image.url)"
      class="mb-2"
      alt=""
    />
  </div>
</template>

<script>
import products from '../products.json'

export default {
  data() {
    return {
      products: products,
      product: Object,
      recentlyViewedProducts: [],
      parsedProductId: Number
    };
  },
  props: {
    productId: [String, Number]
  },
  mounted() {
    if (localStorage.getItem("recentlyViewedProducts")) {
      try {
        this.recentlyViewedProducts = JSON.parse(localStorage.getItem("recentlyViewedProducts"));
      } catch (e) {
        localStorage.removeItem("recentlyViewedProducts");
      }
    }
    this.parsedProductId = parseInt(this.productId)
    const productKey = Object.keys(this.products).find(key => this.products[key].id === this.parsedProductId);
    this.product = this.products[productKey]
    this.addRecentlyViewedProduct()
  },
  methods: {
    addRecentlyViewedProduct() {
      let exists = false;
      this.recentlyViewedProducts.map((product) => {
        if (product.id === this.product.id) {
          exists = true;
        }
      });
      if (!exists) {
        this.recentlyViewedProducts.push(this.product);
        if (this.recentlyViewedProducts.length > 4) {
          this.recentlyViewedProducts = this.recentlyViewedProducts.slice(-4);
        }
        this.saveRecentlyViewedProducts();
      }
    },
    saveRecentlyViewedProducts() {
      const parsed = JSON.stringify(this.recentlyViewedProducts);
      localStorage.setItem("recentlyViewedProducts", parsed);
    }
  }
};
</script>

<style lang="scss" scoped></style>
