<template>
  <div id="app bg-blue-500">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
  mounted() {
    this.$store.getters.getCartFromLocalStorage
  },
};
</script>

<style lang="scss"></style>
