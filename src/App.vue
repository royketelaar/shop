<template>
  <div id="app bg-blue-500">
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
</style>
