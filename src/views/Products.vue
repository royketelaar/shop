<template>
  <div class="products">
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}
      </li>
    </ul>
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
