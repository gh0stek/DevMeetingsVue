import axios from 'axios';

// Majestic 'store' is just a variable in our case
const store = {
  //3/ It holds a state itself
  state: {
    products: []
  },
  //6/ And methods to update
  async fetchProducts(searchText) {
    if (searchText == null || searchText == '') this.state.products = await axios.get('https://api.openbrewerydb.org/breweries').then(res => res.data);
    else this.state.products = await axios.get('https://api.openbrewerydb.org/breweries?by_name='+searchText).then(res => res.data);
  },
  addProduct(product) {
    this.state.products.push(product);
  }
};

export default store;
