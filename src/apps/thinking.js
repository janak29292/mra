import React from 'react';

function fetchSortedProduct(products) {
    let productList = []
    products.forEach(product => {
      let productInstance = productList.find(x => x.category === product.category)
      if (productInstance) {
        productList[productList.indexOf(productInstance)].data.push({
          price: product.price,
          stocked: product.stocked,
          name: product.name
        })
      } else {
        productList.push({
          category: product.category,
          data: [{
            price: product.price,
            stocked: product.stocked,
            name: product.name
          }]
        })
      }
    });
    return productList;
  }
  
  function filterProducts(query, showStocked, products){
    if (showStocked){
      products = products.filter((x) => (x.stocked))
    }
    products = products.filter((x) => (x.name.toLowerCase().includes(query.toLowerCase())))
    return products
  }
  
  const ProductCategory = (props) => {
    return (
      props.data.map((instance) =>
        <ProductData key={instance.category} category={instance.category} data={instance.data} />
      )
    )
  }
  
  const ProductData = (props) => {
    return (
      <React.Fragment>
        <tr>
          <th colSpan="2">
            {props.category}
          </th>
        </tr>
        {
          props.data.map((instance, index) =>
          <tr key = {index}>
              <td style={!instance.stocked ? { color: "red" } : {}}>{instance.name}</td>
              <td>{instance.price}</td>
          </tr>
          )
        }
      </React.Fragment>
  
    )
  }
  
  class ProductTable extends React.Component {
    render() {
      let productList = fetchSortedProduct(this.props.products)
      return (
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          <ProductCategory data={productList} />
          </tbody>
        </table>
      );
    }
  }
  
  class SearchBar extends React.Component {
    constructor(props){
      super(props)
    }
  
    handleChange(event){
      this.props.searchKeyChange(event)
    }
  
    handleTick(event){
      this.props.isStockedChange(event)
    }
  
    render() {
      return (
        <form>
          <input type="text" placeholder="Search..." value={this.props.query} onChange={(e) => this.handleChange(e)}/>
          <p>
            <input type="checkbox" checked={this.props.isStocked} onChange={(e) => this.handleTick(e)} />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
  }
  
  class FilterableProductTable extends React.Component {
    constructor(props){
      super(props)
      this.state = {products: this.props.products,
                    query: '',
                    showStocked: false}
    }
    isStockedChange = (event) => {
      const showStocked = !this.state.showStocked
      const filteredProducts = filterProducts(this.state.query, showStocked, this.props.products)
      this.setState({
        showStocked, products: filteredProducts
      })
    }
    searchKeyChange = (event) => {
      const query = event.target.value
      const filteredProducts = filterProducts(query, this.state.showStocked, this.props.products)
      this.setState({products: filteredProducts, query})
    }
    render() {
      const props = {
        query: this.state.query,
        isStockedChange: this.isStockedChange,
        searchKeyChange: this.searchKeyChange,
        isStocked: this.state.showStocked
      }
      return (
        <div>
          <SearchBar {...props} />
          <ProductTable products={this.state.products} />
        </div>
      );
    }
  }
  
  export default FilterableProductTable