<template>
  <div class="cart container mx-auto mt-20">
    <h1 class="text-4xl font-bold mb-8">Cart</h1>
    <table v-for="product in cart" :key="product.id">
      <tr>
        <td>{{ product.name }}</td>
        <td>{{ product.quantity }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      cart: []
    }
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.cart = JSON.parse(localStorage.getItem("cart"));
    }
  }
}
</script>

<style>

</style>