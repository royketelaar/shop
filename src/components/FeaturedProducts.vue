<template>
  <div v-if="products">
    <h1 class="text-4xl font-bold mb-8">Featured</h1>
    <div class="grid grid-rows-1 grid-flow-col gap-12">
      <div
        v-for="product in products.slice(0, 3)"
        :key="product.id"
        class="shop-item shadow hover:shadow-lg transition cursor-pointer"
      >
        <product-card :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  props: ["products"],
  components: {
    ProductCard,
  },
};
</script>

<style lang="scss" scoped>

</style>
