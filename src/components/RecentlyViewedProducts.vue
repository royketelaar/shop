<template>
  <div>
    <h2 class="text-2xl font-bold mb-8">Recently viewed</h2>
    <div v-for="product in recentlyViewedProducts" :key="product.id"
      class="shop-item shadow hover:shadow-lg transition cursor-pointer">
      <product-card :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  data () {
    return {
      recentlyViewedProducts: [],
      name: 'RecentlyViewedProducts'
    }
  },
  mounted() {
    if (localStorage.getItem("recentlyViewedProducts")) {
      try {
        this.recentlyViewedProducts = JSON.parse(
          localStorage.getItem("recentlyViewedProducts")
        );
      } catch (e) {
        localStorage.removeItem("recentlyViewedProducts");
      }
    }
  },
  components: {
    ProductCard
  }
};
</script>

<style></style>
