//8/ Template is the same as it was, the only difference is 1 root element
<template>
    <div>{{ product.name }}</div>
</template>

<script>

export default {
  name: "ProductList",
  // The case is, we have to define props (inputs)
  props: {
    // Here we also added some basic props validation
    product: {
      type: Object
    }
  }
};
</script>

<style scoped>
</style>
