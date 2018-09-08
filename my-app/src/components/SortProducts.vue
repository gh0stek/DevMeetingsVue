<template>
  <button v-on:click="SortProducts()">Sort</button>
</template>

<script>
export default {
  name: "SortProducts",
  // The case is, we have to define props (inputs)
  props: {
    // Here we also added some basic props validation
    products: {
      type: Array
    }
  },
  methods:{
    SortProducts(){
      this.$emit('sort-products');
    }
  }
};
</script>

<style scoped>

</style>