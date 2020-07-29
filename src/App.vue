<template>
  <div id="app bg-blue-500">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  data() {
    return {
      cart: [],
    };
  },
  components: {
    Header,
  },
  methods: {
    initializeCart() {
      if (!localStorage.getItem("cart")) {
        const parsed = JSON.stringify(this.cart);
        localStorage.setItem("cart", parsed);
      }
    },
  },
  created() {
    this.initializeCart();
  },
};
</script>

<style lang="scss"></style>
