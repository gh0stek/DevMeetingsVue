<!--10- 1. There's a <template> part -->
<template>

  <div id="app">
    <h1>task1</h1>
    <h2>Products list</h2>
    <product-list :products="products"></product-list>
    <!-- 5. v-if can be helpful with conditional statements -->
    <form @submit.prevent="onSubmit()">
      <!--3- 1. name attribute is now required as well as v-validate with its own DSL values -->
      <input
        name="product"
        v-model="newProduct.name"
        v-validate="'required|min:3'"
      >
      <button>Add</button>
      <!--3- 2. errors are added by default when validation is initialized and have some useful methods -->
      <div v-show="errors.has('product')">
        {{ errors.first('product') }}
      </div>
    </form>
    <!-- 6. v-on adds an handler and :click is the name of the event, then goes the function to invoke -->
    <button v-on:click="removeLast()">Remove last item</button>



    <h2>Orders list</h2>
    <ul>
      <li v-for="o in orders" :key="o.id">{{ o.name }}</li>      
    </ul>
    <!-- 5. v-if can be helpful with conditional statements -->
    <p v-if="!orders.length">No orders!</p>
    <form @submit.prevent="onSubmitOrders()">
      <!--3- 1. name attribute is now required as well as v-validate with its own DSL values -->
      <input
        name="order"
        v-model="newOrder.name"
        v-validate="'included:products'"
        type="text"
      >
      <button>Add</button>
      <!--3- 2. errors are added by default when validation is initialized and have some useful methods -->
      <div v-show="errors.has('order')">
        {{ errors.first('order') }}
      </div>
    </form>
    <!-- 6. v-on adds an handler and :click is the name of the event, then goes the function to invoke -->
    <button v-on:click="removeLast()">Remove last item</button>
    
  </div>
</template>

<!--21- 2. A <script> part -->
<script>
// 4. Now App is not mounted itself, we're just creating a component (more on that later - hold your horses!)
import uuid from 'uuid/v4';
import ProductList from './components/ProductList'

export default {
  name: 'app',
  components: {
    ProductList
  },
  //11/ 5. Data can no longer be just an object to prevent accidental shared state
  data() {
    return {
      products: [{
        id: 0,
        name: 'Coffee'
      }, {
        id: 1,
        name: 'Pizza'
      }],
      orders:[{
        id: 0,
        name: 'Coffee'
      }],
      newProduct: {
        name: ''
      },
      newOrder: {
        name: ''
      }
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
    },
    onSubmit() {
      // 3. On the JS side we need to use yet another injected value called $validator to validate all the fields
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.products.push({
          id: uuid(),
          ...this.newProduct
        });
        this.newProduct.name = '';
        // 4/ and reset validation state after adding a product
        this.$validator.reset();
      });
    },
    onSubmitOrders() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.ordrs.push({
          id: uuid(),
          ...this.newOrder
        });
        this.newOrder.name = '';
        this.$validator.reset();
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
