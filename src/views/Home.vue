<template>
  <div class="products container mx-auto mt-20">
    <featured-products :products="products" class="mb-8" /> 
    <recently-viewed-products />
  </div>
</template>

<script>
import axios from 'axios';
import FeaturedProducts from "@/components/FeaturedProducts.vue";
import RecentlyViewedProducts from "@/components/RecentlyViewedProducts.vue";
import json from '../products.json'

export default {
  data () {
    return {
      products: json,
    }
  },
  mounted () {
    // axios
    //   .get('http://localhost:1337/Products')
    //   .then(response => (this.products = response.data))
  },
  components: {
    FeaturedProducts,
    RecentlyViewedProducts
  }
};
</script>

<style lang="scss" scoped>
  .transition {
    transition: .2s;
  }
</style>