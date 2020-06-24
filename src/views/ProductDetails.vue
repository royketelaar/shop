<template>
  <div class="container mx-auto mt-20">
    <h1 class="text-4xl font-bold mb-8">{{ name }}</h1>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    name: String,
  } 
};

</script>

<style lang="scss" scoped>

</style>