import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

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
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}


const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);
serviceWorker.unregister();
