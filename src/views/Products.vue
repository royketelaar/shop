<template>
  <div class="products container mx-auto mt-20">
    <h1 class="text-4xl font-bold mb-8">Products</h1>
    <div class="grid grid-rows-4 grid-flow-col gap-12">
      <div v-for="product in products" :key="product.id"
        class="shop-item shadow hover:shadow-lg transition cursor-pointer">
        <img 
          :src="`http://localhost:1337${product.image.formats.medium.url}`"
          class="mb-2"
          alt="">
        <h2 class="text-teal-700 text-lg font-bold px-4 pt-2">{{ product.name }}</h2>
        <span class="price text-2xl block px-4 pb-4">
          € {{ product.price }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      products: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:1337/Products')
      .then(response => (this.products = response.data))
  }
};
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center;
  }
  .shop-item {

  }

  .transition {
    transition: .2s;
  }
</style>