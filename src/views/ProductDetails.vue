<template>
  <div class="container mx-auto mt-20">
    <h1 class="text-4xl font-bold mb-8">{{ product.name }}</h1>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['product_id'],
  data () {
    return {
      product: null
    }
  },

  mounted () {
    axios
      .get('http://localhost:1337/Products/' + this.product_id)
      .then(response => (this.product = response.data))
  }
}

</script>

<style lang="scss" scoped>

</style>