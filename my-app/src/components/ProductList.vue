//8/ Template is the same as it was, the only difference is 1 root element
<template>
  <div>
    <ul>
      <li v-for="p in products" :key="p.id">
        <ProductItem :product="p"></ProductItem>
      </li>
    </ul>
    <p v-if="!products.length">No products!</p>
  </div>
</template>

<script>
import ProductItem from './ProductItem'
export default {
  name: "ProductList",
  components: {
    ProductItem
  },
  // The case is, we have to define props (inputs)
  props: {
    // Here we also added some basic props validation
    products: {
      type: Array
    }
  }
};
</script>

<style scoped>
</style>
