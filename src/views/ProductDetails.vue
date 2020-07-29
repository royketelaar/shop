<template>
  <div class="container mx-auto mt-20" v-if="product">
    <h1 class="text-4xl font-bold mb-8">{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <span class="price text-2xl block pb-4"> € {{ product.price }} </span>
    <img
      :src="`http://localhost:1337${product.image.formats.medium.url}`"
      class="mb-2"
      alt=""
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["product_id"],
  data() {
    return {
      product: null,
      recentlyViewedProducts: []
    };
  },
  mounted() {
    if (localStorage.getItem("recentlyViewedProducts")) {
      try {
        this.recentlyViewedProducts = JSON.parse(localStorage.getItem("recentlyViewedProducts"));
      } catch (e) {
        localStorage.removeItem("recentlyViewedProducts");
      }
    }
    axios
      .get("http://localhost:1337/Products/" + this.product_id)
      .then((response) => {
        this.product = response.data;
        this.$nextTick(() => {
          this.addRecentlyViewedProduct();
        });
      });
  },
  methods: {
    addRecentlyViewedProduct() {
      let exists = false;
      this.recentlyViewedProducts.map((product) => {
        if (product.id === this.product.id) {
          exists = true;
        }
      });
      if (!exists) {
        this.recentlyViewedProducts.push(this.product);
        if (this.recentlyViewedProducts.length > 5) {
          this.recentlyViewedProducts = this.recentlyViewedProducts.slice(-5);
        }
        this.saveRecentlyViewedProducts();
      }
    },
    saveRecentlyViewedProducts() {
      const parsed = JSON.stringify(this.recentlyViewedProducts);
      localStorage.setItem("recentlyViewedProducts", parsed);
    }
  }
};
</script>

<style lang="scss" scoped></style>
