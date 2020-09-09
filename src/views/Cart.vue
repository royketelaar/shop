<template>
  <div class="cart container mx-auto mt-20">
    <h1 class="text-4xl font-bold mb-8">Cart</h1>
    <table class="table-auto w-full text-left">
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Quantity</th>
          <th class="text-right">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in cart" :key="product.id">
          <td>
            <img
              :src="require('../assets/images/' + product.image.formats.small.url)"
              class=""
              alt=""
            />
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.quantity }}
            <button class="text-3xl" @click="increment(product)">+</button>
            <button class="text-3xl" @click="decrement(product)">-</button>
            <button class="text-red-500" @click="removeFromCart(product)">Remove</button>
          </td>
          <td class="text-right">{{ (product.price * product.quantity).toFixed(2) }}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td class="text-right">Subtotal: € {{ subTotal.toFixed(2) }}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td class="text-right">Taxes: € {{ taxes.toFixed(2) }}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td class="text-right font-bold">Total: € {{ total.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>

export default {
  methods: {
    increment(product) {
      this.$store.dispatch('increment', product.id)
    },
    decrement(product) {
      this.$store.dispatch('decrement', product.id)
    },
    removeFromCart(product) {
      this.$store.dispatch('removeFromCart', product.id)
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    subTotal() {
      return this.cart.reduce((sum, {price, quantity }) => sum + price * quantity, 0)
    },
    taxes() {
      return (this.subTotal * 0.21)
    },
    total() {
      return this.subTotal + this.taxes
    }
  }
}

</script>

<style lang="scss" scoped>
  td, th {
    padding: 1rem;
    border-bottom: 1px solid lightgray;
  }
  img {
    border-radius: 8px;
    height: 75px;
    width: 100px;
    object-fit: cover;
  }

</style>