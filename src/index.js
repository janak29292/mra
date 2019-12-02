import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import TodoApp from './apps/todo'
// import FilterableProductTable from './apps/thinking'
// import store from './redux'
import A from './apps/learnredux'
// import Appl from './apps/multiplereducers'
import ReducerContainer from './redux/reducers'
// import reducer from './redux/reducers/reducer'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

// sagaMiddleware.run()

const store = createStore(ReducerContainer, applyMiddleware(sagaMiddleware))
// const store = createStore(ReducerContainer)
// const store = createStore(reducer)
// 'REact Router'
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// 'Thinking in React
// const PRODUCTS = [
//   { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
//   { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
//   { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
//   { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
//   { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
//   { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
// ];
// ReactDOM.render(
//   <FilterableProductTable products={PRODUCTS} />,
//   document.getElementById('root')
// );

// 'React Redux'
// ReactDOM.render(
//   <Provider store={store}>
//     <TodoApp />
//   </Provider>,
//   document.getElementById('root')
// )

ReactDOM.render(
  <Provider store={store}>
    <A />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister();