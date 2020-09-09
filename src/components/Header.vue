<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-teal-500 p-6 relative"
  >
    <router-link to="/" class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Shop</span>
    </router-link>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link
          to="/products"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Products
        </router-link>
      </div>
      <div>
        <button
          @click="toggleCartModal()"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          Cart
        </button>
      </div>
      <cart-modal v-if="showCart" v-click-outside="hide" />
    </div>
  </nav>
</template>

<script>
import ClickOutside from "vue-click-outside";
import CartModal from "./CartModal";

export default {
  data() {
    return {
      showCart: false,
    };
  },
  methods: {
    toggleCartModal() {
      this.showCart = !this.showCart;
    },
    hide() {
      this.showCart = false;
    },
  },
  mounted() {
    this.popupItem = this.$el;
  },
  directives: {
    ClickOutside,
  },
  components: {
    CartModal,
  },
  watch: {
    $route(to, from) {
      this.showCart = false;
    },
  },
};
</script>
