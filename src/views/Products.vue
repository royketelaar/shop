<template>
  <div class="products container mx-auto mt-20">
    <h1 class="text-4xl font-bold mb-8">Products</h1>
    <div class="grid grid-rows-4 grid-flow-col gap-12">
      <div v-for="product in products" :key="product.id"
        class="shop-item shadow hover:shadow-lg transition cursor-pointer">
        <product-card :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProductCard from "@/components/ProductCard.vue";

import json from '../products.json'

export default {
  data () {
    return {
      products: json
    }
  },
  mounted () {
    // axios
    //   .get('http://localhost:1337/Products')
    //   .then(response => (this.products = response.data))
  },
  components: {
    ProductCard
  }
};
</script>

<style lang="scss" scoped>
  .transition {
    transition: .2s;
  }
</style>