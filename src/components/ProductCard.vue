<template>
  <router-link
    :to="{ name: 'productDetails', params: { product_id: product.id } }"
  >
    <img
      :src="`http://localhost:1337${product.image.formats.medium.url}`"
      class="mb-2"
      alt=""
    />
    <h2 class="text-teal-700 text-lg font-bold px-4 pt-2">
      {{ product.name }}
    </h2>
    <span class="price text-2xl block px-4 pb-4"> € {{ product.price }} </span>
  </router-link>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
}
</style>
