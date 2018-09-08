<!--10- 1. There's a <template> part -->
<template>


  <div id="app">
    <h1>task1</h1>
    <h2>My awesome list</h2>
    <ul>
      <!-- 2. Then, we're using built-in v-for directive to iterate over products -->
      <li v-for="p in products" :key="p.id">{{ p.name }}</li>      
      <!-- <li v-fonpmr="p in products">{{ p.name }}
      <button v-on:click="removeSelected(p.id)">Remove</button> -->
    <!-- </li> -->
    </ul>
    <!-- 5. v-if can be helpful with conditional statements -->
    <p v-if="!products.length">No products!</p>
    <!-- 6. v-on adds an handler and :click is the name of the event, then goes the function to invoke -->
    <button v-on:click="removeLast()">Remove last item</button>
    <button v-on:click="addNew(product)">Add new item</button>
    <input v-model="product"  placeholder="add multiple lines">
  </div>
</template>

<!--21- 2. A <script> part -->
<script>
// 4. Now App is not mounted itself, we're just creating a component (more on that later - hold your horses!)
import uuid from 'uuid/v4';

export default {
  name: 'app',
  product:'',

  //11/ 5. Data can no longer be just an object to prevent accidental shared state
  data() {
    return {
      products: [{
        id: 0,
        name: 'Coffee'
      }, {
        id: 1,
        name: 'Pizza'
      }]
    }
  },
  methods: {
    removeLast() {
      this.products.pop();
    },
    addNew(product) {
      this.products.push({
          id:uuid(),
          name:product
      });
    }
  }
}
</script>

<!--9- 3. And <style> part -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
